//----------------------------------------------------------------------------------------------- 
  var HTTP_IP=(location.hostname=="websrv.local.tw")?"http://"+location.hostname+"/Alieaea/" : "https://tncath.catholic.org.tw/Alieaea/";
  var opt;var t;var url=HTTP_IP+"php/gp_Ajax.php?js_cb=?";//var url=HTTP_IP+"php/gp_Ajax.php?js_cb=?";
//-----------------------------------------------------------------------------------------------  
  // array LX=["name;Pic;addr;forms"] ==> type=w(web),f(facebook),v(vidio)
  var L0=["０８０家服社;L0;https://www.facebook.com/TOP5688;VqH0ez9LizI"];	var L1=["荷風然民宿;L1;http://a0982277513.yilan-travel.com.tw/;adj6an1rAxQ"];
  var L2=["川雅居民宿;L2;https://www.facebook.com/ChuanYaJuBnB/;"]; var L3=["情藝廊民宿;L3;https://www.facebook.com/permalink.php?story_fbid=2282920391993162&id=1615042895447585;"];
  var L4=["樂客包旅棧;L4;http://picbear.online/place/261785834182361;"]; var L5=["圓方居民宿;L5;https://www.booking.com/hotel/tw/yuan-fang-ju-min-su-jing-guan-can-ting.zh-tw.html;"];
  var L6=["川雅居民宿;L6;https://www.facebook.com/ChuanYaJuBnB/;"];
//-----------------------------------------------------------------------------------------------
/*  var L1=["p03;;;"]; var L2=["p61;f;https://www.facebook.com/TOP5688;"]; var L3=["p41;w;https://www.dfholidays.com/;"];
  var L4=["p62;w;http://www.happydreamstates.com.tw;"]; var L5=["p21;w;https://www.seniormagichouse.com/;"];
  var L6=["p51;w;https://www.zay.tw/;"]; var L7=["p52;w;http://www.evergreens.tw/;"]; var L8=["p11;v;Svuxj0Z_Isw;"];
  var L9=["p53;f;https://www.facebook.com/lifyl;https://goo.gl/8HxRKh"]; var L10=["p31;w;https://ourcitylove.wixsite.com/home/eat;"];
  var L_10=["p54;v;G3NCjaacAc0;"]; var L22=["p22;p;;https://docs.google.com/forms/d/1i5StDRSlduAziJKCSa60ZJqILx46ccX4w7m3vID6HhU/viewform?edit_requested=true"];
  
  var im11 = L8; var im12 = L5.concat(L22);  					 var im13 = L10; 			var im14 = L3;
  var im15 = L6.concat(L7).concat(L9).concat(L_10);  var im16 = L2.concat(L4);*/
//-----------------------------------------------------------------------------------------------
  var vL0  = ["p00;p00i;VqH0ez9LizI"]; var vL1 = ["p01;pxxi;adj6an1rAxQ"];
  var vL2  = ["p02;pxxi;NjYWBo0otHM"]; var vL3 = ["p03;pxxi;NjYWBo0otHM"];
  var vL4  = ["p04;pxxi;NjYWBo0otHM"]; var vL5 = ["p05;pxxi;NjYWBo0otHM"];
  var vL6  = []; var vL7  = []; var vL8 = []; var vL9 = []; var vLa = []; var vLb = []; var vLc = [];
//-----------------------------------------------------------------------------------------------
  var v430 = [];
  var v440 = ["v01;NjYWBo0otHM","v02;9tInTTSKR0w","v03;BxoThpNPpMc","v04;gC20UHvcUvI","v05;l8QU-aVw7Og"];
