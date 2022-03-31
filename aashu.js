const openMenu = document.querySelector('.musicsidebar');
const mainMenu = document.querySelector('#musichidden');
const closeMenu = document.querySelector('.closearea');



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
