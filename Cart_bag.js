
let plus1 =document.querySelector("#plus1")
let price1=document.querySelector("#price1")
let minus1=document.querySelector("#minus1")
let label1=document.querySelector(".label1")
let delete1=document.querySelector("#delete1")
let item1=document.querySelector(".item1")

let plus2 =document.querySelector("#plus2")
let price2=document.querySelector("#price2")
let minus2=document.querySelector("#minus2")
let label2=document.querySelector(".label2")
let delete2=document.querySelector("#delete2")
let item2=document.querySelector(".item2")


let plus3 =document.querySelector("#plus3")
let minus3=document.querySelector("#minus3")
let price3=document.querySelector("#price3")
let label3=document.querySelector(".label3")
let delete3=document.querySelector("#delete3")
let item3=document.querySelector(".item3")

count=1
plus1.addEventListener("click",()=>{
  count++
label1.innerText =count
price1.innerHTML="₹"+count*299

})
minus1.addEventListener("click",()=>{
  count--

    label1.innerHTML=count
    price1.innerHTML="₹"+count*299
     let total1=count*299
    if (count<=1) {
      label1.innerHTML=1;
      price1.innerHTML="₹"+299
      count=1
      
    }
    total.innerHTML=total1
  })


  count2=1
plus2.addEventListener("click",()=>{
  count2++
label2.innerText =count2
price2.innerHTML="₹"+count2*499

})
minus2.addEventListener("click",()=>{
  count2--
    label2.innerHTML=count2
    price2.innerHTML="₹"+count2*499
    if (count2<=1) {
    label2.innerHTML=1;
    price2.innerHTML="₹"+499
    count2=1
   
  }
  })


  count3=1
plus3.addEventListener("click",()=>{
  count3++
label3.innerText =count3
price3.innerHTML="₹"+count3*199

})
minus3.addEventListener("click",()=>{
  count3--

    label3.innerHTML=count3
    price3.innerHTML="₹"+count3*499
    if (count3<=1) {
    label3.innerHTML=1;
    price3.innerHTML="₹"+199
    count3=1
   
  }
  })


  delete1.addEventListener("click",()=>{
// item1.classList.add("item1");
item1.classList.add("hide");

  });
  delete2.addEventListener("click",()=>{
// item1.classList.add("item1");
item2.classList.add("hide");

  });
  delete3.addEventListener("click",()=>{
// item1.classList.add("item1");
item3.classList.add("hide");

  });



