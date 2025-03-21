let products=[
    {img:"ring/ring1.jpeg", key:"Dia Elegance", price:"45", review:" ⭐⭐⭐⭐⭐(5.0/5)"},
    {img:"ring/ring3.jpeg", key:"Rose Gold Halo", price:"45", review:"	⭐⭐⭐⭐☆ (4.6/5)"},
    {img:"ring/ring4.jpeg", key:"Sapphire Royal", price:"45", review:"⭐⭐⭐⭐⭐ (4.9/5)"},
    {img:"ring/ring5.jpeg", key:"Classic Band", price:"45", review:"	⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/ring6.jpeg", key:"Emerald Whisper", price:"45", review:"⭐⭐⭐⭐☆ (4.4/5)"},
    {img:"ring/ring7.jpeg", key:"Pearl Solitaire", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/ring8.jpeg", key:"Ruby Vintage", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/ring9.jpeg", key:"Silver Infinity", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/ring10.jpeg", key:"Gold Minimalist", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/ring11.jpeg", key:"Opal Radiance", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/ring12.jpeg", key:"Moonstone Glow", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/ring13.jpeg", key:"White Gold Floral", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/r14.jpeg", key:"Black Onyx ", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/r15.jpeg", key:"Amethyst Dream", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/r16.jpeg", key:"Celtic Knot Band", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/r17.jpeg", key:"Topaz Sunlight", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/r18.jpeg", key:"Turquoise mian", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/r19.jpeg", key:"Rose Quartz Love", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/r20.jpeg", key:"Titanium Matte ", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/r21.jpeg", key:"Garnet Passion", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/r22.jpeg", key:"Zircon Sparkle", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"},
    {img:"ring/r23.jpeg", key:"Aqua Srenitye", price:"45", review:"⭐⭐⭐⭐☆ (4.5/5)"}
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
                        <button onclick="addToCart('${prod.img}','${prod.key}',45)" data-value="${index}" class="add">Add to cart</button>
                    </div>
                </div>`
})
ringmain.innerHTML=clutter;

