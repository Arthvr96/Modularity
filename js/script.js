const heroFirst = document.querySelector(".contentHeroFirst");
const heroLogo = document.querySelector(".logo");
const herolink = document.querySelectorAll(".link");
const heroh2HidderBox1 = document.querySelectorAll(".hidderBox1");
const heroh2HidderBox2 = document.querySelectorAll(".hidderBox2");








TweenMax.set(heroFirst, {visibility: "visible"});
TweenMax.set(heroLogo, {visibility: "visible"});
TweenMax.set(herolink, { visibility: "visible"});

const tl = new TimelineMax({delay : 0.4});


tl.from(heroFirst, 0.6, {opacity : 0})
.from(heroLogo, 0.6, { opacity : 0})
.staggerFrom(herolink, 0.6, { opacity : 0}, 0.4)
.to(heroh2HidderBox1, 0.6, {transform: "rotate(180deg) scaleX(0.01)"})
.to(heroh2HidderBox2, 0.6, {transform: "rotate(180deg) scaleX(0.01)"});





/*
const heroFirst = document.querySelectorAll(".contentHeroFirst");
const heroFirstLinks = document.querySelectorAll(".link");
const heroFirstLogo = document.querySelector(".logo");
const heroFirstItem1 = document.querySelector(".heroFirstItem1");
const heroFirstItem2 = document.querySelector(".heroFirstItem2::before");
const heroFirstItem3 = document.querySelector(".heroFirstItem3");
const heroFirstButton1 = document.querySelector(".firstButton");
const heroFirstButton2 = document.querySelector(".secondButton");


TweenMax.set(heroFirstLogo, { visibility: "visibl" });
tl.from(heroFirst, 0.6, {opacity : 0})
tl.from(heroFirstLogo, 0.6, {opacity : 0})
.staggerFrom(heroFirstLinks, 0.6, {opacity:0}, 0.4)
tl.from(heroFirstItem1, 1, {opacity : 0})
tl.from(heroFirstItem2, 1, {opacity : 0})
tl.from(heroFirstItem3, 1, {opacity : 0})
tl.from(heroFirstButton1, 1, {opacity : 0})
tl.from(heroFirstButton2, 1, {opacity : 0})
*/