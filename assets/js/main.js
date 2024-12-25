// For Sticky Header


let navBar = document.querySelectorAll(".menu__link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header__scrolled");
        navCollapse.classList.remove("show");
    } else {
        nav.classList.remove("header__scrolled");

    }
}

if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header__scrolled");
}

navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");

    })
})

// Header Part Done




// =======For Lenis======

const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick

gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);




// Stacky Card Animation===========

// Initialize GSAP animation
document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".stacky__card");

    cards.forEach((cardd, i) => {

        const card = cards[i];
        let scale = 1,
            rotate = 0;


        if (i !== cards.length - 1) {
            scale = 0.7 + 0.06 * i;
            rotate = -10
        }



        // Stacking animation
        gsap.to(card, {

            scale: scale,
            rotationX: rotate,
            transformOrigin: "top center",
            ease: 'none',

            scrollTrigger: {
                trigger: card,
                start: `top ${(150 + 10 * i)}`,
                end: 'bottom 600',
                endTrigger: '.end-anim',
                pin: card,
                pinSpacing: false,
                scrub: true,
                // markers: true


            },

        });

    })



    // On hover, add rotation effect

});





// ========For Text Reavel Animation=========
document.addEventListener('DOMContentLoaded', () => {



    const allReveal = document.querySelectorAll('.revel__text');

    allReveal.forEach((revelText) => {

        const split_text = new SplitType(revelText, { types: 'chars' });

        gsap.from(split_text.chars, {

            scrollTrigger: {
                trigger: revelText,
                scroller: "body",
                // markers: true,
                start: 'top 90%',
                end: 'top 60%',
                scrub: 2,
            },

            x: 3,
            opacity: 0.7,
            stagger: .009,
            duration: 0.1,
            color: '#6e6e6e89'

        });


    });



    // ===== For Text Dancing animation=====
    // const allDancing = document.querySelectorAll('.dancing-text');

    // allDancing.forEach((dancingText) => {

    //     const dancing_text = new SplitType(dancingText, { types: 'chars' });

    //     gsap.from(dancing_text.chars, {

    //         scrollTrigger: {
    //             trigger: dancingText,
    //         },

    //         y: -50,
    //         opacity: 0.7,
    //         stagger: .1,
    //         duration: 3,
    //         ease: "elastic.out(1.2,0.2)",
    //         color: '#6e6e6e89'

    //     });


    // })





    // For Button Animation
    let allBtn = document.querySelectorAll('.btn-animation');

    allBtn.forEach((btn) => {

        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {

                background: 'linear-gradient(to right, var(--primary-color) 100%, transparent 0%)',
                ease: "power3.out",
                duration: .7
            })
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                background: 'linear-gradient(to left, var(--primary-color) 0%, transparent 0%)',
                ease: "power3.out",
                duration: .7

            })
        })

    })


})