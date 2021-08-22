/* --------------- Navitem --------------*/
http_ip=(location.hostname=="websrv.local.tw")?"http://"+location.hostname+"/All4u/" : "https://xaviorhsu.github.io/All4u/";
var navi = ["tastyfood;認識咱們;【 共生小聚 】;【 緣起簡介 】;【 觸口小棧 】;","historic;活動訊息;【大樹遊畫戶外寫生】;【馬爹Made印尼木雕】;【110年度活動一覽】;","family;小棧商展;【希伯崙商訊】;【香草潔護牙粉】;【身心潔康皂】;【回家友善種田】;【金檜傳說禮盒】;【波瑟沙植善農場】;","about;驚豔旅遊;【圓方居民宿】;【好假期民宿】;【適合院民宿】;【樂客背包旅棧】;【川雅居民宿】;【東照山心樂園】;【曼陀藝術村】;【情藝廊民宿】;【荷風自然民宿】;","contact;公益共享;【免費商店共食廚房】;【五甲社區無價市集】;【饅頭夫妻環島捐愛】;【若竹兒愛心商店】;","togoold;舊　版;"];

var str = "";
for (var item=0;item<navi.length;item++) {
    var ss=navi[item].split(";"); 					//alert(ss);
	var tmphref=( ss[0]=="togoold" )? http_ip+"index.html?sw=M":"#"+ss[0];  tmponclick= "$('#ifm,#pic').attr('src','');$('#wframe').hide();$('#mainbdy').show();" 
	str += '<li class="nav-item mx-0"><a class="nav-link py-1 px-1 rounded js-scroll-trigger" onclick="'+tmponclick+'" href="'+tmphref+'" >'+ss[1]+'</a></li>';
	}
$("#navbarResponsive ul").html(str);
/* --------------- Navidat --------------*/
var yymmddcc=show_today();
      date='<b>民國'+(yymmddcc[0]-1911)+'年'+yymmddcc[2]+'月'+yymmddcc[3]+'日 星期'+yymmddcc[4]+'</b>';
      $('#Dd0').html(date);
/*----------------------------------------------------------------------------------------  
  var url      = http_ip+"php/gp_Ajax.php?js_cb=?";
  var options  = "opt=web_cnts";
  　　DoAjax("counters",'j',url,options);
//---------------------------------------------------------------------------------------- */
//            產生民國xxx年xx月xx日星期X xx時xx分xx秒的資料
function show_today(){
    var today=new Date(); var weekday=["日","一","二","三","四","五","六"]; 
    var result_today = new Array();    
    result_today[0]=today.getFullYear();                                                    //西元年
    result_today[1]=today.getFullYear()-1911;                                               //民國年
    var Mon=today.getMonth()+1;
    result_today[2]=(Mon<10)?('0'+Mon):Mon;                                                 //月
    result_today[3]=(today.getDate()<10)?('0'+today.getDate()):today.getDate();             //日
    result_today[4]=weekday[today.getDay()];                                                //星期    
    result_today[5]=(today.getHours()<10)?('0'+today.getHours()):today.getHours();          //小時
    result_today[6]=(today.getMinutes()<10)?('0'+today.getMinutes()):today.getMinutes();    //分
    result_today[7]=(today.getSeconds()<10)?('0'+today.getSeconds()):today.getSeconds();    //秒
    return result_today;
  }
