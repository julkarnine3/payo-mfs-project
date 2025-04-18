document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputValueById('amount');
    const pinNumber = getInputValueById('pin');
    const account = document.getElementById('account-number').value;
    const mainBalance = getTextValueById('main-balance');
    const allBank = document.getElementById('all-bank').value;
    const convertedAllBank = allBank.toUpperCase();
    

    if(amount<=0){
        alert('Please enter positive amount');
        return;
    }

    if (account.length === 11) {
        if (pinNumber === 1234) {
            const sum = mainBalance + amount;
            // document.getElementById('main-balance').innerText = sum;
            setInnerTextByIdAndValue('main-balance',sum);

            //Transaction history showing
            const transactionContainer = document.getElementById("transaction-container");
            const div = document.createElement('div');
            div.classList.add("bg-red-200");
            div.innerHTML = `
            <h1>Added Money form ${convertedAllBank}</h1>
            <h3>Taka: ${amount}</h3>
            <p>Account Number: ${account} </P>
            `
            transactionContainer.appendChild(div);

        }
        else {
            alert('Wrong pin number');
        }

    }
    else {
        alert('Incorrect account number');
    }
})