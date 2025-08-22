// const btnPopup = document.querySelector('.btnLogin-popup');
// const cover_box= document.querySelector('.cover-box');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');
// const iconClose = document.querySelector('.icon-close');

// function activateCoverBox(){
//     cover_box.classList.add('active');
// }
//  function deactivateCoverBox(){
//     cover_box.classList.remove('active');

//  }

//  function activatePopup(){
//     cover_box.classList.add('active-popup');

//  }
//  function deactivateCoverPopup (){
//     cover_box.classList.remove('active-popup')
//  }
//  registerLink.addEventListener('click',activateCoverBox);
//  loginLink.addEventListener('click',deactivateCoverBox);
//  btnPopup.addEventListener('click',activatePopup);
//  iconClose.addEventListener('click',deactivateCoverPopup);
const coverBox = document.querySelector('.cover_box');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Show register form
registerLink.addEventListener('click', () => {
    coverBox.classList.add('active');
});

// Show login form
loginLink.addEventListener('click', () => {
    coverBox.classList.remove('active');
});

// Show popup box
btnPopup.addEventListener('click', () => {
    coverBox.classList.add('active-popup');
});

// Close popup
iconClose.addEventListener('click', () => {
    coverBox.classList.remove('active-popup');
    coverBox.classList.remove('active');
});
