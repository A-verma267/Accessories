let products = [
    { img: "./bracelet/bracelet1.jpeg", key: "Silver Charm", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" },
    { img: "bracelet/bracelet2.jpeg", key: "Gold Plated", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" },
    { img: "bracelet/bracelet3.jpeg", key: "Leather Band", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" },
    { img: "bracelet/br4.jpeg", key: "Pearl Elegance", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" },
    { img: "bracelet/br6.jpeg", key: "Beaded Boho", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" },
    { img: "bracelet/br7.jpeg", key: "Diamond Luxe", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" },
    { img: "bracelet/br8.jpeg", key: "Rose Gold Chic", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5)" },
    { img: "bracelet/br9.jpeg", key: "Crystal Glow", price: "45$", review: "⭐⭐⭐⭐☆ (4.5/5))" }
]

let braceletmain = document.getElementById("braceletmain");

let clutter = "";
products.forEach((prod, index) => {
    clutter += `<div class="box card rounded-cursor">
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
braceletmain.innerHTML = clutter;

