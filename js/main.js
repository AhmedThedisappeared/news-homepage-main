let toggle =document.querySelector(".toggle");
let nav =document.querySelector(".nav")
let closer =document.querySelector(".nav > img");

toggle.addEventListener("click" ,function(e){
    nav.style.setProperty("visibility","visible");
});

closer.addEventListener("click" ,function(e){
  
    nav.style.setProperty("visibility","hidden");
});