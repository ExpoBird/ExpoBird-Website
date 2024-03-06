document.addEventListener("mousemove", e => {
    const x = e.pageX;
    const y = e.pageY;

    for (let i = 0; i < 5; i++) {
        const elm = document.querySelectorAll(".card")[i];
        const coords = elm.getBoundingClientRect();

        const elmX = coords.left + elm.offsetWidth / 2;
        const elmY = coords.top + elm.offsetHeight / 2;

        const valueX = (elmY - y) / -70;
        const valueY = (elmX - x) / -70;

        elm.style.transform = `translateX(${valueY}px)
                            translateY(${valueX}px)`;

    }
});

const grad = document.querySelector(".gradient");

function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}
const move = (e) => {

    try {

        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    }
    catch (e) { }

    grad.style.left = x + 10 + "px";
    grad.style.top = y + 10 + "px";

};

document.addEventListener("mousemove", (e) => {
    move(e);
});

document.addEventListener("touchmove", (e) => {
    move(e);
});

const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-inviewport", entry.isIntersecting);
    });
};
const scrollText = document.querySelectorAll('.sticky-text');

ELs_inViewport.forEach((EL, i) => {
    Obs.observe(EL, obsOptions);

    window.addEventListener('scroll', () => {
        if (ELs_inViewport[i].classList.contains('is-inviewport')) {
            scrollText[i].classList.add("active")
        } else {
            scrollText[i].classList.remove("active")
        }
    });
});

let zoom = gsap.timeline({
    scrollTrigger: {
        trigger: ".wrapper",
        pin: true,
        start: "center center",
        end: "+=2000",
        scrub: 2,
    },
    defaults: { ease: 'none' }
})
    .to('h1', { y: "13vh", scale: 43, duration: 4, ease: "Power4.easeOut" })
    .to('.zoom-title', { duration: 4, ease: "Power4.easeOut" })