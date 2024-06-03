document.addEventListener('DOMContentLoaded', () => {
    const priceElement = document.querySelector('.price-value');
    const basePrice = parseFloat(priceElement.textContent); 
    const quantitySelect = document.querySelector('.quantity-select');
    const sizeSelect = document.querySelector('.size-select');

    const updatePrice = () => {
        const quantity = parseInt(quantitySelect.value);
        const size = parseInt(sizeSelect.value);
        const newPrice = (basePrice * size / 30) * quantity; 
        priceElement.textContent = newPrice.toFixed(2);
    };

    quantitySelect.addEventListener('change', updatePrice);
    sizeSelect.addEventListener('change', updatePrice);

    updatePrice();  
});
function changeImage(imageSrc) {
    document.getElementById('perfume-image').src = imageSrc;
}

    const addToCartButton = document.querySelector('.add-to-cart');

    addToCartButton.addEventListener('click', function() {
        const productName = document.querySelector('.description h2').innerText;
        const quantity = document.querySelector('#quantity-perfume').value;
        const size = document.querySelector('#size-perfume').value;
        const price = document.querySelector('.price-value').innerText;

        const cartItem = {
            productName,
            quantity,
            size,
            price
        };

        addCartItem(cartItem);
        hideEmptyCartMessage();
    
    
    
        function addCartItem(item) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItemIndex = cart.findIndex(cartItem => cartItem.productName === item.productName);
    
            if (existingItemIndex >= 0) {
                cart[existingItemIndex].quantity += 1; 
            } else {
                cart.push(item);
            }
    
         
        }
    
    function addCartItem(item) { 
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart!');
    }
})