//------------------------------------------
function DoAjax(id,sw,url,options) {                       //alert("Ajax <= ("+id+" ~ "+sw+" ~ "+url+" ~ "+options+") => Ajax"); 
    switch(sw)  {
      //Ajax javascript 語法  perform same domain -----------------------------------------------
        case "g" :  //GET方式
        case "p" :  //POST方式
        case "f" :  //POST方式  UploadFile        
                    xmlHttp.abort;
                    
                    if (sw=="g")  { xmlHttp.open('GET',url+"?"+options,true); xmlHttp.send(null); }
                    else          { xmlHttp.open('POST',url,true);
                                    if(sw=="p")  xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                                    else         xmlHttp.setRequestHeader("Content-Type","multipart/form-data"); 
                                    xmlHttp.send(options);  }//這裡面指定要POST的值  Send to server
                    
                    if (sw=="f")  { show_sucd(id); }      //upload a file  //xmlHttp.setRequestHeader("Content-Type","multipart/form-data");
                    else          { show_succ(id); }                       //xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            				                                                       //xmlHttp.setRequestHeader("Content-Type","text/plain");
        break;
      //Ajax jQuery 語法  perform cross domain ---------------------------------------------------
        case "j" :  //$.getJSON方式 jsonp (need callback)                    
                    var data = $.getJSON(url,options);
                    //成功得到資料 jQuery.getJSON(url,data,success(data,status,xhr))
                    $.getJSON(url,options,function(response_msg,status,xhr){
                      //成功得到資料
                      if (status=="success") { 
                          $.each(response_msg, function(key,val) {
                              info=(key=="Ans")?val:"【F_ERROR_F】";						//alert("j ==> "+id+"~~"+info);
                              switch (id) {
                                case "counters": { }                                       						break;
                                case "dontMsg" : { outmsg=info.substr(2); code_no=info.substr(0,1);
                                                   alert(outmsg); if (code_no) $('#bp_div10_1,#bp_div10_2').toggle();
                                                 }                                                              break;
                                case "myText"  : {  mymsg=info; $("#"+id).html(info); }                         break; 
                                case "vdolist" : { utube86 = info.split(",");                                                 
													$("#ifm_t").attr("src","https://www.youtube.com/embed/"+utube86[parseInt(yymmddcc[2])]);
												 }        														break;
                                case "massppt" : { utube97 = info.split(",");  
                                                   var mspt_n=parseInt(utube97[0].substr(0,2));                                             
                                                   for ( var i=1; i<=mspt_n; i++)
                                                 {  mspt_123y=utube97[i].substr(0,3); mspt_y=utube97[i].substring(3);
                                                 $("#tbL1 tbody tr.tdy1 td a span."+mspt_123y).html(mspt_y);  } } break;                                
                              } 
                          }); }
                      //取得資料失敗
                      else if (status=="error") {
                          //alert("<== fail getting data,response_msg= "+response_msg+" ==>");
                          $("#"+id).html("fail getting data,response_msg= "+response_msg);
                          }
                  } );
        break;
        case "s" :  //$.ajax方式 use POST JSONP（JSON with Padding）
        case "u" :  //POST方式  UploadFile（JSON no Padding）
                    var o_boln=true;          var o_enctype="application/x-www-form-urlencoded";
                    if (sw=="u")     { o_boln=false;  o_enctype="multipart/form-data"; }
                    //if (id=="myText"){ o_boln=false; }
                    $.ajax({
                          url        : url,       // point to server-side PHP script
                          type       : 'POST',
                          data       : options,
                          //dataType   : 'text',  // what to expect back from the PHP script, if anything
                          dataType   : 'json',    // use jsonp/json data type in order to perform cross domain ajax
                          enctype    : o_enctype,
                          crossDomain: true,
                          async      : o_boln,
                          cache      : false,                           
                          processData: o_boln,     // =false(tell jQuery not to process the data)
                          contentType: o_boln,     // =false(tell jQuery not to set contentType)
                          jsonp      : 'js_cb',
                          //成功得到資料
                          success    : function(response_msg,textStatus,jqXHR){ $.each(response_msg, function(key,val)
                                  { info=(key=="Ans")?val:"【F_ERROR_F】";
									            switch (id) {
                              case "counters": $("#"+id).html(info);                                 	break;
                              case "dontMsg" : { outmsg=info.substr(2); code_no=info.substr(0,1);
                                      alert(outmsg); if (code_no) change2div04(0); }        			break;
                              case "fmsg1"   : { document.getElementById(id).innerHTML = info;        //Upload File used 
                                      if($(".pdf:eq(0)").val()!="") $("#anpdf").val($(".pdf:eq(0)").val());
                                      if($(".jpg:eq(0)").val()!="") $("#anjpg").val($(".jpg:eq(0)").val()); }	break;
                              case "myText"  : { mymsg=info; $("#"+id).html(info); }             		break;
                              case "vdolist" : { utube86 = info.split(",");                             //alert("s ==> "+info);
                                      var video_n=parseInt(utube86[0].substr(0,2));
                                      var video_y=parseInt(utube86[0].substring(2));
                                      for ( var i=utube86.length-1; i>utube86.length-1-video_n; i--)
                                          { $("#bt"+i).text("【"+video_y+"(1~12)】"); video_y--;  } }   break;
							  case "massppt" : { utube97 = info.split(",");                             //alert(info);
									  var mspt_n=parseInt(utube97[0].substr(0,2));                                             
									  for ( var i=1; i<=mspt_n; i++)
                                          { mspt_123y=utube97[i].substr(0,3); mspt_y=utube97[i].substring(3);
                                          $("#tbL1 tbody tr.tdy1 td a span."+mspt_123y).html(mspt_y);  } }		break;
															}
                                         })},
                          //取得資料失敗
                          error      : function(errorThrown,textStatus,jqXHR){
                                      //alert("<== fail getting data - "+textStatus+" "+errorThrown+" ==>");
                                      $("#"+id).html("<== fail getting data - "+textStatus+" == "+errorThrown+" ==>");                                                                              
                                       }
                          });
        break;
    }
  }