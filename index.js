
// const here = document.getElementById('here');

function myFunction1() {


let discription = 'Bag';

 
  localStorage.setItem("Product1", JSON.stringify(discription));
}


function myFunction2() {


let discription = 'Big Bucket';

 
  localStorage.setItem("Product2", JSON.stringify(discription));
}

function myFunction3() {


let discription = 'Custard Rubber';

 
  localStorage.setItem("Product3", JSON.stringify(discription));
}

function myFunction4() {


let discription = 'Half Bag';

 
  localStorage.setItem("Product4", JSON.stringify(discription));
}

function myFunction5() {


let discription = 'Custard';

 
  localStorage.setItem("Product5", JSON.stringify(discription));
}

function myFunction6() {


let discription = 'Quarter Bag';

 
  localStorage.setItem("Product6", JSON.stringify(discription));
}

const about = document.getElementById('about');
const abtdrop = document.getElementById('abtdrop');
const clear = document.getElementById('clear');
const ourdrp = document.getElementById('ourdrp');
const clear2 = document.getElementById('clear2');
const uparow = document.getElementById('uparow');


about.addEventListener('click', () => {
    abtdrop.style.display = 'block';
    mymodal.style.display = 'block';
    
    
})

services.addEventListener('click', () => {
  ourdrp.style.display = 'block';
  mymodal.style.display = 'block';
  
})

clear.addEventListener('click', () => {
  abtdrop.style.display = 'none';
  mymodal.style.display = 'none';
  
})

clear2.addEventListener('click', () => {
  ourdrp.style.display = 'none';
  mymodal.style.display = 'none';
  
})

// uparow.addEventListener('click', () => {

// })




