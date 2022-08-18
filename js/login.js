function getInputById(inputId) {

    const inputFieldElement = document.getElementById(inputId);
    const inputFieldValue = inputFieldElement.value;
    return inputFieldValue;
}

document.getElementById('btn-submit').addEventListener('click', function () {

    const email = getInputById('user-email');

    const password = getInputById('user-pass');

    if (email === 'my@bank.com' && password === '1234') {
        window.location.href = 'bank.html';
    } else {
        alert('Wrong Input');
    }

})