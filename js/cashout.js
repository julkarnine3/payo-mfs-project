document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('Hello cashout');
    // getting cashout amount value
    const cashoutAmount = document.getElementById('cashout-amount').value;
    const convertedCashout = parseFloat(cashoutAmount);
    // pin matching
    const getPin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(getPin);
    // getting main balance
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    // console.log(typeof convertedCashout);
    if (cashoutAmount) {
        if (convertedPin === 1234) {
            const sub = convertedMainBalance - convertedCashout;
            document.getElementById('main-balance').innerText=sub;
        }
        else{
            alert('Wrong pin Number');
        }
    }
    else {
        alert('Enter amount');
    }
})