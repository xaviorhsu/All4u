<?php
header('Access-Control-Allow-Origin: http://websrv.local.tw,http://tncath.catholic.org.tw ');
//header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET');
header('Access-Control-Max-Age: 1000');
if(isset($_REQUEST["js_cb"])) header("Content-Type: application/json; charset=utf-8");                              
else                          header("Content-Type: text/html; charset=utf-8");
if (!isset($_SESSION)) {  @session_start();}
/** ------------------------------------------------------------------------------------------------------------------ **/
function sendmail($to,$email_subject,$email_message,$from,$cc=null) {
  $charset = "utf-8";
  $from = '=?'.$charset.'?B?'.base64_encode($from).'?='.'<postmaster@localhost>';

  $headers = "From: $from\r\nMIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\nContent-Transfer-Encoding: base64\r\n";

  if ($cc) {  $headers .="CC: $cc\r\n"; }

  $email_subject = '=?'.$charset.'?B?'.base64_encode(str_replace("\r", '', str_replace("\n", '', $email_subject))).'?=';
  $email_message = chunk_split(base64_encode(str_replace("\r\n.", " \r\n..", str_replace("\n", "\r\n", str_replace("\r", "\n", str_replace("\r\n", "\n", str_replace("\n\r", "\r", $email_message)))))));

  //$ret= true;      
  $ret=mail($to, $email_subject ,$email_message, $headers);
  return $ret;
}
/** ------------------------------------------------------------------------------------------------------------------ **/
function counts(){        //web_counters visit data 
/** counts.txt data fields 今年計,1mon,2mon,3mon,4mon,5mon,6mon,7mon,8mon,9mon,10mon,11mon,12mon,西元年,全累計;**/
/**                        去年計,1mon,2mon,3mon,4mon,5mon,6mon,7mon,8mon,9mon,10mon,11mon,12mon,西元年,全累計;**/
/**                        前年計,1mon,2mon,3mon,4mon,5mon,6mon,7mon,8mon,9mon,10mon,11mon,12mon,西元年,全累計;**/
/**                      大前年計,1mon,2mon,3mon,4mon,5mon,6mon,7mon,8mon,9mon,10mon,11mon,12mon,西元年,全累計 **/  
  
    $load_years_count=explode(";",file_get_contents("counts.txt"));
    $load_count = explode(",",$load_years_count[0]);
    if(date("Y")<>$load_count[sizeof($load_count)-2]) {
    for ($c=sizeof($load_years_count)-1;$c>0;$c--) { $load_years_count[$c] = $load_years_count[$c-1];  }
    for ($c=0;$c<sizeof($load_count)-2;$c++)       { $load_count[$c] = "0"; }
    $load_count[$c] = date("Y");
    } 
  //$load_count = explode(",",file_get_contents("counts.txt"));
  if(empty($_COOKIE["counts"])){
    setcookie("counts","true",time()+5);
    $load_count[0]++; $load_count[date("n")]++; $load_count[sizeof($load_count)-1]++;
    $text_cnt="";
    foreach($load_count as $key => $value) {  $text_cnt.=($key<sizeof($load_count)-1)?$value.",":$value.";"; }
    $text_cnt.=$load_years_count[1].";".$load_years_count[2].";".$load_years_count[3]; 
    //foreach($load_count as $key => $value) {  $text_cnt.=($key<sizeof($load_count)-1)?$value.",":$value; }
    file_put_contents("counts.txt",$text_cnt);
  }
  return $load_count[sizeof($load_count)-1];
}
/** ------------------------------------------------------------------------------------------------------------------ **/
function videoslist(){        //videos_list visit data 
/** videoslist.txt data fields; @=YouTube_Video_addr**/
/**         No今年度(052018),mon1@,mon2@,mon3@,mon4@,mon5@,mon6@,mon7@,mon8@,mon9@,mon10@,mon11@,mon12@,
            13videos_list@,14videos_list@,15videos_list@,163videos_list@,17videos_list@ **/
            
    $load_contents=explode(",",file_get_contents("videoslist.txt")); $load_contYe = substr($load_contents[0],2);
    $maxitem = sizeof($load_contents);
      if(date("Y")>$load_contYe) {      
          $load_contNo = intval(substr($load_contents[0],0,2)); $load_contents[0] = substr($load_contents[0],0,2).date("Y");        
          for ($c=$maxitem-$load_contNo;$c<$maxitem-1;$c++)  { $load_contents[$c] = $load_contents[$c+1]; }   //$load_contents[13]~[16]
        }
      $data_str=""; for ($c=0;$c<$maxitem-1;$c++) {$data_str.=$load_contents[$c].',';}    
      $data_str.=$load_contents[$maxitem-1];
      if(date("Y")>$load_contYe) file_put_contents("videoslist.txt",$data_str);
  return $data_str;
}
/** ================================================================================================================== **/
if (isset($_REQUEST["opt"])) {
    $sw=$_REQUEST["opt"];
    switch($sw)  {
        case "web_cnts" :   //web_cnts data
              unset($_SESSION["tncath"],$_SESSION["loginMember"],$_SESSION["subSys"]);
              $result=counts();
              for ($i=0;$i<(7-strlen($result));$i++) {$result="0".$result;}
              $msg = "您是第 ".$result." 位訪客";
              if(isset($_REQUEST["js_cb"]))
                   {  $arr1 = array ('Ans'=>$msg);
                      //header("Content-Type: application/json");
                      //組成 $_GET['callback']({key:value})
                      print $_REQUEST['js_cb'].'('.json_encode($arr1,JSON_NUMERIC_CHECK).')';
                   }
              else {  print $msg; }
              exit;
        break;
    /** ------------------------------------------------------------------------------------------------------------- **/
        case "web_vdls" :   //web_videos data
              $result=videoslist("a");
              $msg = $result;
              if(isset($_REQUEST["js_cb"]))
                   {  $arr1 = array ('Ans'=>$msg);
                      //header("Content-Type: application/json");
                      //組成 $_GET['callback']({key:value})
                      print $_REQUEST['js_cb'].'('.json_encode($arr1,JSON_NUMERIC_CHECK).')';
                   }
              else {  print $msg; }
              exit;
        break;
    /** ------------------------------------------------------------------------------------------------------------- **/
        case "web_ctls" :
              if ($_REQUEST["act"]=="in") {$_SESSION["tncath"]="active";}
              if ($_REQUEST["act"]=="ot") {unset($_SESSION["tncath"],$_SESSION["loginMember"],$_SESSION["subSys"]);}
              $msg = "bkendsys";
              if(isset($_REQUEST["js_cb"]))
                   {  $arr1 = array ('Ans'=>$msg);
                      //header("Content-Type: application/json");
                      //組成 $_GET['callback']({key:value})
                      print $_REQUEST['js_cb'].'('.json_encode($arr1,JSON_NUMERIC_CHECK).')';
                   }
              else {  print $msg; }
              exit;
        break;
    /** ------------------------------------------------------------------------------------------------------------- **/
        case "web_maqu" :
              include ("../htnew/ht_indx.php");
              $msg = $htInfo;
              if(isset($_REQUEST["js_cb"]))
                   {  $arr1 = array ('Ans'=>$msg);
                      //header("Content-Type: application/json");
                      //組成 $_GET['callback']({key:value})
                      print $_REQUEST['js_cb'].'('.json_encode($arr1,JSON_NUMERIC_CHECK).')';
                   }
              else {  print $msg; }
              exit;
        break;
    /** ------------------------------------------------------------------------------------------------------------- **/
        case "upl_fil" :              
              $outmsg=""; $filename=$_REQUEST["fn"];  $i=count($_FILES[$filename]["name"]);
              $fmsg='&nbsp;　　　['.$i.'筆]&nbsp;《上傳檔案資訊》<br/>';
              srand((double)microtime()*1000000); $randval = rand(10,99);
              $newname="F".date(dis).$randval;  $filna="";
              for ($j=0;$j<$i;$j++) {                            //儲存上傳的檔案
                  if ($_FILES[$filename]["error"][$j]==0) {                    
                    $Fname = explode(".",$_FILES[$filename]["name"][$j]);
                    $filna = $Fname[count($Fname)-1];
                    switch($filna)  {
                      case "pdf" :
                      case "PDF" : $filna="pdf"; $newfilename=$newname."_0.pdf";
                      break;
                      case "jpeg" :
                      case "JPEG" : 
                      case "jpg" :
                      case "JPG" : $filna="jpg"; $newfilename=$newname."_1.jpg";
                      break;
                      }
                    if (move_uploaded_file($_FILES[$filename]["tmp_name"][$j],"uploads/".$newfilename))
                          { $outmsg='【傳錄成功！】'; }
                    else  { $outmsg='【傳成錄敗！】'; }
                  $fmsg.=$outmsg.'原檔名：'.$_FILES[$filename]["name"][$j];                  
                  $fmsg.='<input type="hidden" class="'.$filna.'" value="'.$newfilename.'"><br/>'; 
                  }
              }
              if ($i==1) { if($filna=="pdf") $fmsg.='<input type="hidden" class="jpg" value="">';
                           if($filna=="jpg") $fmsg.='<input type="hidden" class="pdf" value="">'; }
                           
              if (isset($_GET["fp"])&&$_GET["fp"]<>""&&file_exists("uploads/".$_GET["fp"])) {unlink("uploads/".$_GET["fp"]);}
              if (isset($_GET["fj"])&&$_GET["fj"]<>""&&file_exists("uploads/".$_GET["fj"])) {unlink("uploads/".$_GET["fj"]);}
              
              $arr1 = array ('Ans'=>$fmsg); print (json_encode($arr1,JSON_NUMERIC_CHECK));
              exit;            
        break;
    /** ------------------------------------------------------------------------------------------------------------- **/
        case "snd_mal" :   //send email chk
              $nowdate = date("Y-m-d H:i:s"); $txtF = nl2br($_REQUEST['m_txtfd']);
              $testcase= (isset($_REQUEST["tm"]) && $_REQUEST["tm"]=="y")? "<= 測 試 個 案 =>":"";
              $body1    = <<<EOT
<table  width="500" border="1" bordercolor="#99CCCC" align="left" cellpadding="0" cellspacing="0" style="font-size:0.87em; float:left">	
            <tr bgcolor="#99CCCC"><td align="center" height="23" colspan="2" style="font-size:14px;color:darkred;">
                      有關【{$_REQUEST['sem']}】資料 {$testcase} ({$nowdate})</td>
            </tr>
            <tr>
              <td align="center" width="110">*{$_REQUEST['sem']}：</td>
              <td width="390">
EOT;
              $text1 = '';
              switch($_REQUEST['sem'])  {
                      case "奉獻捐款" :
              $text1 = "【項目/週期/方式】{$_REQUEST['m_item']}&nbsp;/&nbsp;每{$_REQUEST['m_period']}&nbsp;&nbsp;{$_REQUEST['m_method']}&nbsp;【金額】{$_REQUEST['m_money']}";
                      break;
                      case "參訪朝聖" :
              $text1 = "【日期/時間】{$_REQUEST['m_date']}&nbsp;的&nbsp;{$_REQUEST['m_time1']}&nbsp;~&nbsp;{$_REQUEST['m_time2']}<br/>【單位】{$_REQUEST['m_unit']}&nbsp;【人數】{$_REQUEST['m_person']}";
                      break;
                      case "其　　它" :
              $text1 = "【事由摘要】{$_REQUEST['m_subj']}";
                      break;
                      }
              $body2    = <<<EOT
              </td>              
            </tr>
            <tr>
              <td align="center">*聯絡人名：</td><td>&nbsp;{$_REQUEST['m_realname']}&nbsp;
EOT;
              $text2 = ($_REQUEST['sem']=='奉獻捐款')?'(捐款者)':'';
              $body3    = <<<EOT
              　　　　　&nbsp;【英文姓名】：{$_REQUEST['m_englishname']}</td>
            </tr>
            <tr>
              <td align="center">*電子信箱：</td><td>&nbsp;{$_REQUEST['m_email']}</td>
            </tr>
            <tr>
              <td align="center">*聯絡地址：</td><td>&nbsp;[{$_REQUEST['m_city']}&nbsp;{$_REQUEST['m_cty']}]&nbsp;[{$_REQUEST['m_canton']}&nbsp;{$_REQUEST['m_catn']}]&nbsp;{$_REQUEST['m_address']}</td>
            </tr>
            <tr>
              <td align="center">*聯絡電話：</td><td>&nbsp;{$_REQUEST['m_phoneArea']}-{$_REQUEST['m_phone']}&nbsp;　　*【行動電話】：{$_REQUEST['m_cell']}</td>
            </tr>
            <tr>
              <td align="center">&nbsp;留言內容：</td><td>{$txtF}</td>
            </tr>
            <tr>
              <td align="center">&nbsp;聲明事項：</td>
              <td>
EOT;
              $text3 = ($_REQUEST['sem']=='奉獻捐款')?' ■、本登記之資料僅限於開立捐贈收據時使用。<br/>':'';
              $body4    = <<<EOT
                    ■、我們將會嚴密保管保密您的這些相關資料。<br/>
                    ■、除非經您的同意資料不會透露給他人知悉。
              </td>
            </tr>
            <tr bgcolor="#99CCCC"><td height="23" colspan="2"><hr size="2" style="color:orange;" noshade="noshade" /></td></tr>
</table>
EOT;
              $body=$body1.$text1.$body2.$text2.$body3.$text3.$body4;
              $resp=0;
              if (isset($_REQUEST["tm"]) && $_REQUEST["tm"]=="y")
                   $resp=sendmail('','有關 來信者【'.$_REQUEST['sem'].'】資料',$body,'【天主教台南教區中華聖母主教座堂】網站','adnil.hsu@gmail.com');
              else $resp=sendmail('andre.hky@gmail.com','有關 來信者【'.$_REQUEST['sem'].'】資料',$body,'【天主教台南教區中華聖母主教座堂】網站','cath2139013@yahoo.com.tw,d120124@yahoo.com.tw');
              $outmsg2='1,【資料已寄出，我們將會為您服務盡速處理！】'; $outmsg3='0,【資料寄送有誤, 請直接聯絡人員處理！】';
              $responseText=($resp)?$outmsg2:$outmsg3;
              if(isset($_REQUEST["js_cb"]))
                   {
                      $arr1 = array ('Ans'=>$responseText);
                          //header("Content-Type: application/json");
                          //組成 $_GET['callback']({key:value})
                      print $_REQUEST['js_cb'].'('.json_encode($arr1,JSON_NUMERIC_CHECK).')';
                   }
              else {  print ($responseText);  }
              exit;
        break;
        case "web_io2ots" :
              $load_years_count=explode(";",file_get_contents("counts.txt"));
              //$load_count = new array();
              for ($j=0;$j<sizeof($load_years_count);$j++) { $load_count[$j] = explode(",",$load_years_count[$j]); }
              if(isset($_REQUEST["js_cb"]))
                   {
                      $arr1 = array ('Ans'=>$load_count);
                          //header("Content-Type: application/json");
                          //組成 $_GET['callback']({key:value})
                      print $_REQUEST['js_cb'].'('.json_encode($arr1,JSON_NUMERIC_CHECK).')';
                   }
              exit;
        break;
    } 
}
?>