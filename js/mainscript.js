let oldScrollPosition = 0;

setScrollPositionZero();
animationsOnLoad();
scrollFirst();

function setScrollPositionZero(){
  window.onload = function() {
    setTimeout (function () {
      scrollTo(0,0);
    }, 0);
}}


function transition1(){
  animationsOutHero1();
  animationsInHero2();
  setTimeout(scrollSecond, 500);
}

function transition2(){
  animationsOutHero2();
  setTimeout(animationsInHero1, 800);
  scrollTo(0,0);
  setTimeout(scrollFirst,2050);
}

function scrollFirst(){
  let ticking = true;
  let scrollPosiction;
  window.addEventListener('scroll', function scrollEvent(e){
    oldScrollPosition = scrollPosiction;
    scrollPosiction = window.scrollY;
    if(ticking){
      window.requestAnimationFrame(function(){
         if(scrollPosiction>5){
           transition1();
           window.removeEventListener('scroll', scrollEvent);
         }
      });
    }
  });
}

function scrollSecond(){
  let ticking = true;
  let scrollPosiction;
  oldScrollPosition = window.scrollY - 5;
  window.addEventListener('scroll', function scrollEvent(e){
    scrollPosiction = window.scrollY;
    if(ticking){
      window.requestAnimationFrame(function(){
         if(scrollPosiction<oldScrollPosition){
           transition2();
           window.removeEventListener('scroll', scrollEvent);
         }
      });
    }
  });
}