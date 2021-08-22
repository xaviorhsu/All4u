/* --------------- ndyitem --------------*/
	for (var item=0;item<navi.length;item++) {	var ss=navi[item].split(";"); 					//alert(ss);
		$("#"+ss[0]+" div.container h2").html("《 "+ss[1]+" 》");
		if( ss[0]!="togoold" ) { for( var i=2; i<=ss.length-2; i++) { $("#"+ss[0]+" div.container div.row span.sp"+(i-2)).html(ss[i]); }	}
	}
var vfamnet0 = ["希伯崙商訊;f10;1;https://docs.google.com/forms/d/1i5StDRSlduAziJKCSa60ZJqILx46ccX4w7m3vID6HhU/viewform?edit_requested=true","香草潔護牙粉;f20;3;https://www.air-beautyspa.com/denta-care-toothpowder","身心潔康皂;f30;2;","回家友善種田;f40;2;","金檜傳說禮盒;f50;3;","波瑟沙植善農場;f60;3;https://www.facebook.com/poseshafarm"];

var vabtnet0 = ["圓方居民宿;1;https://www.booking.com/hotel/tw/yuan-fang-ju-min-su-jing-guan-can-ting.zh-tw.html","好假期民宿;2;http://bestday.hi-bnb.com/","適合院民宿;3;http://www.fanlu.com.tw/","樂客背包旅棧;4;https://localbackpacker.business.site/","川雅居民宿;5;https://www.facebook.com/ChuanYaJuBnB/"];
var vabtnet1 = ["東照山心樂園;6;https://www.facebook.com/Dongzhaoshan.Heartland.Homes/","曼陀藝術村;7;https://www.facebook.com/TheAquarianConspiracy.TW/","情藝廊民宿;8;https://www.facebook.com/permalink.php?story_fbid=2282920391993162&id=1615042895447585","荷風自然民宿;9;https://a0982277513.yilan-travel.com.tw/"];

var vatsvdo0 = ["tastyfood;０８０家服社;v00;rtKg1XiTILM"];
var vatsvdo1 = ["historic;大樹遊畫戶外寫生;v10;cJXXeutVWus","historic;馬爹Made印尼木雕;v11;y32EUUNwxS0"];
var vatsvdo2 = ["contact;免費商店共食廚房;v30;KMwj0KsAAOo","contact;五甲社區無價市集;v31;gmFMwsB2Fzw","contact;饅頭夫妻環島捐愛;v32;WZuAOMZU5Qo","contact;若竹兒愛心商店;v33;MV7kfEBjjvg"];

