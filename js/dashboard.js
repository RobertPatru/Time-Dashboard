const imgToChange = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

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

document.addEventListener('DOMContentLoaded', () => {
    const profilePictureFromLocalStorage = localStorage.getItem('profile-picture');

    if (profilePictureFromLocalStorage) {
        imgToChange.setAttribute('src', profilePictureFromLocalStorage);
    }
});