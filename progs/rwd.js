//----------------------------------------------------------------------------------------------- 
  var HTTP_IP=(location.hostname=="websrv.local.tw")?"http://"+location.hostname+"/All4u/" : "https://xaviorhsu.github.io/All4u/";
  var opt, t, url;
//---------０８０家服社-VqH0ez9LizI---------東照山心樂園-wxlQyjYwZic--------------------------
// array LX=["name;Pic;addr;forms"] ==> type=w(web),f(facebook),v(vidio)
  var Lz =[";Lz;;"];
  var L0 =["０８０家服社;L0;https://www.facebook.com/TOP5688;rtKg1XiTILM"];
  var L1 =["圓方居民宿;L1;https://www.booking.com/hotel/tw/yuan-fang-ju-min-su-jing-guan-can-ting.zh-tw.html;0R3Rs_SJPX0"];
  var L2 =["好假期民宿;L2;http://bestday.hi-bnb.com/;Tw9uMxKlnXU"];
  var L3 =["適合院民宿;L3;http://www.fanlu.com.tw/;"];
  var L4 =[";Lz;;"];//var L4 =["太平古厝民宿;L4;https://www.facebook.com/chienhui59/;czJffPoycHc"];
  var L5 =["樂客背包棧;L5;https://localbackpacker.business.site/;"];
  var L6 =["川雅居民宿;L6;https://www.facebook.com/ChuanYaJuBnB/;xz7SZayccVM"];
  var L7 =["東照山心樂園;L7;https://www.facebook.com/Dongzhaoshan.Heartland.Homes/;glarUF8vG38"];
  var L8 =["曼陀藝術村;L8;https://www.facebook.com/TheAquarianConspiracy.TW/;https%3A%2F%2Fwww.facebook.com%2FTheAquarianConspiracy.TW%2Fvideos%2F946607475547488%2F"];
  var L9 =[";Lz;;"];//var L9 =["拾穗山莊民宿;L9;https://www.facebook.com/gleaningmanor/;https%3A%2F%2Fwww.facebook.com%2Fgleaningmanor%2Fvideos%2F385901495660530%2F"];
  var L10=["情藝廊民宿;L10;https://www.facebook.com/permalink.php?story_fbid=2282920391993162&id=1615042895447585;"];
  var L11 =[";Lz;;"];//var L11 =["瑞穗溫泉山莊;L11;http://www.js-hotspring.com.tw/;mxWXf0OMrJM"];
  var L12=["荷風自然宿;L12;http://a0982277513.yilan-travel.com.tw/;adj6an1rAxQ"];  
//-----------------------------------------------------------------------------------------------
/*  var L1=["p03;;;"]; var L2=["p61;f;https://www.facebook.com/TOP5688;"]; var L3=["p41;w;https://www.dfholidays.com/;"];
  var L4=["p62;w;http://www.happydreamstates.com.tw;"]; var L5=["p21;w;https://www.seniormagichouse.com/;"];
  var L6=["p51;w;https://www.zay.tw/;"]; var L7=["p52;w;http://www.evergreens.tw/;"]; var L8=["p11;v;Svuxj0Z_Isw;"];
  var L9=["p53;f;https://www.facebook.com/lifyl;https://goo.gl/8HxRKh"]; var L10=["p31;w;https://ourcitylove.wixsite.com/home/eat;"];
  var L_10=["p54;v;G3NCjaacAc0;"]; var L22=["p22;p;;https://docs.google.com/forms/d/1i5StDRSlduAziJKCSa60ZJqILx46ccX4w7m3vID6HhU/viewform?edit_requested=true"];
  
  var im11 = L8; var im12 = L5.concat(L22);  					 var im13 = L10; 			var im14 = L3;
  var im15 = L6.concat(L7).concat(L9).concat(L_10);  var im16 = L2.concat(L4);*/
