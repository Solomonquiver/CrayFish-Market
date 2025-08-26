 const Product1 = JSON.parse(localStorage.getItem( "Product1" )) || []

 const Product2 = JSON.parse(localStorage.getItem( "Product2" )) || []

 const Product3 = JSON.parse(localStorage.getItem( "Product3" )) || []

const Product4 = JSON.parse(localStorage.getItem( "Product4" )) || []

const Product5 = JSON.parse(localStorage.getItem( "Product5" )) || []

const Product6= JSON.parse(localStorage.getItem( "Product6" )) || []






 const one = document.getElementById('one');
 const two = document.getElementById('two');
 const three = document.getElementById('three');
 const four = document.getElementById('four');
 const five = document.getElementById('five');
 const six = document.getElementById('six');

 

 one.innerHTML = Product1;
 two.innerHTML = Product2;
 three.innerHTML = Product3;
 four.innerHTML = Product4
 five.innerHTML = Product5;
 six.innerHTML = Product6;


 const Delbtn = document.getElementById('Delbtn');

 function delFunction() {
 localStorage.removeItem('Product1')
 localStorage.removeItem('Product2')
 localStorage.removeItem('Product3')
 localStorage.removeItem('Product4')
 localStorage.removeItem('Product5')
 localStorage.removeItem('Product6')
 location.reload()
 }



  





