//display none handler initially
function toggleDisplayNone(id) {
    document.getElementById(id).style.display = 'none';
}
toggleDisplayNone('cashout-section');
toggleDisplayNone('transaction-section');

//Click on box, and display toggle handler
document.getElementById('add-money-box').addEventListener('click', function (event) {
    event.preventDefault();
    handleToggle('add-money-section', "block");
    handleToggle("cashout-section", "none");
    handleToggle("transaction-section", "none");
});

document.getElementById('cashout-box').addEventListener('click', function (event) {
    event.preventDefault();
    handleToggle("cashout-section", "block");
    handleToggle('add-money-section', "none");
    handleToggle("transaction-section", "none");

});
document.getElementById("transaction-box").addEventListener('click',function(event){
    event.preventDefault();
    handleToggle("transaction-section", "block");
    handleToggle("cashout-section", "none");
    handleToggle('add-money-section', "none");
  
})

function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}