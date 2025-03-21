let neck = document.getElementById("necklace");
let ring = document.getElementById("ring");
// let adddtocart=document.querySelector("")
var necklace=[
    { img: "necklace/n15.jpeg", key: "Celtic Cross", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" },
    { img: "necklace/n16.jpeg", key: "Moonstone Charm", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" },
    { img: "necklace/n18.jpeg", key: "Topaz Solitaire", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" },
    { img: "necklace/n17.jpeg", key: "Sunburst Medilion", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" }
]
let rings = [
    { img: "ring/r14.jpeg", key: "Black Onyx", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" },
    { img: "ring/r15.jpeg", key: "Amethyst Dream", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" },
    { img: "ring/r16.jpeg", key: "Celtic Knot Band", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" },
    { img: "ring/r17.jpeg", key: "Topaz Sunlight", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" }
]
function necklacecon() {
    var clutter1 = "";
    necklace.forEach(function (prod, index) {
        clutter1 += `<div class="box card rounded-cursor"> 
                        <img src="${prod.img}" alt="" class="img">
                        <div class="content">
                            <h4>${prod.key}</h4>
                            <h5>${prod.price}</h5>
                            <h6>${prod.review}</h6>
                             <button onclick="addToCart('${prod.img}','${prod.key}',45)" data-value="${index}" class="necklace add">Add to cart</button>
                        </div>
                    </div>`;

    })
    neck.innerHTML = clutter1;
}
function ringcon() {
    var clutter = "";
    rings.forEach(function (prod, index) {
        clutter += `<div class="box card rounded-cursor"> 
                        <img src="${prod.img}" alt="" class="img">
                        <div class="content">
                            <h4>${prod.key}</h4>
                            <h5>${prod.price}</h5>
                            <h6>${prod.review}</h6>
                            <button onclick="addToCart('${prod.img}','${prod.key}',45)" data-value="${index}" class="ring add">Add to cart</button>
                        </div>
                    </div>`;

    })
    ring.innerHTML = clutter;
}
necklacecon();
ringcon();

