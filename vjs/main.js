const btn = document.getElementById('btn')
const cElement = document.getElementById('c');
let counter = 0;

btn.addEventListener('click', updateC)

function updateC () {
    counter = counter + 1
    cElement.textContent = counter;
}
