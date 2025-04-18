//display none handler initially
function toggleDisplayNone(id) {
    document.getElementById(id).style.display = 'none';
}
toggleDisplayNone('cashout-section');

//Click on box, and display toggle handler
document.getElementById('add-money-box').addEventListener('click', function (event) {
    event.preventDefault();
    handleToggle('add-money-section', "block");
    handleToggle("cashout-section", "none");
});

document.getElementById('cashout-box').addEventListener('click', function (event) {
    event.preventDefault();
    handleToggle('add-money-section', "none");
    handleToggle("cashout-section", "block");
})

function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}