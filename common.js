$(function() {
  //サブメニューの開閉
  var trigger = $('.navTrigger'),
      cancelFlag = 0,
      flag = 0;
  
  trigger.on('click',function() {
    if(cancelFlag == 1) return false;
    cancelFlag = 1;
    
    //クリックした要素以外に付いているopenを外す
    trigger.not(this).removeClass('open');
    
    //クリックした要素にopenを付ける（既に付いている場合は外す）
    $(this).toggleClass('open');
    
    //クリックしたメニュー以外を閉める（既に開いているメニューを閉じる）
    trigger.not(this).next().slideUp();
    
    //クリックしたメニューを開く（既に開いている場合は閉じる）
    $(this).next().slideToggle(400,function() {
      cancelFlag = 0;
    });
  })
  
  //ハンバーガーメニューの開閉
  $('.spTrigger').on('click',function() {
    if(flag == 1) return false;
    flag = 1;
    
    $(this).toggleClass('open');
    $('.mainNav, .overlay, html').toggleClass('active');
    
    setTimeout(function() {
      flag = 0;
    },500)
  })
  
  //ブレイクポイントでメニューを閉じる
  var mql = window.matchMedia('screen and (max-width: 768px)');
  
  function checkBreakPoint(mql) {
    if(mql.matches) {
      //SP処理
    } else {
      //PC処理
      //PCサイズになったらハンバーガーメニューを閉じる
      $('.spTrigger').removeClass('open');
      $('.mainNav, .overlay, html').removeClass('active');
    }
  }
  
  mql.addListener(checkBreakPoint);
})