document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdrawField');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // clear the withdraw field value 
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }

    
    // reduce the withdraw amount from total balance 

    const balanceTotalElement = document.getElementById('balanceTotal');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Please enter withdrawal amount within Balance')
    }
    else{
    // add the value to the withdraw 
    const withdrawTotal = document.getElementById('withdrawTotal');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

    }


})