document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositAmount = getInputById('deposit-amount');

    const previousDepositAmount = getTextInputById('deposit-total');

    const totalDepositAmount = previousDepositAmount + newDepositAmount;

    setElementById('deposit-total', totalDepositAmount);

    const previousBalanceAmount = getTextInputById('balance-total');

    const totalBalanceAmount = previousBalanceAmount + newDepositAmount;

    setElementById('balance-total', totalBalanceAmount);
})