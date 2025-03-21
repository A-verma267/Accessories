let products=[
    {img:"necklace/necklace1.jpg", key:"Diamond Pendant", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/necklace2.jpeg", key:"Gold Bar ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/necklace3.jpeg", key:"Pearl Strand", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/necklace4.jpeg", key:"Silver Locket", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/n25.jpeg", key:"Ruby Heart", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/necklace6.jpeg", key:"Sapphire Solitaire", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/necklace7.jpeg", key:"Infinity Symbol ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/necklace8.jpeg", key:"Emerald Halo ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/n24.jpeg", key:"Butterfly Charm", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/necklace10.jpeg", key:"Boho Crescent", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/necklace11.jpeg", key:"Opal Glow ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/necklace12.jpeg", key:"Onyx Pendant", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/necklace13.jpeg", key:"Rose Gold Star ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/necklace14.jpeg", key:"Amethyst stone", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/n15.jpeg", key:"Celtic Cross ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/n16.jpeg", key:"Moonstone Charm", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/n17.jpeg", key:"Sunburst Medilion", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/n18.jpeg", key:"Topaz Solitaire", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/n19.jpeg", key:"Minimalist Bar ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/n20.jpeg", key:"Turquoise Beaded ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/n21.jpeg", key:"Rose Quartz Love", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/n22.jpeg", key:"Zirconia Tennis ", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"necklace/n23.jpeg", key:"Sapphire Solitaire", price:"45$", review:"⭐⭐⭐⭐☆ (4.5/5)"}
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
                        <button onclick="addToCart('${prod.img}','${prod.key}', 45)" data-value="${index}" class="add">Add to cart</button>
                    </div>
                </div>`
})
neckmain.innerHTML=clutter;

