      //navbar顯示      
	  var Y = 0;
      window.addEventListener('scroll', function(){
        var nowY = this.scrollY;
        if( nowY < Y) {
          $("#mainNav").css("display","inline");// 向上捲顯示
        }else{
          $("#mainNav").css("display","none");// 向下捲隱藏
        }
        Y = nowY;
      });