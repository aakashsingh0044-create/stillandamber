// Get cart from Local Storage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart to Local Storage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}


function addToCart(productId) {

    let cart = getCart();

    const product = products.find(p => p.id === productId);

    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart(cart);

    console.log(cart);
}