//array v450=["Pic;addr/vidio;name;forms"] ==> addr=web/facebook/blog,v(vidio),google's forms
  var v450 = ["f01;;希伯崙商訊<br>【有關表單】;https://docs.google.com/forms/d/1i5StDRSlduAziJKCSa60ZJqILx46ccX4w7m3vID6HhU/viewform?edit_requested=true"];
  var v460 = ["荷風然民宿;p01;http://a0982277513.yilan-travel.com.tw/","川雅居民宿;p02;https://www.facebook.com/ChuanYaJuBnB/","情藝廊民宿;p03;https://www.facebook.com/permalink.php?story_fbid=2282920391993162&id=1615042895447585","樂客包旅棧;p04;http://picbear.online/place/261785834182361","圓方居民宿;p05;https://www.booking.com/hotel/tw/yuan-fang-ju-min-su-jing-guan-can-ting.zh-tw.html",];
  var v461 = [];
  var v470 = ["q01;KMwj0KsAAOo;免費商店<br>共食廚房","q02;gmFMwsB2Fzw;五甲社區<br>無價市集","q03;WZuAOMZU5Qo;饅頭夫妻<br>環島捐愛"];
  var arr  = [];
  var audo;  var current_muc=Math.floor(Math.random()*2);
  $("#ado").attr("src","musics/mux"+current_muc+".mp3").prop("volume","0.8");
//$('#mpage').resizable();
//-----------------------------------------------------------------------------------------------     
  $(document).ready(function()  {
      var current_hgp=Math.floor(Math.random()*4);   $('#apDiv1').css('background-image','url(images/hfboth/hg'+current_hgp+'.jpg)');
      $('#apDiv4').css({'background-image':'url(images/hfboth/bg'+current_hgp+'.jpg','background-size':'cover'});
      var yymmddcc=show_today();  $('#show').html(screen.width+"*"+screen.height);
      date='<b>　Welcome To Our Web Site　民國'+(yymmddcc[0]-1911)+'年'+yymmddcc[2]+'月'+yymmddcc[3]+'日 星期'+yymmddcc[4]+'&nbsp;</b>';
      $('#Dd0').html(date);  fun_pic(); fun1('tb2','#tbmenu1 tr:eq(0) td a',''); $("#ado").hide(); funB(1);
      //jQuery("#a14").mouseover(function(){jQuery("#LQRcode").show();}).mouseout(function(){jQuery("#LQRcode").hide();});
 	  $("#pic1").hover( function(){ if(audo.played) audo.pause(); clearInterval(t);} , function(){ if(audo.paused) audo.play();	t=setInterval( mytime,4000); } ); 
	  // webcounters //
	  opt = "opt=web_cnts"; //alert(url+"<==>"+opt);
  　　callAjaxDo("counters",'s',url,opt);
// ----- //      
      $("#a00,#a11,#a12,#a14,#a15,#a16,#a18,#a19,#a43,#a44,#a45,#a46,#a47").css("cursor","pointer").click(function(){
        $('#apDiv1 span a.nav1,#apDiv4 span a.nav1').css({'color':'','background-color':'','box-shadow':''});
		$('#ifm,#v22 img').attr("src",""); $('#tb div.sect,#tb iframe.sect').hide();
        var pid=$(this).attr("id"); var i = pid.substring(1); var j = pid.substring(2); i=(i=="45"||i=="47")?"44":i; var sw = 0;
		$('#f44,#if1').attr("src","");	audo=document.getElementById("ado");
		switch(pid) { 
			case "a00":		i = "55"; fun1('tb2','#tbmenu1 tr:eq(0) td a','');	break;
			case "a15":
			case "a16":
			case "a18":
			case "a19":
			case "a11":     var madd=["https://calendar.google.com/calendar/embed?src=mig2f56hejor8v2gkli2l8h4t0%40group.calendar.google.com&ctz=Asia%2FTaipei","progs/contactus.htm","progs/copyright.htm","https://www.google.com/maps/embed?pb=!4v1562100564856!6m8!1m7!1s5uCkf5zBzMUCKphHifpGsA!2m2!1d23.43913057351233!2d120.6037758661164!3f137.8304896226552!4f11.627448721333849!5f0.7820865974627469","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13622.27355584881!2d120.60238164411471!3d23.44045528598859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eebc44c61e771%3A0xef1d60b13624310b!2z6buO5piO5ZyL5bCP!5e0!3m2!1szh-TW!2stw!4v1562136411546!5m2!1szh-TW!2stw"]
							var s = 0;
							switch(j) { case "1": s = 0; break; case "5": s = 1; break; case "6": s = 2; break;
										case "8": s = 3; break; case "9": s = 4; break; }
							$('#ifm').attr("src",madd[s]);	i = 11; sw = 1;	break;
			case "a12":
			case "a14":     sw = 1; var pimg = "images/x15.jpg"; var W = "100%";
							switch(i) {case "12": break;case "14": pimg = "images/MywebQR.png"; W = "320px"; break;}
							i = "22";$('#v22 img').attr("src",pimg).css("width",W); break;
			case "a43":		sw = 1; j=(i=="43")?"0":j; fun2("v"+i,j); break;
			case "a44":		sw = 1; fun2("v"+i,j); break;
			case "a45":		sw = 1; fun2("v"+i,j); break;
			case "a46":		sw = 1; fun2("v"+i,j); break;
			case "a47":		sw = 1; fun2("v"+i,j); break;
		}
		if (sw) { $(this).css({'color':'red','background-color':'yellow','box-shadow':'-5px 5px 5px gold'});}
		if(audo.paused) audo.play(); $('#v'+i).show();
       });
  });
