document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputValueById('amount');
    const pinNumber = getInputValueById('pin');
    const account = document.getElementById('account-number').value;
    const mainBalance = getTextValueById('main-balance');

    if (account.length === 11) {
        if (pinNumber === 1234) {
            const sum = mainBalance + amount;
            // document.getElementById('main-balance').innerText = sum;
            setInnerTextByIdAndValue('main-balance',sum);
        }
        else {
            alert('Wrong pin number');
        }

    }
    else {
        alert('Incorrect account number');
    }
})