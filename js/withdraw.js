document.getElementById('btn-withdraw').addEventListener('click', function () {

    const newWithdrawAmount = getInputById('withdraw-amount');

    const prevoiusWithdrawAmount = getTextInputById('withdraw-total');


    const previousBalanceAmount = getTextInputById('balance-total');

    if (newWithdrawAmount > previousBalanceAmount) {
        alert('Error!! eto taka bank e nai');
        return;
    }

    const totalWithdrawAmount = prevoiusWithdrawAmount + newWithdrawAmount;

    setElementById('withdraw-total', totalWithdrawAmount);

    // const previousBalanceAmount = getTextInputById('balance-total'); (for understand purpose)

    const totalBalanceAmount = previousBalanceAmount - newWithdrawAmount;

    setElementById('balance-total', totalBalanceAmount);
})