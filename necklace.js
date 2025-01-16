let products=[
    {img:"necklace/necklace1.jpg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/necklace2.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/necklace3.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/necklace4.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/n25.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/necklace6.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/necklace7.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/necklace8.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/n24.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/necklace10.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/necklace11.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/necklace12.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/necklace13.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/necklace14.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/n15.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/n16.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/n17.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/n18.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/n19.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/n20.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/n21.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/n22.jpeg", key:"Radhe krishna", price:"45$", review:3.4},
    {img:"necklace/n23.jpeg", key:"Radhe krishna", price:"45$", review:3.4}
]

let neckmain= document.getElementById("neckmain");

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
neckmain.innerHTML=clutter;

function addtocartneckmain() {
    neckmain.addEventListener("click", (e) => {
        console.log("hey there")
        if (e.target.classList.contains("add")) {
            cart.push(products[e.target.dataset.value])
            console.log(cart);
        }
    })
}
addtocartneckmain()
showtocart();