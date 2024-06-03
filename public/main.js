document.addEventListener("DOMContentLoaded", () => {
 
  const signInBtn = document.querySelector("#sign-in-btn");
  const signUpBtn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  const loginBtn = document.querySelector(".sign-in .btn");
  const signUpBtnForm = document.querySelector(".sign-up .btn");
  const signUpForm = document.querySelector(".sign-up");
  const signInForm = document.querySelector(".sign-in");

  if (signUpBtn) {
      signUpBtn.addEventListener("click", () => {
          container.classList.add("sign-up-mode");
          clearInputs(signInForm);
      });
  }

  if (signInBtn) {
      signInBtn.addEventListener("click", () => {
          container.classList.remove("sign-up-mode");
          clearInputs(signUpForm);
      });
  }

  if (loginBtn) {
      loginBtn.addEventListener("click", (event) => {
          event.preventDefault();
          clearInputs(signInForm);
      });
  }

  if (signUpBtnForm) {
      signUpBtnForm.addEventListener("click", (event) => {
          event.preventDefault();
          clearInputs(signUpForm);
      });
  }

  function clearInputs(form) {
      const inputs = form.querySelectorAll("input[type='text']");
      inputs.forEach(input => {
          input.value = "";
      });
  }

 
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceContainer = document.getElementById('total-price');
  const emptyCartMessage = document.getElementById('empty-cart-message');

  if (cartItemsContainer && totalPriceContainer && emptyCartMessage) {
      loadCartItems();

      function loadCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cartItemsContainer.innerHTML = '';
          let totalPrice = 0;

          cart.forEach((item, index) => {
              const itemElement = document.createElement('div');
              itemElement.classList.add('cart-item');
              itemElement.innerHTML = `
                  <div class="item-name">${item.productName}</div>
                  <div class="item-quantity">Quantity: ${item.quantity}</div>
                  <div class="item-size">Size: ${item.size}ml</div>
                  <div class="item-price">Price: ${item.price}lv</div>
                  <button class="delete-item" data-index="${index}">Delete</button>
              `;
              cartItemsContainer.appendChild(itemElement);

              totalPrice += item.price * item.quantity;
          });

          totalPriceContainer.innerText = `Total Price: ${totalPrice}lv`;

          if (cart.length > 0) {
              emptyCartMessage.style.display = 'none';
          } else {
              emptyCartMessage.style.display = 'block';
          }

          const deleteButtons = document.querySelectorAll('.delete-item');
          deleteButtons.forEach(button => {
              button.addEventListener('click', function() {
                  const index = parseInt(this.getAttribute('data-index'));
                  removeCartItem(index);
              });
          });
      }

      function removeCartItem(index) {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.splice(index, 1);
          localStorage.setItem('cart', JSON.stringify(cart));
          loadCartItems();
      }
  }

});
const checkoutBtn = document.getElementById('order-btn');
const fullNameInput = document.getElementById('full-name');

checkoutBtn.addEventListener('click', function(event) {
  event.preventDefault(); 
  
  const fullName = fullNameInput.value.trim();
  console.log("Full name:", fullName); 
  
  if (fullName !== '') {
    const confirmationMessage = `Thank you, ${fullName}, for your order!`;
    alert(confirmationMessage);
  } else {
    alert('Please enter your full name before ordering.');
  }
});














