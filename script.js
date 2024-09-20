// jquery search filter
  function filterProducts() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
      const searchTerm = product.getAttribute('data-search').toLowerCase();
      if (searchTerm.includes(filter)) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  }
//   end



    // nav humberger js
    let menuList = document.getElementById("menuList")
    menuList.style.maxHeight = "0px";
    function toggleMenu() {
      if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
      }
      else {
        menuList.style.maxHeight = "0px";
      }
    }
    // end
function navslider(){
var tl2=gsap.timeline()
tl2.from("#logo",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.5,
  


})
tl2.from(" #menuList li a",{
    y:-20,
    opacity:1,


})
tl2.from("#menuList li",{
  y:-20,
  opacity:0,
//   duration:0.5,
  stagger:0.1,


})



//   tl2.from(".login a",{
//     x:20,
//     opacity:0,
//     duration:0.5,
//     stagger:0.2,

// } )
tl2.from(".title",{
    y:100,
    opacity:0,
    delay:0.1,
    duration:0.2,
    stagger:0.1,
},)
tl2.from(".slidermain",{
    y:30,
    duration:0.2,
    stagger:0.1,
    opacity:0,
},"same")
// marquee in
tl2.from(".mmain",{
    y:30,
    duration:0.2,
    stagger:0.1,
    opacity:0,
})



}
navslider()

// login popup

// var loginbtn =document.querySelector(".login");
// var loginpopup = gsap.timeline();
// loginpopup.to(".login h6",{
//     opacity:100,
//     y:30,
//     duration:0.5,
//     delay:0.5,
//     stagger:0.3,
    
// });
// loginpopup.pause();
// loginbtn.addEventListener("click",function(){
//     loginpopup.play();
// });
// loginbtn.addEventListener("dblclick",function(){
//     loginpopup.reverse()
// });
// title mouseenter animation
var titletext = document.querySelector(".title");
var tl3 =gsap.timeline();
tl3.to(".quote",{
    color:"greenyellow",
    duration:0,
    delay:0,
    
});

tl3.pause();
titletext.addEventListener("mouseenter",function(){
            tl3.play()
});
titletext.addEventListener("mouseleave",function(){
    tl3.reverse()
});










// main slider
var dairy =gsap .timeline();
dairy.from(".dairy",{
    opacity:0,
    y:30,
    delay:0.5,
    stagger:0.1,
})
dairy.from(" .p1",{
    opacity:0,
    y:30,
    delay:0.2,
    stagger:0.1,
})
var veg =gsap .timeline();
veg.from(".veg",{
    opacity:0,
    y:30,
    delay:0.5,
    stagger:0.1,
})
veg.from(" .p2",{
    opacity:0,
    y:30,
    delay:.2,
    stagger:0.1,
})
// marquee slide
window.addEventListener("wheel", function (dets)   {
    if (dets.deltaY > 0) {
        gsap.to(".marquee",{
            transform:"translateX(-200%)",
            repeat:-1,
            duration:10,
            ease:"none",
        })

        gsap.to(".marquee img",{
            rotate:180,
        })

        
    } else {
        gsap.to(".marquee",{
            transform:"translateX(0%)",
            repeat:-1,
            duration:10,
            ease:"none",
        })
        
        gsap.to(".marquee img",{
            rotate:-0,
        })

    }
})