//-----------------------------------------------------------------------------------------------  
  function fun2(S,P)	{
	switch(S) { 
		case "f44":   $('#v44,#v43').hide(); $("#f44").attr("src",P); $('#f44').show();
                      audo=document.getElementById("ado"); if(audo.played) audo.pause(); 
		break;
		case "v43":   $('#tb div.sect,#tb iframe.sect').hide();$('#v43').show();
					  $("#v43 div.iv43").html('<img class="im43" src="images/prods/p01.jpg" />').css("cursor","");
					  //$("#v43 div img").attr({"src":"images/prods/p01.jpg","onclick":""}).css("cursor","");					  
					  switch(P) {case "0": v430=vL0; break;case "1": v430=vL1; break;case "2": v430=vL2; break;case "3": v430=vL3; break;
								 case "4": v430=vL4; break;case "5": v430=vL5; break;case "6": v430=vL6; break;case "7": v430=vL7; break;
								 case "8": v430=vL8; break;case "9": v430=vL9; break;case "a": v430=vLa; break;case "b": v430=vLb; break;
								 case "c": v430=vLc; break;}
					  arr = v430; for (var item=0;item<arr.length;item++) { var ss=arr[item].split(";");					  
		$("#v43 div:eq("+item+") img").attr({"src":"images/ppics/"+ss[0]+".jpg","onclick":"fun2('f44','https://www.youtube.com/embed/"+ss[2]+"?autoplay=1&version=3&html5=1');"}).css('cursor','pointer');
					  $("#v43 div:eq(1) img").attr("src","images/ppics/"+ss[1]+".jpg"); }
		break;
		case "v44":   $("#v44 div img").attr({"src":"images/prods/p01.jpg","onclick":""}).css("cursor","");	$("#v44 div span.sp4").html("");
					  switch(P) {case "4": arr=v440; break;case "5": arr=v450; break;case "7": arr=v470; break; }
					  for (var item=0;item<arr.length;item++)	{ var ss=arr[item].split(";");
						  $("#v44 div:eq("+item+") img").attr("src","images/vpics/"+ss[0]+".jpg");   
						  if(ss[1]!="") $("#v44 div:eq("+item+") img").attr("onclick","fun2('f44','https://www.youtube.com/embed/"+ss[1]+"?autoplay=1&version=3&html5=1');").css('cursor','pointer');					  
						  if(P=="5")  { $("#v44 div:eq("+item+") span").html("<a>"+ss[2]+"</a>");
										$("#v44 div:eq("+item+") span a").attr({"href":ss[3],"target":"MFrame"}).css("text-decoration","none");	}
						  if(P=="7") 	$("#v44 div:eq("+item+") span").html(ss[2]);	
					  }  
		break;
        case "v46":   $("#v46 div span.sp3").html("【夥伴】");	$("#v46 div img").attr({"src":"images/prods/p01.jpg","onclick":""}).css("cursor","");
					  if (P=="1")	{ arr = v461;	$("#v46 div span a").attr("onclick","fun2('v46','0');"); }
					  else 			{ arr = v460;	$("#v46 div span a").attr("onclick","fun2('v46','1');"); }
					  for (var item=0;item<arr.length;item++) { var ss=arr[item].split(";");
					  $("#v46 div:eq("+item+") span.sp3").html(ss[0]);
		$("#v46 div:eq("+item+") img").attr({"src":"images/ppics/"+ss[1]+".jpg","onclick":"fun1('iw1',this,'"+ss[2]+"');"}).css('cursor','pointer');
					  }
		break; 
		 }
    }
  function fun1(S,F,P)	{  //  (S=tb2,im1,if1,iw1   F=this,)
     var subi=S.substr(0,3); var subj=S.substr(3,1);//alert(S);
		 $("#tb2,#im1,#if1").hide();
     if (subi=="im1")  { $("#im1 div img").attr("src","images/prods/p00.jpg").css("cursor",""); $("#im1 div a").html("");
      switch(subj) { case "1": len=im11.length; arr=im11; break; case "2": len=im12.length; arr=im12; break;
                     case "3": len=im13.length; arr=im13; break; case "4": len=im14.length; arr=im14; break;
                     case "5": len=im15.length; arr=im15; break; case "6": len=im16.length; arr=im16; break; }
      for (var item=0;item<len;item++) { var ss=arr[item].split(";");
        $("#im1 div:eq("+item+") img").attr("src","images/prods/"+ss[0]+".jpg").css('cursor','pointer');
        if (ss[1]=="v") { $("#im1 div:eq("+item+") img").attr("onclick","fun1('if1',this,'https://www.youtube.com/embed/"+ss[2]+"?autoplay=1&version=3&html5=1');"); }
        if (ss[1]=="f"||ss[1]=="w" )  { $("#im1 div:eq("+item+") img").attr("onclick","fun1('iw1',this,'"+ss[2]+"');"); }
        if (ss[3]!="")  { $("#im1 div:eq("+item+") a").html("【活動訊息】<br>【報名表單】").attr({"href":ss[3],"target":"MFrame"})
                          .css({"text-decoration":"none","background-color":"pink"}); }
      }
     }
     $('#if1,#f44').attr("src","");  audo=document.getElementById("ado");  //if(audo.paused) audo.play();
     if(subi=="tb2"||subi=="im1")  { $('#tbmenu1 td a').css({'background-color':'','border':'','box-shadow':''});
            $(F).css({'background-color':'#FA5','border':'solid 2px white','box-shadow':'2px 0px 5px black'});
            if (subi=="tb2"&&$(P).attr("class")=="Fta") { $('#apDiv1 span a.nav1').css({'color':'','background-color':'','box-shadow':''});
                  $('#tb div.sect,#tb iframe.sect').hide(); $('#f44,#if1').attr("src","");
                  if(audo.paused) audo.play(); $('#v55').show();} }    
     else if (subi=="if1")  { $("#if1").attr("src",P); if ($(F).attr("class")!="Fta") { if(audo.played) audo.pause(); } }
     else if (subi.substr(0,2)=="ft") {}
   //if (subi=="iw1")  { $("#im1").show(); window.open(P,"MFrame",);} else { $("#"+subi).show(); }
	 if (subi=="iw1")  { $("#tb2").show(); window.open(P,"MFrame",);} else { $("#"+subi).show(); }
    }
