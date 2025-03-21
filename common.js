let crsr= document.querySelector("#cursor");
let blur1= document.querySelector("#cursor-blur");
let lies = document.querySelectorAll(".rounded-cursor");

document.addEventListener("mousemove",(dets)=>{
    crsr.style.left = dets.x + 13 + "px";
    crsr.style.top = dets.y +5+"px";
    blur1.style.left=dets.x-125+"px";
    blur1.style.top=dets.y-125+"px";

})
lies.forEach((e) => {
    e.addEventListener("mouseenter",()=>{
        crsr.style.scale=2;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";

    })
    e.addEventListener("mouseleave",()=>{
        crsr.style.scale=1;
        crsr.style.border="0px solid grey";
        crsr.style.backgroundColor="#f0bd31";

    })
});
let close = document.getElementById('cilose');
close.addEventListener("click",()=>{
    let navbar= document.querySelector("#left-icon-content");
    if(navbar.style.display!="none"){
        navbar.style.display="none";
    }
})
let menu = document.getElementById('minu');
menu.addEventListener("click",()=>{
    let navbar= document.querySelector("#left-icon-content");
    let search = document.getElementById('shortsearch');
    search.style.display = 'none';
    if(navbar.style.display!="block"){
        navbar.style.display = "block";
    }
})


// Load cart from localStorage when page loads
document.addEventListener("DOMContentLoaded", loadCart);

function addToCart(img, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists in cart
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item is already in cart
    } else {
        cart.push({ img, name, price, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = ""; // Clear existing cart items
    let total = 0;

    cart.forEach((item, index) => {
        let div = document.createElement("div");
        div.innerHTML = ` <img src=${item.img}/>
        <p>${item.name} (x${item.quantity}) - $${item.price * item.quantity}</p>
            <button class="remove-btn" onclick="removeFromCart(${index})">❌</button>`;
        cartItems.appendChild(div);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total; // Update total price
}

// Function to remove a single item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Remove the selected item
    cart.splice(index, 1);

    // Save updated cart and refresh UI
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Function to clear the entire cart
function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}

// Load cart on page load
function loadCart() {
    displayCart();
}
    let carticon = document.getElementById("carticon");
    carticon.addEventListener("click",()=>{
        let cart = document.querySelector(".cart");
        if(cart.style.display!="block"){
            cart.style.display = "block";
        }
    })


    let cross = document.querySelector(".cross");
    cross.addEventListener("click",()=>{
        let cart = document.querySelector(".cart");
        if(cart.style.display=="block"){
            cart.style.display = "none";
        }
    })

let search = document.querySelector("#search")
let searchbar = document.querySelector("#shortsearch");
search.addEventListener("focus", () => {
    if (searchbar.style.display != "block") {
        searchbar.style.display = "block";
    }
})
search.addEventListener("click", () => {
    if (searchbar.style.display != "block") {
        searchbar.style.display = "block";
    }
})
document.addEventListener("click",(e)=>{
    if(!searchbar.contains(e.target) && e.target!==search){
        searchbar.style.display="none";
    }
})