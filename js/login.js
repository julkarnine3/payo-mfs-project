// Catch the login button to interact
document.getElementById("login-btn").addEventListener('click',
    function (event) {
        event.preventDefault();
        // Getting mobile number and pin number
        const mobileNumber = document.getElementById('mobile-number').value;        
        const pinNumber=document.getElementById('pin-number').value;
        // Convert the pinNumber into the integer
        const convertedPin = parseInt(pinNumber);
        // condition for verify pin and mobile number
        
        if(mobileNumber.length===11){
            if(convertedPin===1234){
                window.location.href='main.html';
            }
            else{
                alert('Wrong pin number');
            }
        }
        else{
            alert("Invalid Mobile number");
        }


    })