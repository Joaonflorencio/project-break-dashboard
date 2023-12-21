// Script keygeneration.js

function generatePassword() {
    const lengthInput = document.getElementById('length');
    const lengthValue = parseInt(lengthInput.value);

    if (!isValidLength(lengthValue)) {
        alert("La longitud de la contraseña debe estar entre 12 y 50 caracteres.");
        return;
    }

    const password = createSecurePassword(lengthValue);
    displayPassword(password);
}

function isValidLength(length) {
    return length >= 12 && length <= 50;
}

function createSecurePassword(length) {
    const charset = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "!@#$%^&*()-_=+"
    };
    
    let password = [
        getRandomChar(charset.uppercase), 
        getRandomChar(charset.lowercase), 
        getRandomChar(charset.numbers), 
        getRandomChar(charset.symbols)
    ];

    while (password.length < length) {
        const allChars = charset.uppercase + charset.lowercase + charset.numbers + charset.symbols;
        password.push(getRandomChar(allChars));
    }

    return shuffle(password).join('');
}

function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayPassword(password) {
    const passwordResult = document.getElementById('passwordResult');
    passwordResult.innerHTML = `Contraseña Generada: <span>${password}</span>`;
}