function animationsHero1(){
    const heroFirstMain = document.querySelector(".contentHeroFirst");
    const heroLogo = document.querySelector(".logo");
    const herolink = document.querySelectorAll(".link");
    const heroh2HidderBox1 = document.querySelectorAll(".hidderBox1");
    const heroh2HidderBox2 = document.querySelectorAll(".hidderBox2");
    const heroh3 = document.querySelector(".heroFirstItem");
    const heroParagraph = document.querySelector(".heroFirstItem3");
    const firstButton = document.querySelector(".firstButton");
    const secondButton = document.querySelector(".secondButton");

    TweenMax.set(heroFirstMain, {visibility: "visible"});
    TweenMax.set(heroLogo, {visibility: "visible"});
    TweenMax.set(herolink, { visibility: "visible"});
    TweenMax.set(heroh3, { visibility: "visible"});
    TweenMax.set(heroParagraph, { visibility: "visible"});
    TweenMax.set(firstButton, { visibility: "visible"});
    TweenMax.set(secondButton, { visibility: "visible"});

    const tl = new TimelineMax({delay : 0.4});

    tl.from(heroFirstMain, 0.6, {opacity : 0})
    .addLabel('showNav', 1)
    .from(heroLogo, 0.6, { opacity : 0})
    .staggerFrom(herolink, 0.4, { opacity : 0}, 0.2, 'showNav')
    .to(heroh2HidderBox1, 0.8, {transform: "rotate(180deg) scaleX(0.01)"})
    .to(heroh2HidderBox2, 1, {transform: "rotate(180deg) scaleX(0.01)"})
    .addLabel("showParagraphandH3")
    .addLabel('showbuttons')
    .from(heroh3, 1.2, { opacity : 0}, "showParagraphandH3")
    .from(heroParagraph, 1, { opacity : 0}, "showParagraphandH3")
    .from(firstButton, 1, {opacity : 0, delay: .5}, 'showbuttons')
    .from(secondButton, 1, {opacity : 0, delay: .5}, 'showbuttons');
}

