// console.log("hello");
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // Taking amount
    const getAmount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(getAmount);
    console.log(typeof convertedAmount);
    // pin matching
    const getPin = document.getElementById('pin').value;
    const convertedPin = parseInt(getPin);
    // Taking main balance
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    // console.log(typeof convertedMainBalance);
   if(getAmount){
    if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount;
        
        document.getElementById('main-balance').innerText = sum;
    }
    else{
        alert('Wrong pin');
    }
   }
    else {
        alert('Add amount');
    }

})