//-----------------------------------------------------------------------------------------------
  var vL0  = ["p00;p00i;rtKg1XiTILM"]; 		var vL1 = ["p01;pxxi;0R3Rs_SJPX0"];
  var vL2  = ["p02;pxxi;Tw9uMxKlnXU"]; 		var vL3 = ["p03;pxxi;OBLl6eeLfhk"];
  var vL4  = ["p04;pxxi;czJffPoycHc"]; 		var vL5 = ["p05;pxxi;AJS24Cb5i7w"];
  var vL6  = ["p06;pxxi;xz7SZayccVM"]; 		var vL7 = ["p07;p07i;wxlQyjYwZic"];
  var vL8  = ["f08;pxxi;946607475547488"]; 	var vL9 = ["f09;pxxi;385901495660530"];
  var vLa  = ["p10;pxxi;5woU_Ur1fVw"]; 		var vLb = ["p11;pxxi;mxWXf0OMrJM"]; 		var vLc = ["p12;pxxi;pRpyyUAsOqQ"];
//-----------------------------------------------------------------------------------------------
  var v430 = [];
//array v440/v450/v470=["Img;addr/video/pic;name;forms"] ==> addr=web/facebook/blog,v(video),pic(pics no);google's forms  
//var v440 = ["v41;NjYWBo0otHM;創意漂流木<br>雕塑班<br>【郭素亦】;","v42;9tInTTSKR0w;峇里島Made<br>創意木雕班<br>【Ｏ Ｏ】;","v43;BxoThpNPpMc;創意木工車床<br>初級班<br>【范宸瑋】;","v44;gC20UHvcUvI;創意二胡手工<br>製作班<br>【楊正棟】;","v45;l8QU-aVw7Og;創意石雕<br>刻字班<br>【劉東偉】;","v46;5woU_Ur1fVw;創意木頭研磨<br>成型班<br>【郭宗松】;","v47;AJS24Cb5i7w;創意烙畫<br>初級班<br>【張格逢】;","v48;l8QU-aVw7Og;無限創意<br>木雕班<br>【沈正庚】;"];
  var v440 = ["v41;cJXXeutVWus;大樹遊畫<br>戶外寫生;","v42;y32EUUNwxS0;馬爹Made<br>印尼木雕;"];
  var v450 = ["p510;1;希伯崙商訊<br>【有關表單】;https://docs.google.com/forms/d/1i5StDRSlduAziJKCSa60ZJqILx46ccX4w7m3vID6HhU/viewform?edit_requested=true","p520;3;香草潔護牙粉<br>【相關資料】;https://www.air-beautyspa.com/denta-care-toothpowder","p530;2;身心潔康皂<br>【相關資料】;","p540;2;回家友善種田<br>【相關資料】;","p550;3;金檜傳說禮盒<br>【相關資料】;","p560;3;波瑟沙植善農場<br>【相關資料】;https://www.facebook.com/poseshafarm"];
  var v470 = ["v71;KMwj0KsAAOo;免費商店<br>共食廚房;","v72;gmFMwsB2Fzw;五甲社區<br>無價市集;","v73;WZuAOMZU5Qo;饅頭夫妻<br>環島捐愛;","v74;MV7kfEBjjvg;若竹兒<br>愛心商店;"];
// ----- //
  var v46x = "<br>【】;pz0;";
  var v460 = ["圓方居民宿<br>【嘉義】;p01;https://www.booking.com/hotel/tw/yuan-fang-ju-min-su-jing-guan-can-ting.zh-tw.html","好假期民宿<br>【嘉義】;p02;http://bestday.hi-bnb.com/","適合院民宿<br>【嘉義】;p03;http://www.fanlu.com.tw/","<br>【】;pz0;","樂客背包旅棧<br>【台南】;p05;https://localbackpacker.business.site/","川雅居民宿<br>【高雄】;p06;https://www.facebook.com/ChuanYaJuBnB/"];
  var v461 = ["東照山心樂園<br>【高雄】;p07;https://www.facebook.com/Dongzhaoshan.Heartland.Homes/","曼陀藝術村<br>【高雄】;f08;https://www.facebook.com/TheAquarianConspiracy.TW/","<br>【】;pz0;","情藝廊民宿<br>【花蓮】;p10;https://www.facebook.com/permalink.php?story_fbid=2282920391993162&id=1615042895447585","<br>【】;pz0;","荷風自然民宿<br>【宜蘭】;p12;http://a0982277513.yilan-travel.com.tw/"];
  var arr  = [];
  var audo;  var current_muc=Math.floor(Math.random()*2);
  $("#ado").attr("src","musics/mux"+current_muc+".mp3").prop("volume","0.8");
