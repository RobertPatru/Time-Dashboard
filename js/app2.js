// Log In page
class LonIn {
    constructor (email, password) {
        this.email = email;
        this.password = password;
    }

    searchForAccount() {
        let emails;
        let passwords;

        if (localStorage.getItem('email') != null && localStorage.getItem('password') != null) {
            emails = JSON.parse(localStorage.getItem('email'));
            passwords = JSON.parse(localStorage.getItem('password'));

            for (let i = 0; i < emails.length; i++) {
                if (emails[i] == this.email && passwords[i] == this.password) {
                    console.log(emails[i] + `   ` + passwords[i] + ` i = ` + i);
                    window.location.href = '/dashboard.html';
                    break;
                } else if (i === emails.length){
                    console.log('Account NOT found');
                }
            }
        }
    }

    confirmAccountCompletion() {
        if (this.password == '' || this.email == '' || this.email.includes('@') != true) {
            document.querySelector('.div-log-in-email').style.borderColor = 'red';
            document.querySelector('.div-log-in-email .fa-user').style.color = 'red';        
            document.querySelector('.div-log-in-password').style.borderColor = 'red';
            document.querySelector('.div-log-in-password .fa-lock').style.color = 'red';    
            console.log("Log in not completed!")     

            // make the inputs black again, after 3 sec
            setTimeout(function() {
            document.querySelector('.div-log-in-email').style.borderColor = 'black';
            document.querySelector('.div-log-in-email .fa-user').style.color = 'black';        
            document.querySelector('.div-log-in-password').style.borderColor = 'black';
            document.querySelector('.div-log-in-password .fa-lock').style.color = 'black'; 
            }, 3000);
        }
        else if (this.password != '' && this.email != '' && this.email.includes('@') == true) {
            return true;
        }
    } 
}

document.getElementById('log-in-btn').addEventListener('click', function(object) {
    const email = document.getElementById('log-in-email').value;
    const password = document.getElementById('log-in-password').value;

    const logIn = new LonIn(email, password);
    if (logIn.confirmAccountCompletion() === true) {
        logIn.searchForAccount();
    }
    
    

    object.preventDefault();
});