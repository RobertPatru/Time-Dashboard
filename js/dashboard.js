const imgToChange = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');
let fullScreen = false;

// Add a Profile Picture
file.addEventListener('change', function() {
    const choosedFile = this.files[0];

    if (choosedFile) {
        const reader = new FileReader(); // FileReader is a predefined function of Java Script

        reader.addEventListener('load', function(){
            imgToChange.setAttribute('src', reader.result);
            localStorage.setItem('profile-picture', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});

// Load Profile Picture from Local Storage
document.addEventListener('DOMContentLoaded', () => {
    const profilePictureFromLocalStorage = localStorage.getItem('profile-picture');
    const profileName = localStorage.getItem('profile-name');

    if (profilePictureFromLocalStorage) {
        imgToChange.setAttribute('src', profilePictureFromLocalStorage);
    }

    if (profileName) {
        document.querySelector('.profile-name').value = JSON.parse(profileName);
    }
});

// if profile picture is clicked make it full screen
document.body.addEventListener('click', function (object) {
    if (object.target.classList.contains('profile-picture')) {  
      
        const div = document.querySelector('.container-dashboard-page');   
        const container = document.createElement('img');    // create an img

        const closeImg = document.createElement('p');
        closeImg.textContent = 'X';
        closeImg.classList.add('closeClass');

        container.classList.add('activated');   // add class activated
        document.body.appendChild(container);   // add the body add the image
        document.body.appendChild(closeImg); // iside the body add the close image btn
        container.appendChild(div); // inside the img add the page content


        const profilePictureFromLocalStorage = localStorage.getItem('profile-picture'); // get tge image from local storage

        if (profilePictureFromLocalStorage) {   // if there is any image in local storage
            container.setAttribute('src', profilePictureFromLocalStorage);
        }    
        fullScreen = true;     
    }
});

// deactivate the full screen for profile picture
document.body.addEventListener('click', function(object) {
    if (object.target.classList.contains('closeClass') == true && fullScreen == true) {
        console.log(object.target);
        console.log(document.body);
       const div =  document.querySelector('.container-dashboard-page');  
       document.body.appendChild(div);
       document.querySelector('.activated').remove();
       document.querySelector('.closeClass').remove();
       fullScreen = false;
       console.log(fullScreen);
    }
});


// save profile name in local storage
document.querySelector('.profile-name').addEventListener('keyup', function(){
    const profileName= document.querySelector('.profile-name');
    console.log(profileName.value);
    localStorage.setItem('profile-name', JSON.stringify(profileName.value));
});

