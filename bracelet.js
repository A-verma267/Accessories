let products=[
    {img:"bracelet/bracelet1.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"bracelet/bracelet2.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"bracelet/bracelet3.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"bracelet/br4.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"bracelet/br6.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"bracelet/br7.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"bracelet/br8.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"bracelet/br9.jpeg", key:"Radhe krishna", price:"45$", review:3.4}
]

let braceletmain= document.getElementById("braceletmain");

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
braceletmain.innerHTML=clutter;

function addtocartbraceletmain() {
    braceletmain.addEventListener("click", (e) => {
        console.log("hey there")
        if (e.target.classList.contains("add")) {
            cart.push(products[e.target.dataset.value])
            console.log(cart);
        }
    })
}
addtocartbraceletmain()
showtocart();