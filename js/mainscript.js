animationsHero1();
let test = true;

let last_known_scroll_position = 0;
let ticking = false;

x();

function x(test){
    function doSomething(scroll_pos) {
        console.log("pozycja scroola = " + last_known_scroll_position);
        window.removeEventListener('scroll',pokazgowno,false);
      }
      window.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
          });
          ticking = true;
        }
      });
}



function pokazgowno(){
    alert("gowno");
}