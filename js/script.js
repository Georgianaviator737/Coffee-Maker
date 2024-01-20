let americanoPrice = 7;
let lattePrice = 5;
let totalPrice = 0;

const americanoButton = document.getElementById('americanoBtn');
const latteButton = document.getElementById('latteBtn');
const iconDiv = document.getElementById('icon-div');
const removeInput = document.getElementById('removeInput');
const removeButton = document.getElementById('removeBtn');
const totalPriceElement = document.getElementById('totalPrice');

updateTotalPrice();

americanoButton.addEventListener('click', function () {
    const quantity = document.getElementById('americanoInput').value || 1;

    for (let i = 0; i < quantity; i++) {
        const img = document.createElement('img');
        img.src = '/img/americano.png';
        img.style.width = '50px';
        img.style.filter = 'brightness(0) invert(1)';
        img.style.margin = '10px';
        img.classList.add('americano');
        iconDiv.appendChild(img);
    }

    totalPrice += americanoPrice * quantity;
    updateTotalPrice();
});

latteButton.addEventListener('click', function () {
    const quantity = document.getElementById('latteInput').value || 1;

    for (let i = 0; i < quantity; i++) {
        const img = document.createElement('img');
        img.src = '/img/latte.png';
        img.style.width = '50px';
        img.style.filter = 'brightness(0) invert(1)';
        img.style.margin = '10px';
        img.classList.add('latte');
        iconDiv.appendChild(img);
    }

    totalPrice += lattePrice * quantity;
    updateTotalPrice();
});

removeButton.addEventListener('click', function () {
    let optionValue = removeInput.value || 1;
    let coffeeType = document.getElementById('coffee-type').value;
    let className = coffeeType === '1' ? 'americano' : 'latte';

    for (let index = 0; index < optionValue; index++) {
        let elementsToRemove = document.querySelectorAll(`.${className}`);

        if (elementsToRemove.length > 0) {
            let lastElement = elementsToRemove[elementsToRemove.length - 1];
            iconDiv.removeChild(lastElement);
            totalPrice -= (coffeeType === '1') ? americanoPrice : lattePrice;
        }
    }

    totalPrice = Math.max(totalPrice, 0);
    updateTotalPrice();
});

function updateTotalPrice() {
    totalPriceElement.textContent = `Total Price: ${totalPrice} $`;
}
