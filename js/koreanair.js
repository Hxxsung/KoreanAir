(($)=>{
  class koreanAir {
    init(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.section5();
      this.section6();
      this.section7();
      this.section8();
      this.footer();
    }
    header(){
                  
      let gnb = $('.gnb-btn');
      let btn1 = gnb.not('.btn-1');
      let btn2 = gnb.not('.btn-2');
      let btn3 = gnb.not('.btn-3');      
      let btn4 = gnb.not('.btn-4');

      //버튼 클릭 이벤트 - GNB 메뉴      
      //영역 제외 닫기 -- 질문
      $('#wrap').on({
        click: function(e){
          //e.preventDefault();
          if( !$('#header #gnb ul, #gnb-pannel').has(e.target).length ){
            $('#header .sub').hide();
            $('.gnb-btn').removeClass('on');
          }
          else {
            $('#header #gnb-pannel').show();            
          }
        }
      });

      //패널 닫기
      $('.gnb-close').on({
        click: function(e){
          e.preventDefault();
          $('.sub').fadeOut(300);
          $(this).hide();
          $('.gnb-btn').removeClass('on');
        }
      });
      

      //1번버튼
      $('.gnb-btn.btn-1').on({
        click: function(e){
          e.preventDefault();          
          $(this).removeClass('off').toggleClass('on');          
        
          if( $(this).hasClass('on') ){
            $('.gnb-close').show();
            $('.sub.sub1').css('display', 'flex');
            $('.sub').not('.sub1').css('display', 'none'); 
          }
          else {
            $(this).addClass('off');            
            $('.gnb-close').hide();
            $('.sub.sub1').css('display', 'none');
          }

          if( btn1.hasClass('on') ){
            btn1.removeClass('on');                        
          }          
                                                                
        }
      });

      //2번버튼
      $('.gnb-btn.btn-2').on({
        click: function(e){
          e.preventDefault();                    
          $(this).removeClass('off').toggleClass('on');          
          
          if( $(this).hasClass('on') ){
            $('.gnb-close').show();
            $('.sub.sub2').css('display', 'flex');
            $('.sub').not('.sub2').css('display', 'none'); 
          }
          else {
            $(this).addClass('off');            
            $('.gnb-close').hide();
            $('.sub.sub2').css('display', 'none');
          }

          if( btn2.hasClass('on') ){
            btn2.removeClass('on');            
          }
        }
      });

      //3번버튼
      $('.gnb-btn.btn-3').on({
        click: function(e){
          e.preventDefault();          
          $(this).removeClass('off').toggleClass('on');          
        
          if( $(this).hasClass('on') ){
            $('.gnb-close').show();
            $('.sub.sub3').css('display', 'flex');
            $('.sub').not('.sub3').css('display', 'none'); 
          }
          else {
            $(this).addClass('off');
            $('.gnb-close').hide();
            $('.sub.sub3').css('display', 'none');
          }

          if( btn3.hasClass('on') ){
            btn3.removeClass('on');
          }
                      
        }
      });

      //4번버튼
      $('.gnb-btn.btn-4').on({
        click: function(e){
          e.preventDefault();        
          $(this).removeClass('off').toggleClass('on');          
        
          if( $(this).hasClass('on') ){
            $('.gnb-close').show();
            $('.sub.sub4').css('display', 'flex');
            $('.sub').not('.sub4').css('display', 'none');
          }
          else {
            $(this).addClass('off');
            $('.gnb-close').hide();
            $('.sub.sub4').css('display', 'none');
          }

          if( btn4.hasClass('on') ){
            btn4.removeClass('on');
          }                      
        }
      });
      
    }
    section1(){
      let cnt=0;
      let n=3;
      let setId=0;         
      
      //이미지 버튼 클릭 슬라이드
      function mainSlide(){
        $('#section1 .slide-wrap').stop().animate({left:`${-100*cnt}%`}, 1000, function(){
          cnt>n?cnt=0:cnt;
          cnt<0?cnt=n:cnt;
          // console.log(cnt);

          //슬라이드 페이지 번호 지정
          if( cnt===0 ){
            $('#section1 .current').text(1);
          }
          else if( cnt===1 ){
            $('#section1 .current').text(2);
          }
          else if( cnt===2 ){
            $('#section1 .current').text(3);
          }
          else if( cnt===3 ){
            $('#section1 .current').text(4);
          }

          $(this).stop().animate({left:`${-100*cnt}%`}, 0)
        });
      }
      function nextCount(){
        cnt++;
        mainSlide();
      }
      function prevCount(){
        cnt--;
        mainSlide();
      }


      //슬라이드 좌우 버튼
      $('#section1 .next').on({
        click: function(){          
          nextCount();          
        }
      });
      $('#section1 .prev').on({
        click: function(){          
          prevCount();                          
        }
      });
          
    }
    section2(){
      //애니메이션 구현      
      $('#section2').addClass('sec2Ani');
      //스크롤 이벤트
      let winH = $(window).height();  
      let sec2Top = $('#section2').offset().top-winH;
    
      $(window).scroll(()=>{
          if( $(window).scrollTop()===0 ){
            $('#section2').removeClass('sec2Ani');
          }
          // if( $(window).scrollTop() > sec2Top ){
          //   $('#section2').addClass('sec2Ani');    
          // }
      });
    }
    section3(){
      //애니메이션 구현
      $('#section3').addClass('sec3Ani');

      //스크롤 이벤트
      let winH = $(window).height();  
      let sec3Top = $('#section3').offset().top-winH;      
    
      $(window).scroll(()=>{
          if( $(window).scrollTop()===0 ){            
            $('#section3').removeClass('sec3Ani');
          }
          // if( $(window).scrollTop() > sec3Top ){
          //   $('#section3').addClass('sec3Ani');    
          // }
      });
    }
    section4(){
      let cnt=0;

      function sec4Slide(){
        prev();
        next();
        $('#section4 .swipe-wrap').stop().animate({left:`${-262*cnt}`}, 1000, function(){                          
          $('#section4').removeClass('sec4Ani');
          $(this).stop().animate({left:`${-262*cnt}`}, 0)
        });        
      }
      function nextCount(){
        cnt++;                
        sec4Slide();
      }
      function prevCount(){
        cnt--;                
        sec4Slide();
      }

      //버튼 나타나기
      //이전 버튼
      function prev(){        
        if( cnt>=1 ){
          $('#section4 .prev').show();
        }
        else {
          $('#section4 .prev').hide();
        }                                                        
      }
      //다음 버튼
      function next(){        
        if( cnt>=5 ){
          $('#section4 .next').hide();
        }
        else {
          $('#section4 .next').show();
        }
      }
      
      
      //슬라이드 좌우 버튼
      $('#section4 .next').on({
        click: function(){                                          
          if( cnt>=5 ){
            $(this).stop(nextCount);
            return;
          }
          nextCount();
        }
      });
      $('#section4 .prev').on({
        click: function(){
          if( cnt<=0 ){
            $(this).stop(prevCount);
            return;
          }          
          prevCount();                    
        }
      });

      //애니메이션
      //$('#section4').addClass('sec4Ani');

      //스크롤 이벤트
      let winH = $(window).height();  
      let sec4Top = $('#section4').offset().top-winH;

      $(window).scroll(()=>{
          if( $(window).scrollTop()===0 ){
            $('#section4').removeClass('sec4Ani');
          }
          if( $(window).scrollTop() > sec4Top ){
            $('#section4').addClass('sec4Ani');    
          }
      });
      
    }
    section5(){
      //애니메이션 구현
      $('#section5').addClass('sec5Ani');
      
      //스크롤 이벤트
      let winH = $(window).height();  
      let sec5Top = $('#section5').offset().top-winH;
    
      $(window).scroll(()=>{
          if( $(window).scrollTop()===0 ){
            $('#section5').removeClass('sec5Ani');
          }
          // if( $(window).scrollTop() > sec5Top ){
          //   $('#section5').addClass('sec5Ani');    
          // }
      });
    }
    section6(){
      //애니메이션 구현
      //$('#section6').addClass('sec6Ani');

      //스크롤 이벤트
      let winH = $(window).height();  
      let sec6Top = $('#section6').offset().top-winH;
    
      $(window).scroll(()=>{
          if( $(window).scrollTop()===0 ){
            $('#section6').removeClass('sec6Ani');
          }
          if( $(window).scrollTop() > sec6Top ){
            $('#section6').addClass('sec6Ani');    
          }
      });
    }
    section7(){
      //애니메이션 구현

      //스크롤 이벤트
      let winH = $(window).height();  
      let sec7Top = $('#section7').offset().top-winH;
      
      $(window).scroll(()=>{
          // if( $(window).scrollTop()===0 ){
          //   $('#section7').removeClass('sec7Ani');
          // }
          if( $(window).scrollTop() > sec7Top ){
            $('#section7').addClass('sec7Ani');    
          }
      });
    }
    section8(){
      //애니메이션 구현      

      //스크롤 이벤트
      let winH = $(window).height();  
      let sec8Top = $('#section8').offset().top-winH;
    
      $(window).scroll(()=>{
          // if( $(window).scrollTop()===0 ){
          //   $('#section8').removeClass('sec8Ani');
          // }
          if( $(window).scrollTop() > sec8Top ){
            $('#section8').addClass('sec8Ani');    
          }
      });
    }
    footer(){}
  }

  const newkoreanAir = new koreanAir();
  newkoreanAir.init();

})(jQuery);