document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const agentNumber = document.getElementById("agent-number").value;
    const cashoutAmount = getInputValueById("cashout-amount");
    const pinNumber = getInputValueById("cashout-pin");
    const mainBalance = getTextValueById("main-balance");

    if(cashoutAmount>mainBalance){
        alert("Please enter available balance");
        return;
    }

    if(agentNumber.length===11){
        if(pinNumber === 1234){
            const sub = mainBalance - cashoutAmount;
            setInnerTextByIdAndValue("main-balance", sub);

            //  //Transaction history showing
            //  const transactionContainer = document.getElementById("transaction-container");
            //  const p=document.createElement("p");
            //  p.innerText=`
            //  Cashout ${cashoutAmount} from this ${agentNumber} account
            //  `
            //  transactionContainer.appendChild(p);

             //Transaction history showing
             const transactionContainer = document.getElementById("transaction-container");
             const div = document.createElement('div');
             div.classList.add("bg-yellow-200");
             div.innerHTML = `
             <h1>Cashout Money</h1>
             <h3>Taka: ${cashoutAmount}</h3>
             <p>Account Number: ${agentNumber} </P>
             `
             transactionContainer.appendChild(div);
 
 
        }
        else{
            alert('Incorrect pin number');
        }
    }
    else{
        alert('Invalid agent number');
    }
})