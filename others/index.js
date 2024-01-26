const carts=document.querySelectorAll("#cart");
const cartItems=[];

for(let i=0;i<carts.length;i++ ){
    const currentcart=carts[i];
     const btn=currentcart.querySelector("button");
     const price_text = currentcart.querySelector("#price").textContent;
     const img = currentcart.querySelector("img").src;
     const title=currentcart.querySelector("h2").textContent;
     const price_string=price_text.split(" ")[0];
     const price= parseFloat(price_string);
     console.log(price);
     btn.addEventListener("click",function(){
       const item={
        /*item_name : title,
        item_unit_price : price,
        item_img : img,*/
        title,
        img,
        price,
       }
       cartItems.push(item);
       gc();
     })
}
 //console.log(item);
 function gc(){
    for(let i=0; i<cartItems.length;i++){
        const pageright=document.querySelector(".cart");
        pageright.innerHTML="";
        const singelitem=cartItems[i]
        const singelcart=`
        <div class="cart">
             <div>
                 <img id="img21" height="70px" width="70px" src="${singelitem.img}" alt="">
                 <span class="span24">Modern Psychology</span>
                 <span class="span25">1300 Tk</span>
             </div>
             <hr>
             <span class="span26">Sub Total</span>
             <span class="span27">${singelitem.price} Tk</span>
             <button class="btn_co">CheckOut</button>
         </div>`
         pageright.innerHTML=pageright.innerHTML+ singelcart;
         
    }
   }
