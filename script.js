let count=0
let cart=document.querySelectorAll(".add-cart")
cart.forEach(button=> {
    button.addEventListener("click",()=>{
    count++;
    document.querySelector(".number-item").innerHTML=count;
})
});

let bag=document.querySelector(".cart")
bag.addEventListener("click",()=>{

    window.location.href = "Cart_bag.html";
})
let signin=document.querySelector(".sign-in")
signin.addEventListener("click",()=>{
    window.location.href="login.html"
})
let more1=document.querySelector("#more1")
let more2=document.querySelector("#more2")
let more3=document.querySelector("#more3")

more1.addEventListener("click",()=>{
    window.location.href="watch_shop.html"
})
more2.addEventListener("click",()=>{
    window.location.href="shoes_shop.html"

})
more3.addEventListener("click",()=>{
    window.location.href="perfume_shop.html"

})

let perfume=document.querySelector("#see-more-perfume")
perfume.addEventListener("click",()=>{
    window.location.href="perfume_shop.html"

})
let shoes=document.querySelector("#see-more-shoes")
shoes.addEventListener("click",()=>{
    window.location.href="shoes_shop.html"

})
let watches=document.querySelector("#see-more-watch")
watches.addEventListener("click",()=>{
    window.location.href="watch_shop.html"

})



