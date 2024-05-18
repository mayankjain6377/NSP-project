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