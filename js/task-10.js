function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDivREF = document.querySelector('#boxes')
const inputREF = document.querySelector('[type="number"]')
const createButREF = document.querySelector('[data-create]')
const destroyButREF = document.querySelector('[data-destroy]')

let divWidth = 30;
let divHeight = 30;
let string = '';

createButREF.addEventListener('click', () => {
  string = string.padStart(inputREF.value)

  if (string === ''){
    return alert ('Введіть число!');}

    for (const el of string) {
      const divREF = document.createElement('div')
      divREF.style.widht = `${divWidth}px`
      divREF.style.height = `${divHeight}px`
      divREF.style.backgroundColor = getRandomHexColor()
      divWidth += 10
      divHeight += 10

      mainDivREF.append(divREF);
      string = '';
      inputREF.value ='';
    }
})

destroyButREF.addEventListener('click', () => {
  mainDivREF.innerHTML = '';
  document.location.reload(true);
})
