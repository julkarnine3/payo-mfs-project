// console.log('login works');

document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    const convertedPin=parseInt(pinNumber);
    if(mobileNumber.length === 11){
        if(convertedPin === 1234){
            window.location.href="./main.html";
        }
        else{
            alert('wrong pin');
        }
    }
    else{
        alert('invalid phone number');
    }
})