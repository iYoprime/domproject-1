document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    
    const updateTotalPrice = () => {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').dataset.price);
            const quantity = parseInt(item.querySelector('.item-qty').value);
            total += price * quantity;
        });
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    };

    
    cartItems.forEach(item => {
        const heartButton = item.querySelector('.heart-btn');
        
        heartButton.addEventListener('click', () => {
            // Toggle heart color between red and white
            if (heartButton.style.color === 'red') {
                heartButton.style.color = 'white'; // Unliked (heart turns white)
            } else {
                heartButton.style.color = 'red';  // Liked (heart turns red)
            }
            
        });
    });

    cartItems.forEach(item => {
        const increaseBtn = item.querySelector('.increase-qty');
        const decreaseBtn = item.querySelector('.decrease-qty');
        const qtyInput = item.querySelector('.item-qty');

        increaseBtn.addEventListener('click', () => {
            qtyInput.value = parseInt(qtyInput.value) + 1;
            updateTotalPrice();
        });

        decreaseBtn.addEventListener('click', () => {
            if (parseInt(qtyInput.value) > 1) {
                qtyInput.value = parseInt(qtyInput.value) - 1;
                updateTotalPrice();
            }
        });

        qtyInput.addEventListener('change', () => {
            if (parseInt(qtyInput.value) < 1) {
                qtyInput.value = 1;
            }
            updateTotalPrice();
        });
    });

    
    cartItems.forEach(item => {
        const deleteButton = item.querySelector('.delete-item');
        deleteButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });
    });

    
    updateTotalPrice();

proceedPaymentButton.addEventListener('click', () => {
    const totalAmount = parseFloat(totalPriceElement.textContent.replace('$', ''));
    
    if (totalAmount > 0) {
        // For now, show a confirmation message
        alert('Your payment is being processed! Total amount: ' + totalAmount.toFixed(2));
    } else {
        alert('Your cart is empty. Please add items to the cart before proceeding to payment.');
    }
});


updateTotalPrice();

});