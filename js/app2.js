// Log In page
class LonIn {
    constructor (email, password) {
        this.email = email;
        this.password = password;
    }

    confirmAccountCompletion() {
        if (this.password == '' || this.email == '') {
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
        else if (this.password != '' && this.email != '') {
            let searchInLocalStorage = localStorage;
            
            for (let i = 0; i < searchInLocalStorage.length; i++) {
                console.log(searchInLocalStorage.length);
                console.log(searchInLocalStorage[i]);
                if (searchInLocalStorage[i] == this.email) {
                    console.log ("account found");
                }
            }
        }
    } 
}

document.getElementById('log-in-btn').addEventListener('click', function(object) {
    const email = document.getElementById('log-in-email').value;
    const password = document.getElementById('log-in-password').value;

    const logIn = new LonIn(email, password);
    logIn.confirmAccountCompletion();
    

    object.preventDefault();
});