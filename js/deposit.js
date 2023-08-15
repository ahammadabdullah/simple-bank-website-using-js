document.getElementById('btn-deposit').addEventListener('click', function(){
    //get the deposit value from the depositField
    const depositField = document.getElementById('depositField');
    const newDepositAmountString = depositField.value; 
    const newDepositAmount = parseFloat(newDepositAmountString);
    

    // clear the deposit value 
    depositField.value = '';
    
    if(isNaN(newDepositAmount)){
        alert('please provide a valid number');
        return;
    }

    
    
    // get the current deposit total 
    const depositTotalAmount = document.getElementById('depositTotal');
    const previousDepositTotalString = depositTotalAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalAmount.innerText = currentDepositTotal;

    //add the deposit amount to balance
    const balanceTotalElement = document.getElementById('balanceTotal');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


})