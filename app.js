const btnEl = document.getElementById('btn');
const inputEl = document.getElementById('input')
const iconEl = document.getElementById('icon')
const alertEl = document.getElementById('alert');

btnEl.addEventListener('click', () => {
    createPassword()
});

iconEl.addEventListener('click', () => {
    copyPassword()
    if (inputEl.value) {
        alertEl.classList.remove("active");
    setTimeout(() => {
        alertEl.classList.add("active");
    }, 2000)
    }

});



function createPassword() {
    const chars = '0987654321abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ.,/;[]-={}?><)(_+*&^%$#@!'

    const passwordLength = 15;

    let password = "";

    for (let i = 0; i < passwordLength; i++) {

        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);

    }

    inputEl.value = password
    alertEl.innerText = password + " copied!"

}

function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);

}