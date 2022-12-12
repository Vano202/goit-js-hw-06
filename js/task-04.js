let counterValue = 0;

const counterREF = document.querySelector('#value')

const incrButtonREF = document.querySelector('[data-action="increment"]')
const dectButtonREF = document.querySelector('[data-action="decrement"]')

incrButtonREF.addEventListener('click', () => {
    counterValue += 1;
    counterREF.textContent = counterValue;
})

dectButtonREF.addEventListener('click', () => {
    counterValue -= 1;
    counterREF.textContent = counterValue;
})