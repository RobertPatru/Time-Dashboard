class Account {
    constructor (email, password, confirmPassword) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    confirmPasswordFunction() {
        if (this.password != this.confirmPassword) {
            document.querySelector('.sub-div-password').style.borderColor = 'red';
            document.querySelector('.sub-div-password .fa-lock').style.color = 'red';
            document.querySelector('.sub-div-confirm-password').style.borderColor = 'red';
            document.querySelector('.sub-div-confirm-password .fa-lock').style.color = 'red';         
        }
        else if (this.password == this.confirmPassword) {
            document.querySelector('.container-sing-in-page').style.display = 'none';
            document.querySelector('.welcome-message-register').textContent = 'Account Successfully Created';
        }
    }
}

document.getElementById('register-account').addEventListener('click', function(object) {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-password-confirm').value;

    const marce = new Account(email, password, confirmPassword);
    
    marce.confirmPasswordFunction();

    object.preventDefault();
});