//$('#mpage').resizable();
//---------------------------------------------------------------------------------------- 
//alert(window.screen.width+"<==>"+window.screen.availWidth+"<==>"+window.outerWidth+"<==>"+window.innerWidth+"<==>"+document.documentElement.scrollWidth);
	/*let isMobile = window.matchMedia("only screen and (max-width:550px)").matches;
		if(isMobile) {}	else {}  */
	let dev_wid = window.outerWidth; let paVal=(getUrlVars("sw")=="M")?0:1;
		if (dev_wid <= "550" && paVal) window.open(HTTP_IP+'default.html','_top',''); 
		else {};
//-----------------------------------------------------------------------------------------------     
  $(document).ready(function()  {
      var current_hgp=Math.floor(Math.random()*4);   $('#apDiv1').css('background-image','url(images/hfboth/hg'+current_hgp+'.jpg)');
      $('#apDiv4').css({'background-image':'url(images/hfboth/bg'+current_hgp+'.jpg','background-size':'cover'});
      var yymmddcc=show_today();  $('#show').html(screen.width+"*"+screen.height);
      date='<b>　Welcome To Our Web Site　民國'+(yymmddcc[0]-1911)+'年'+yymmddcc[2]+'月'+yymmddcc[3]+'日 星期'+yymmddcc[4]+'&nbsp;</b>';
      $('#Dd0').html(date);  fun_pic(); fun1('tb2','#tbmenu1 tr:eq(0) td a','');$('#tbmenu1 tr:eq(0) td').css('background-color','brown');
	  $("#ado").hide(); funB(0,'pic0',pic0.length);
      //jQuery("#a14").mouseover(function(){jQuery("#LQRcode").show();}).mouseout(function(){jQuery("#LQRcode").hide();});
 	  $("#pic1,#pic2").hover( function(){ if(audo.played) audo.pause(); clearInterval(tn);} , function(){ if(audo.paused) audo.play(); t=setInterval( mytime,4000); tn=t; } ); 
    // webcounters //
    url = HTTP_IP+"php/gp_Ajax.php?js_cb=?";
	  opt = "opt=web_cnts"; //alert(url+"<==>"+opt);
  　　callAjaxDo("counters",'s',url,opt);
// ----- //      
      $("#a00,#a11,#a12,#a14,#a15,#a16,#a18,#a19,#a43,#a44,#a45,#a46,#a47").css("cursor","pointer").click(function(){
        $('#apDiv1 span a.nav1,#apDiv4 span a.nav1').css({'color':'','background-color':'','box-shadow':''});
		$('#ifm,#v22 img').attr("src",""); $('#tb div.sect,#tb iframe.sect').hide();
        var pid=$(this).attr("id"); var i = pid.substring(1); var j = pid.substring(2); var sw = 0;
		$('#f44,#if1').attr("src","");	audo=document.getElementById("ado");
		switch(pid) { 
			case "a00":		sw = 1;i = "55"; fun1('tb2','#tbmenu1 tr:eq(0) td a',''); funB(0,'pic0',pic0.length);
							$('#tbmenu1 tr:eq(0) td').css('background-color','brown');break;
			case "a15":
			case "a16":			
			//case "a19":
			//case "a11":
			case "a18":   	var madd=["https://calendar.google.com/calendar/embed?src=mig2f56hejor8v2gkli2l8h4t0%40group.calendar.google.com&ctz=Asia%2FTaipei","progs/contactus.htm","progs/copyright.htm","https://www.google.com/maps/embed?pb=!4v1571654445799!6m8!1m7!1sPkM6IOEIEX8SyTg4jJqAcQ!2m2!1d23.43917643965867!2d120.6048328138822!3f4.32!4f19.36!5f0.7820865974627469","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13622.27355584881!2d120.60238164411471!3d23.44045528598859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eebc44c61e771%3A0xef1d60b13624310b!2z6buO5piO5ZyL5bCP!5e0!3m2!1szh-TW!2stw!4v1562136411546!5m2!1szh-TW!2stw"]
							var s = 0;
							switch(j) { case "1": s = 0; break; case "5": s = 1; break; case "6": s = 2; break;
										case "8": s = 3; break; case "9": s = 4; break; }
							$('#ifm').attr("src",madd[s]);	i = 11; sw = 1;	break;
			case "a19":
			case "a11":
			case "a12":
			case "a14":     sw = 1; var pimg,pwt;  clearInterval(tn);
							switch(i) {	case "19":	case "12": pimg="images/080map.jpg";     pwt="98%";   break;
										case "11": pimg="images/years.jpg"; pwt="98%"; break;
										case "14": pimg="images/MywebQR.png"; pwt="323px"; break;  }
							i = "22"; $('#pic2').hide(); $('#pic0').attr({"src":pimg,"onclick":"","title":""}).css({'width':pwt,"cursor":""}).show(); break;
			case "a43":		sw = 1; j=(i=="43")?"0":j; fun2("v"+i,j); break;
			case "a44":
			case "a45":
			case "a47":		sw = 1;	i = "44";  fun2("v"+i,j); break;
			case "a46":		sw = 1; fun2("v"+i,j); break;
		}
		if (sw) { $(this).css({'color':'red','background-color':'yellow','box-shadow':'-5px 5px 5px gold'});}
		if(audo.paused) audo.play(); $('#v'+i).show();
       });
  });