var arr  = [];
 $(document).ready(function()  {
// -----------------
	arr	= vabtnet0.concat(vabtnet1); 															
	for (var item=0;item<arr.length;item++)	{ var ss=arr[item].split(";");
		$("#about div.container div.row img.sp"+item).attr({"src":"./templates/creative/img/about/"+ss[1]+".jpg","onclick":"window.open('"+ss[2]+"','MFrame',);","title":ss[0]+"(點擊外聯)"}).css('cursor','pointer');
	}
	/*	 
	var str1 = '<div class="col-md-3 col-lg-3 mx-auto">';
	var str2 = '<span class="text-white sp0" style="font-family: '+"'"+'Noto Sans TC'+"'"+', serif; font-size: 16px; font-weight:bold;">&nbsp;</span>';
	var str3 = '<div class="portfolio-item mx-auto" data-toggle="modal" data-target="" style="border-radius:5px;border:4px double orange;box-shadow:5px 10px 5px pink;">';
    var str0 = '';
	
	for (var item=0;item<arr.length;item++) { var ss=arr[item].split(";"); var temp = str1+str2+str3;       alert(ss);	
	str0 += temp+'<img class="img-fluid" src="./templates/creative/img/about/"'+ss[1]+'".jpg" onclick="window.open(\\'+ss[2]+\',\'MFrame\',);" alt="" title="'+ss[0]+'" style="cursor:pointer;border:4px solid purple;width:100%;height:200px;"></div></div>';
				  }
	$("#about div.row").html(str0:eq(0) img").attr({"src":"./templates/creative/img/about/"+ss[1]+".jpg","onclick":"window.open('"+ss[2]+"','MFrame',);","title":ss[0]}).css('cursor','pointer');
				  }*/	
// -----------------
	for (var item=0;item<vfamnet0.length;item++)	{ var ss=vfamnet0[item].split(";");		
		olk="$('#mainbdy,#ifm').hide();$('#wframe,#pic').show();clearInterval(tn);funB('"+ss[0]+"','"+ss[1]+"',"+ss[2]+",'"+ss[3]+"');";	//alert(ss+"<=>"+olk);
		$("#family div.container div.row img.sp"+item).attr({"src":"./templates/creative/img/family/"+ss[1]+".jpg","onclick":olk,"title":ss[0]+"(點擊輪播)"}).css('cursor','pointer');
	}	
// -----------------
	for (var i=0;i<3;i++)	{ switch(i) {case 0: arr=vatsvdo0; break;case 1: arr=vatsvdo1; break;case 2: arr=vatsvdo2; break; }														
		var ff=arr[0].split(";");
		for (var item=ff[2].substr(2,1);item<arr.length;item++)	{ var ss=arr[item].split(";");		 //alert(ss);			
		s1="https://www.youtube.com/embed/"+ss[3]+"?autoplay=1&version=3&html5=1"; subdir=(ss[0]=="historic")?"historical site":ss[0];
		olk='$("#mainbdy,#pic").hide();$("#wframe,#ifm").show();clearInterval(tn);$("#wframe div.container div.row span.sp0").html("【'+ss[1]+'】");$("#ifm").attr("src","'+s1+'");';		//alert(s1+"<=>"+olk);
		$("#"+ss[0]+" div.container div.row img.sp"+ss[2].substr(2,1)).attr({"src":"./templates/creative/img/"+subdir+"/"+ss[2]+".jpg","onclick":olk,"title":ss[1]+"(點擊看影片)"}).css('cursor','pointer');
		}
	}	
});
// --------------------------------------------------------- // 
  $("#pic").hover( function(){ clearInterval(tn); } , function(){ t=setInterval( mytime,4000); tn=t; } );  //游標置此暫停輪播
  
  var curpno=0; var Fa,Fno,Adr,s1,o1,e1,p1; var tn="";
  function funB(Na,A,Fn,Ad) {		//A(img filename); Fn(img files no); Ad(外聯位址);
	$("#wframe div.container div.row span.sp0").html("【"+Na+"】"); 
	Fa=A; Fno=Fn; Adr=Ad; var sw=0; clearInterval(tn); 
	sw=(Fno==1)?0:1; s1="./templates/creative/img/family/"+Fa+".jpg"; e1=(Adr)?"(點擊『外聯』)":"(游標置此暫停輪播)";
	o1=(Adr)?"window.open('"+Adr+"','MFrame',);":""; p1=(Adr)?"pointer":"";	
	$("#pic").attr({"src":s1,"onclick":o1,"title":e1}).css('cursor',p1);
	curpno=(curpno>Fno-1)?Fno-1:curpno;
	if(sw) 	{  t=setInterval( mytime,4000); tn=t; }	
    }
// -----------------	
  function mytime(){	 
    curpno++; if (curpno > Fno-1) { curpno = 0; }
		$("#pic").fadeOut(1500,function()	
			{ s1="./templates/creative/img/family/"+Fa.substr(0,2)+curpno+".jpg";	//alert(Fno+"<==>"+curpno);
			  $("#pic").attr({"src":s1,"onclick":o1,"title":e1}).fadeIn(500);
			});
	}
//----------------------------------------------------------------------------------------