let products=[
    {img:"earing/earing1.jpeg", key:"Diamond Studs", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/earing2.jpeg", key:"Gold Hoop ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/earing3.jpeg", key:"Pearl Drop ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/earing4.jpeg", key:"Silver Teardrop", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/earing5.jpeg", key:"Ruby Halo Studs", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/earing7.jpeg", key:"Sapphire Cluster", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e8.jpeg", key:"Rose Gold Dangle", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e9.jpeg", key:"Emerald Huggis", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e10.jpeg", key:"Crystal Butterfly", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e11.jpeg", key:"Boho Feather ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e12.jpeg", key:"Opal Halo Studs", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e13.jpeg", key:" Onyx Danglers", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e14.jpeg", key:"White Gold Leaf", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e15.jpeg", key:"Amethyst Sparkle", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e16.jpeg", key:"Celtic Knot ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e17.jpeg", key:"Moonstone Drop", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e18.jpeg", key:"Sunburst Studs", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e19.jpeg", key:"Topaz Twinkle", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e20.jpeg", key:"Geo Minimalist", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e21.jpeg", key:"Turq Teardrop", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e22.jpeg", key:"Rose Quartz ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"earing/e23.jpeg", key:"Zirconia Studs", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"}
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
                        <button onclick="addToCart('${prod.img}','${prod.key}', 45)" data-value="${index}" class="add">Add to cart</button>
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