// ----- //
	var pic0=new Array();var net0=new Array();
  function fun_pic() {	for (var i=0;i<=6;i++)	{ var pp=this["L"+i][0].split(";"); //alert(pp[0]+"<>"+pp[1]+"<>"+pp[2]+"<>"+pp[3]);
	  pic0[i]="images/loops/"+pp[1]+".jpg"; net0[i]=pp[2];
	   } }
// ----- //  
	var curpno=0; var t,V;
  function funB(code) {
	audo=document.getElementById("ado");
	if ( code ) {  if(audo.paused) audo.play();	 t=setInterval( mytime,4000); }
    else {  if(audo.played) audo.pause();	clearInterval(t); } 
    }
  function mytime(){	 
    curpno++; if (curpno >  pic0.length-1) { curpno = 0; }
		$("#pic1").fadeOut(1500,function()	
			{
			$("#pic1").attr({"src":pic0[curpno],"onclick":"fun1('iw1',this,'"+net0[curpno]+"')"}).fadeIn(500);
			});
    //document.getElementById("pic1").src=pic0[curpno];
		//var cnt=parseInt(curpno)+1;  $("#sp1").html(cnt<10?"0"+cnt:cnt);  (游標置於此時,不換頁面)
	}
// ----------------------------------------------------------------------------------- //
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
//-----------------------------------------------------------------------------------------------
   function show_succ(id){
    xmlHttp.onreadystatechange = function (){  	                //readyState有：0準備(unsent),1讀取中(opened),2已讀取(headers received),3交換中(loading),4已完成(done)等狀態
    	if (xmlHttp.readyState == 4 && xmlHttp.status == 200){ 	 //status有：200 OK、404無法顯示網頁、500內部錯誤.....  等          	
    	     var info = xmlHttp.responseText;                    //接收TEXT一般文字回傳值，可以直接使用 或
    	   //var info = myHttp.responseXML;                     //接收XML文件回傳值，XML文件要處理過才能使用
           if (info!="bkendsys") {
           switch (id) {
              case "counters":
                    document.getElementById(id).innerHTML=info;
              break;
              case "myText":
                    { document.getElementById(id).value=info; mymsg=info; }
              break;
                       }        }
           }                      
  	  else { if (xmlHttp.status != 200) alert(xmlHttp.readyState+"<==>"+xmlHttp.status); }
    	}
  } 
    function show_sucd(id){           // File(s) uploaded used.
    xmlHttp.onload = function () {
    if (xmlHttp.status === 200) {    // File(s) uploaded.
    //alert('File uploded <= '+myHttp.responseText+' =>');
      var res = xmlHttp.responseText;   alert(res);
      $.each(res, function(key,val){
              info=(key=="Ans")?val:"【F_ERROR_F】";
              alert(info); document.getElementById(id).innerHTML = info; 
              });
         }
    else {    alert('An error occurred!');  }
    }
  }
