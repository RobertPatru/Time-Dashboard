// Register Page
class Account {
    constructor (email, password, confirmPassword) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    confirmPasswordFunction() {
        if (this.password != this.confirmPassword || this.password == '' || this.confirmPassword == '' || this.email == '') {
            document.querySelector('.sub-div-password').style.borderColor = 'red';
            document.querySelector('.sub-div-password .fa-lock').style.color = 'red';
            document.querySelector('.sub-div-confirm-password').style.borderColor = 'red';
            document.querySelector('.sub-div-confirm-password .fa-lock').style.color = 'red';         
            document.querySelector('.sub-div-email').style.borderColor = 'red';
            document.querySelector('.sub-div-email .fa-user').style.color = 'red';      
            
            // make the inputs black again, after 3 sec
            setTimeout(function() {
                document.querySelector('.sub-div-password').style.borderColor = 'black';
            document.querySelector('.sub-div-password .fa-lock').style.color = 'black';
            document.querySelector('.sub-div-confirm-password').style.borderColor = 'black';
            document.querySelector('.sub-div-confirm-password .fa-lock').style.color = 'black';         
            document.querySelector('.sub-div-email').style.borderColor = 'black';
            document.querySelector('.sub-div-email .fa-user').style.color = 'black'; 
            }, 3000);
        }
        else if (this.password == this.confirmPassword && this.password != '') {
            document.querySelector('.container-sing-in-page').style.display = 'none';
            document.querySelector('.welcome-message-register').textContent = 'Account Successfully Created';

            setTimeout(function(){
                window.location.href = '/index.html';
             }, 3000);

             this.addAccountInLocalStorage();
        }
    }

    addAccountInLocalStorage() {
        let emails;

        if (localStorage.getItem('email') === null) {
            emails = [];
            console.log(`empty local storage`, localStorage);
        } else {
            emails = JSON.parse(localStorage.getItem('email'));
        }

        emails.push(this.email);
        localStorage.setItem('email', JSON.stringify(emails));
        

        let passwords;

        if (localStorage.getItem('password') === null) {
            passwords = [];
        } else {
            passwords = JSON.parse(localStorage.getItem('password'));
        }

        passwords.push(this.password);
        localStorage.setItem('password', JSON.stringify(passwords));
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