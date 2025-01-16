let products=[
    {img:"earing/earing1.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/earing2.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/earing3.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/earing4.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/earing5.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/earing7.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e8.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e9.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e10.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e11.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e12.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e13.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e14.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e15.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e16.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e17.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e18.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e19.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e20.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e21.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e22.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"earing/e23.jpeg", key:"Radhe krishna", price:"45$", review:3.4}
]

let earingmain= document.getElementById("earingmain");

let clutter="";
products.forEach((prod,index)=>{
    clutter+=`<div class="box card rounded-cursor">
                    <div class="img ">
                        <img src="${prod.img}" alt="">
                    </div>
                    <div class="content">
                        <h4>${prod.key}</h4>
                        <h5>${prod.price}</h5>
                        <h6>${prod.review}</h6>
                        <button data-value="${index}" class="add">Add to cart</button>
                    </div>
                </div>`
})
earingmain.innerHTML=clutter;

function addtocartearingmain() {
    earingmain.addEventListener("click", (e) => {
        console.log("hey there")
        if (e.target.classList.contains("add")) {
            cart.push(products[e.target.dataset.value])
            console.log(cart);
        }
    })
}
addtocartearingmain()
showtocart();