let products=[
    {img:"ring/ring1.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/ring3.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/ring4.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/ring5.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/ring6.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/ring7.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/ring8.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/ring9.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/ring10.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/ring11.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/ring12.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/ring13.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/r14.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/r15.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/r16.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/r17.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/r18.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/r19.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/r20.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/r21.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/r22.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"ring/r23.jpeg", key:"Radhe krishna", price:"45$", review:3.4}
]

let ringmain= document.getElementById("ringmain");

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
ringmain.innerHTML=clutter;

function addtocartringmain() {
    ringmain.addEventListener("click", (e) => {
        console.log("hey there")
        if (e.target.classList.contains("add")) {
            cart.push(products[e.target.dataset.value])
            console.log(cart);
        }
    })
}
addtocartringmain()
showtocart();