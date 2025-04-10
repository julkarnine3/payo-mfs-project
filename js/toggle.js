//Normally not showing the cashout section
document.getElementById('cashout-section').style.display='none';
// display showing for add money section when click the add money box
document.getElementById('add-money-box').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('add-money-section').style.display='block';
    document.getElementById('cashout-section').style.display='none';
});
// display showing for cashout section when click the cashout box
document.getElementById('cashout-box').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('add-money-section').style.display='none';
    document.getElementById('cashout-section').style.display='block';
});