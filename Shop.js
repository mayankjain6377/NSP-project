function addToCart(product) {
    alert(product + " has been added to your cart.");
}
count=0
let addcart=document.querySelectorAll(".add-to-cart")
let bag=document.querySelector(".number-item")
addcart.forEach(button => {
    button.addEventListener("click",()=>{
count++;
bag.innerHTML=count;
    })
});
