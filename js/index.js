let btnToOpenNav = document.querySelector(".lists button"); 
let list = document.querySelector(".lists .listcontainer");
let body = document.querySelector("body");
let links = document.querySelectorAll("nav ul li a");
let link1 = document.querySelector("nav ul li:nth-of-type(1) a");
let link2 = document.querySelector("nav ul li:nth-of-type(2) a");
let link3 = document.querySelector("nav ul li:nth-of-type(3) a");
let link4 = document.querySelector("nav ul li:nth-of-type(4) a");
let link5 = document.querySelector("nav ul li:nth-of-type(5) a");
let link6 = document.querySelector("nav ul li:nth-of-type(6) a");

// ..................................................

btnToOpenNav.addEventListener("click", function() {
    list.classList.toggle("active");
});

body.addEventListener("click", function() {
    list.classList.remove("active");
});

btnToOpenNav.addEventListener("click",function(e){
    e.stopPropagation();
})

links.forEach((link) => {
    link.addEventListener("click", () => {
        let activeLink = document.querySelector("nav ul li a.active");
        activeLink.classList.remove("active");
        link.classList.add("active");
        
    })
})

link1.addEventListener("click", function () {
    let home = document.querySelector("#Home");
    let navHeight = document.querySelector("nav").clientHeight;
    window.scrollTo({
        top: home.offsetTop - navHeight,
        behavior: "smooth"
    });
});

link2.addEventListener("click", function () {
    let about = document.querySelector("#About");
    let navHeight = document.querySelector("nav").clientHeight;
    window.scrollTo({
        top: about.offsetTop - navHeight,
        behavior: "smooth"
    });
});

link3.addEventListener("click", function () {
    let services = document.querySelector("#services");
    let navHeight = document.querySelector("nav").clientHeight;
    window.scrollTo({
        top: services.offsetTop - navHeight,
        behavior: "smooth"
    });
});

link4.addEventListener("click", function () {
    let portfolio = document.querySelector("#Portfolio");
    let navHeight = document.querySelector("nav").clientHeight;
    window.scrollTo({
        top: portfolio.offsetTop - navHeight,
        behavior: "smooth"
    });
});

link5.addEventListener("click", function () {
    let blog = document.querySelector("#Blog");
    let navHeight = document.querySelector("nav").clientHeight;
    window.scrollTo({
        top: blog.offsetTop - navHeight,
        behavior: "smooth"
    });
});

link6.addEventListener("click", function () {
    let contact = document.querySelector("#Contact");
    let navHeight = document.querySelector("nav").clientHeight;
    window.scrollTo({
        top: contact.offsetTop - navHeight,
        behavior: "smooth"
    });
});
let sections = document.querySelectorAll("header,section"); // كل السيكشنز
let navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let navHeight = document.querySelector("nav").clientHeight;
    let current = " Home";

    sections.forEach(section => {
        let sectionTop = section.offsetTop - navHeight - 50; // نطرح ارتفاع الناف
        let sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id"); // نخزن اسم السيكشن الحالي
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

