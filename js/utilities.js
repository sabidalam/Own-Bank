function getInputById(inputId) {
    const inputFieldElement = document.getElementById(inputId);
    const inputFieldValueString = inputFieldElement.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFieldElement.value = '';
    return inputFieldValue;
}

function getTextInputById(inputId) {
    const textFieldElement = document.getElementById(inputId);
    const textFieldValueString = textFieldElement.innerText;
    const textFieldValue = parseFloat(textFieldValueString);
    return textFieldValue;
}

function setElementById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;

}