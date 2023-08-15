// step-1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener('click',function(){
    // step-2: get the email address and password from user input 
    // always remember  to use .value to get text from input field
    const emailField = document.getElementById('userEmail');
    const email = emailField.value;
    const passwordField = document.getElementById('userPassword');
    const password = passwordField.value;
    //check the credentials with userdata
    if(email === 'sontan@baap.com' && password=== 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Please input valid credentials')
    }
})