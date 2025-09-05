let btnToOpenNav = document.querySelector(".lists button"); 
let list = document.querySelector(".lists .listcontainer");
let body=document.querySelector("body");
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

