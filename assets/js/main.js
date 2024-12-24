// For Sticky Header

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header__scrolled");
    }else{
        nav.classList.remove("header__scrolled");
    }
} 

if(document.documentElement.scrollTop > 20){
    nav.classList.add("header__scrolled");
}



let tl = gsap.timeline();

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){

        navCollapse.classList.remove("show");

    })
})

// Header Part Done



// For Button Animation
let allBtn = document.querySelectorAll('.btn-animation');

allBtn.forEach((btn) => {

    btn.addEventListener('mouseenter', ()=>{
        gsap.to(btn, {

            background: 'linear-gradient(to right, var(--primary-color) 100%, transparent 0%)',
            ease: "power3.out",
            duration: .7
        })
    });

    btn.addEventListener('mouseleave', ()=>{
        gsap.to(btn, {
            background: 'linear-gradient(to left, var(--primary-color) 0%, transparent 0%)',
            ease: "power3.out",
            duration: .7

        })
    })

})
