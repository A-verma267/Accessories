let crsr = document.querySelector("#cursor");
let blur1 = document.querySelector("#cursor-blur");
let lies = document.querySelectorAll(".rounded-cursor");

document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x + 13 + "px";
    crsr.style.top = dets.y + 5 + "px";
    blur1.style.left = dets.x - 125 + "px";
    blur1.style.top = dets.y - 125 + "px";

})
lies.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        crsr.style.scale = 2;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";

    })
    e.addEventListener("mouseleave", () => {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid grey";
        crsr.style.backgroundColor = "#f0bd31";

    })
});
let close = document.getElementById('cilose');
close.addEventListener("click", () => {
    let navbar = document.querySelector("#left-icon-content");
    if (navbar.style.display != "none") {
        navbar.style.display = "none";
    }
})
let menu = document.getElementById('minu');
menu.addEventListener("click", () => {
    let navbar = document.querySelector("#left-icon-content");
    let search = document.getElementById('shortsearch');
    search.style.display = 'none';
    if (navbar.style.display != "block") {
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
carticon.addEventListener("click", () => {
    let cart = document.querySelector(".cart");
    if (cart.style.display != "block") {
        cart.style.display = "block";
    }
})


let cross = document.querySelector(".cross");
cross.addEventListener("click", () => {
    let cart = document.querySelector(".cart");
    if (cart.style.display == "block") {
        cart.style.display = "none";
    }
})

let search = document.querySelector("#search")
let searchbar = document.querySelector("#shortsearch");
search.addEventListener("focus", (e) => {
    if (searchbar.style.display != "block") {
        e.stopPropagation();
        searchbar.style.display = "block";
    }
})
searchbar.addEventListener("click", (e) => {
    e.stopPropagation();
})
document.addEventListener('click', (e) => {
    const isClickInside = searchbar.contains(e.target) || search.contains(e.target);
    if (!isClickInside) {
        searchbar.style.display = 'none';
    }
});

let availableKeywords = [
    'Necklace',
    'Earings',
    'Rings',
    'Bracelets',
    'All Jewellery'
];

const resultBox = document.querySelector("#result-box");
const inputBox = document.querySelector("#input-box");
inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((k) => {
            return k.toLowerCase().startsWith(input.toLowerCase());
        })
    }

    display(result);
    //   if(!result.length){
    //      resultBox.innerHTML="";
    //   } 
}

function display(result) {
    const content = result.map((list) => {
        return "<li class='rounded-cursor' onclick=selectInput(this)>" + list + "</li>";
    })
    resultBox.innerHTML = content.join('');

    if (inputBox.value.length == 0) {
        resultBox.innerHTML = `<li class="rounded-cursor"><a href="./all_jewellery.html"> All Jewellery</a></li>
            <li class="rounded-cursor"><a href="./necklace.html"> Necklaces </a>
            </li>
            <li class="rounded-cursor"><a href="./earing.html"> Earing</a></li>
            <li class="rounded-cursor"><a href="./ring.html"> Rings</a></li>
            <li class="rounded-cursor"><a href="./bangle.html"> Bracelet</a></li>`;
    }

}
function selectInput(list) {
    inputBox.value = list.innerHTML;

}
inputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const value = inputBox.value.trim().toLowerCase();
        if (value === 'ring' || value === 'rings') {
            // Navigate to ring.html
            window.location.href = './ring.html';
        } else if (value === 'all jewellery' || value === 'alljewellery') {
            window.location.href = './all_jewellery.html';
        }
        else if (value === 'bracelet' || value === 'bracelets') {
            window.location.href = './bangle.html';
        }
        else if (value === 'earing' || value === 'earings') {
            window.location.href = './earing.html';
        }
        else if (value === 'necklace' || value === 'necklaces') {
            window.location.href = './necklace.html';
        }
        else {
            alert('No results found');
        }
    }
}) 