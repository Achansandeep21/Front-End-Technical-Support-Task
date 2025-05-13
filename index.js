const options = document.querySelectorAll('.option');
const totalPrice = document.getElementById('total-price');


const prices = {
    1: 'DKK 195.00',
    2: 'DKK 345.00',
    3: 'DKK 528.00'
};

options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        option.querySelector('input[type="radio"]').checked = true;

        const value = option.querySelector('input[type="radio"]').value;
        totalPrice.textContent = prices[value];
    });
});
