// Your code goes here
let navLinks =  document.querySelectorAll('a');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseover', event => {
        event.target.style.background = 'pink';});   
    navLinks[i].addEventListener('click', event => {
        event.target.style.background = 'coral';});
    
    navLinks[i].addEventListener('mouseout', event => {
        event.target.style.background = 'white';});

}


let logo = document.querySelector('img');

logo.addEventListener('mousedown', () => {
    event.stopPropagation();
    logo.style.transform = 'rotate(180deg)';
  } );
logo.addEventListener('mouseup', () => {
    logo.style.transform = 'rotate(0deg)';
  } );



let midImgOne = document.querySelector('.img-fluid');

midImgOne.addEventListener('dblclick', (event) => {
    midImgOne.style.transform = 'rotate(180deg)';
});




let imgs = document.querySelector('img');

imgs.addEventListener('keydown', e => {
    console.log(e);
    // log.textContent += ` ${e.code}`;
});   



