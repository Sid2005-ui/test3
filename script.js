let daynight = document.querySelector(".day-night")
let banner = document.querySelector(".banner")

daynight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})
let typingeffect = new Typed("#text", {
    strings: ["Batman", "Bruce Wayne", "GIGA", "Clark"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
});
