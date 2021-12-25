const christmasBtn = document.getElementById('christmas-btn')
const main = document.getElementById('main')
const message = document.getElementById('message')

function btnToggle() {
main.classList.toggle('hide')
message.classList.remove('hide-message')
}

christmasBtn.addEventListener('click', btnToggle)