//-----------------------------------------------------------------------------------------------
  var htinfo="";
  function callAjaxDo(id,sw,url,options) {                     //alert("Ajax <= ("+id+" ~ "+sw+" ~ "+url+" ~ "+options+") => Ajax"); 
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
                                              case "counters":   $("#"+id).html(info);
                                              break;
                                              case "dontMsg" : { outmsg=info.substr(2); code_no=info.substr(0,1);
                                                                 alert(outmsg); if (code_no) change2div04(0);
                                                               }
                                              break;
                                              case "fmsg1"   : { document.getElementById(id).innerHTML = info;        //Upload File used 
                                                                 if($(".pdf:eq(0)").val()!="") $("#anpdf").val($(".pdf:eq(0)").val());
                                                                 if($(".jpg:eq(0)").val()!="") $("#anjpg").val($(".jpg:eq(0)").val());
                                                               }
                                              break;
                                              case "myText"  : { mymsg=info; $("#"+id).val(info); }
                                              break;
                                              case "vdolist" : { utube86 = info.split(",");                      //alert(info);
                                                                 var video_n=parseInt(utube86[0].substr(0,2));
                                                                 var video_y=parseInt(utube86[0].substring(2));
                                                                 for ( var i=utube86.length-1; i>utube86.length-1-video_n; i--)
                                                                     { $("#bt"+i).text("【"+video_y+"(1~12)】"); video_y--;  } }
                                              break;
                                                        }
                                         })},
                          //取得資料失敗
                          error      : function(jqXHR,textStatus,errorThrown){
                                       $("#"+id).html("<== fail getting data - "+textStatus+" == "+errorThrown+" ==>"); 
                                       //alert("<== fail getting data - "+textStatus+" "+errorThrown+" ==>");                                       
                                       }
                          });
        break;
    }
  }
//-----------------------------------------------------------------------------------------------