//----------------------------------------------------------------------------------------------- 
var fb1="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftncath%2Fvideos%2F"; var fb2="%2F&autoplay=1&show_text=0&width=auto";
var yt1="https://www.youtube.com/embed/";	var yt2="?autoplay=1&version=3&html5=1";
  function fun2(S,P)	{
	switch(S) { 
		case "f44":   $('#v44,#v43').hide(); $("#f44").attr("src",P); $('#f44').show();
                      audo=document.getElementById("ado"); if(audo.played) audo.pause(); 
		break;
		case "v43":   $('#tb div.sect,#tb iframe.sect').hide();$('#v43').show();
					  $("#v43 div.iv43").html('<img class="im43" src="images/prods/p00.jpg" />').css("cursor","");
					  //$("#v43 div img").attr({"src":"images/prods/p01.jpg","onclick":""}).css("cursor","");					  
					  switch(P) {case "0": v430=vL0; break;case "1": v430=vL1; break;case "2": v430=vL2; break;case "3": v430=vL3; break;
								 case "4": v430=vL4; break;case "5": v430=vL5; break;case "6": v430=vL6; break;case "7": v430=vL7; break;
								 case "8": v430=vL8; break;case "9": v430=vL9; break;case "a": v430=vLa; break;case "b": v430=vLb; break;
								 case "c": v430=vLc; break;}
					  arr = v430; for (var item=0;item<arr.length;item++) { var ss=arr[item].split(";");
						if (ss[0].substr(0,1)=="p")	{ part1=yt1;	part2=yt2;};	if (ss[0].substr(0,1)=="f")	{ part1=fb1;	part2=fb2;};
		$("#v43 div:eq("+item+") img").attr({"src":"images/ppics/"+ss[0]+".jpg","onclick":"fun2('f44','"+part1+ss[2]+part2+"');"}).css('cursor','pointer');
					  $("#v43 div:eq(1) img").attr({"src":"images/ppics/"+ss[1]+".jpg","onclick":"$('#tb div.sect,#tb iframe.sect').hide();$('#v55').show();$('#apDiv1 span a.nav1').css({'color':'','background-color':'','box-shadow':''});","title":"(點擊『回前頁』)"}).css('cursor','pointer'); }
		break;
		case "v44":   $("#v44 div img").attr({"src":"images/prods/p00.jpg","onclick":""}).css("cursor","");	$("#v44 div span.sp4").html("");
					  switch(P) {case "4": arr=v440; break;case "5": arr=v450; break;case "7": arr=v470; break; }
					  for (var item=0;item<arr.length;item++)	{ var ss=arr[item].split(";");
						  $("#v44 div:eq("+item+") img").attr("src","images/vpics/"+ss[0]+".jpg");   
						  if(ss[0].substr(0,1)=="v") $("#v44 div:eq("+item+") img").attr("onclick","fun2('f44','https://www.youtube.com/embed/"+ss[1]+"?autoplay=1&version=3&html5=1');").css('cursor','pointer');					  
						  if(P=="5") { if(ss[0].substr(0,1)=="p") {olk="$('#v44,#pic0').hide();$('#v22,#pic2').show();funB(1,'"+ss[0]+"',"+ss[1]+");"; }
						  else       { olk="fun1('iw1',this,'"+ss[1]+"')" }
									   $("#v44 div:eq("+item+") img").attr("onclick",olk).css("cursor","pointer");
									   $("#v44 div:eq("+item+") span").html("<a>"+ss[2]+"</a>");
									   if(ss[3]) {	$("#v44 div:eq("+item+") span a").attr({"href":ss[3],"target":"MFrame"}).css("text-decoration","none"); }
									 }
						  if(P=="4"||P=="7") $("#v44 div:eq("+item+") span").html(ss[2]);	
					  }  
		break;
        case "v46":   $("#v46 div span.sp3").html("<br>【夥伴】");	$("#v46 div img").attr({"src":"images/prods/p00.jpg","onclick":""}).css("cursor","");
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
	 if (subi=="iw1" && P!="")  { $("#tb2").show(); window.open(P,"MFrame",);} else { $("#"+subi).show(); }
    }
// ----- //
	var pic0=new Array();var net0=new Array(); var j=0;
  function fun_pic() {	for (var i=0;i<=12;i++)	{ var pp=this["L"+i][0].split(";"); //alert(pic0.length+"=>"+pp[0]+"<>"+pp[1]+"<>"+pp[2]+"<>"+pp[3]);
	  if(pp[1] != "Lz") { pic0[j]="images/loops/"+pp[1]+".jpg"; net0[j]=pp[2]; j++; } 
	   } }
// ----- //  
	var curpno=0; var Fnu,Fa,Fno,s1,o1,e1,w1; var tn="";
  function funB(nu,A,Fn) {		//nu(0/1)==>0:#pic1,#1:pic2; A(img filename); Fn(img files no);
	audo=document.getElementById("ado"); Fnu=nu;Fa=A; Fno = Fn; var sw = 0; clearInterval(tn);
	if(nu)	{ w1="98%"; o1="$('#v22,#pic0').hide();$('#v44').show();if(audo.paused)audo.play();";
			  if(Fno=="1") { $('#pic2').hide(); $("#pic0").attr({"src":"images/vpics/"+A+".jpg","onclick":o1,"title":"(點擊『回前頁』)"}).css({'width':w1,'cursor':'pointer'}).show(); }
			  else { sw=1; curpno=(curpno>Fno-1)?Fno-1:curpno; s1="images/vpics/"+Fa.substr(0,3)+curpno+".jpg"; e1="(游標置此時暫停；點擊『回前頁』)";$('#pic0').hide();  }
			}
	else 	{ sw=1; s1=pic0[curpno]; e1="(游標置此暫停輪播；點擊『外聯』)"; w1=""; o1="fun1('iw1',this,'"+net0[curpno]+"')";	}
	if(sw) 	{	$("#pic"+(Fnu+1)).attr({"src":s1,"onclick":o1,"title":e1}).css({'width':w1,'cursor':'pointer'}).show();
				if(audo.paused) audo.play(); t=setInterval( mytime,4000); tn=t; }
    }
	
  function mytime(){	 
    curpno++; if (curpno > Fno-1) { curpno = 0; }
		$("#pic"+(Fnu+1)).fadeOut(1500,function()	
			{ if(Fnu)	{ s1="images/vpics/"+Fa.substr(0,3)+curpno+".jpg";}
			  else      { s1=pic0[curpno]; o1="fun1('iw1',this,'"+net0[curpno]+"')"; } //alert(Fno+"<==>"+Fnu+"<==>"+curpno);
			  $("#pic"+(Fnu+1)).attr({"src":s1,"onclick":o1,"title":e1}).fadeIn(500);
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
// ----------------------------------------------------------------------------------- //
//            Read URL GET variables
/*function getUrlVars()
{
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
                function(m,key,value) { vars[key]=value;  });
    return vars;
}*/
function getUrlVars(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
// ----------------------------------------------------------------------------------- //
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