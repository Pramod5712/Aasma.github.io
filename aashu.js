const openMenu = document.querySelector('.musicsidebar');
const mainMenu = document.querySelector('#musichidden');
const closeMenu = document.querySelector('.closearea');
const vidbtn = document.querySelector('#vid');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);


function show() {
  mainMenu.style.display = 'flex';


}

function close() {
  mainMenu.style.display = 'none';


  console.log('clicked')

}
console.log('hii')







vidbtn.addEventListener('click', ()=>{
  console.log('vid clicked');
          location.href = 'https://drive.google.com/folderview?id=1KYtY6LgHRAP7FFhbfqC1p1KQWn2O-Xb4'

});
