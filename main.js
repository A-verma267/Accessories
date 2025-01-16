let neck = document.getElementById("necklace");
let ring = document.getElementById("ring");
// let adddtocart=document.querySelector("")
var necklace = [
    { img: "necklace/n15.jpeg", name: "n1", price: "$34", review: "4.5" },
    { img: "necklace/n15.jpeg", name: "n1", price: "$34", review: "4.5" },
    { img: "necklace/n15.jpeg", name: "n1", price: "$34", review: "4.5" },
    { img: "necklace/n15.jpeg", name: "n1", price: "$34", review: "4.5" }
]
let rings = [
    { img: "ring/r14.jpeg", name: "n1", price: "$34", review: "4.5" },
    { img: "ring/r14.jpeg", name: "n1", price: "$34", review: "4.5" },
    { img: "ring/r14.jpeg", name: "r1", price: "$34", review: "4.5" },
    { img: "ring/r14.jpeg", name: "r2", price: "$34", review: "4.5" }
]
var cart = [];
function necklacecon() {
    var clutter = "";
    necklace.forEach(function (product, index) {
        clutter += `<div class="box card rounded-cursor"> 
                        <img src="${product.img}" alt="" class="img">
                        <div class="content">
                            <h4>${product.name}</h4>
                            <h5>${product.price}</h5>
                            <h6>${product.review}</h6>
                            <button data-value=${index}  class="necklace add">Add to cart</button>
                        </div>
                    </div>`;

    })
    neck.innerHTML = clutter;
}
function ringcon() {
    var clutter = "";
    rings.forEach(function (product, index) {
        clutter += `<div class="box card rounded-cursor"> 
                        <img src="${product.img}" alt="" class="img">
                        <div class="content">
                            <h4>${product.name}</h4>
                            <h5>${product.price}</h5>
                            <h6>${product.review}</h6>
                            <button data-value=${index}  class="ring add">Add to cart</button>
                        </div>
                    </div>`;

    })
    ring.innerHTML = clutter;
}
necklacecon();
ringcon();
function addtocartneck() {
    neck.addEventListener("click", (e) => {
        console.log("hey there")
        if (e.target.classList.contains("add")) {
            cart.push(necklace[e.target.dataset.value])
            console.log(cart);
        }
    })
}
function addtocartring() {
    neck.addEventListener("click", (e) => {
        console.log("hey there")
        if (e.target.classList.contains("add")) {
            cart.push(rings[e.target.dataset.value])
            console.log(cart);
        }
    })
}

addtocartneck();
addtocartring();

function showtocart() {
    document.querySelector(".carticon").addEventListener("click", () => {
        var clutter1 = "";
        cart.forEach((prod, ind) => {
            clutter1 += `<div class="cart-content">
            <input type="checkbox" checked>
            <div class="box card rounded-cursor">
                <img class="img" src="${prod.img}" alt="">
                <div class="content">
                    <h4>${prod.name}</h4>
                    <h5>${prod.price}</h5>
                    <h6>${prod.review}</h6>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>`
        })
        document.querySelector("#cartcon").innerHTML = clutter1;
    })
}
showtocart();
