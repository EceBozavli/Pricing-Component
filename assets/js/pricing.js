const switchPay = document.querySelector('.switch');
const basicPayment = document.querySelector('.basicPayment');
const professionalPayment = document.querySelector('.professionalPayment');
const masterPayment = document.querySelector('.masterPayment');
const learnBtn = document.querySelector('.learnBtn');



function hesapla() {
    
      if(annually.checked) {
        basicPayment.innerText = ' $' + 199.99;
        professionalPayment.innerText = ' $' + 249.99;
        masterPayment.innerText = ' $' + 399.99;
      }
      else {
        basicPayment.innerText = ' $' + 19.99;
        professionalPayment.innerText = ' $' + 24.99;
        masterPayment.innerText = ' $' + 39.99;
      }
      
 }
    annually.addEventListener('click', hesapla);
    hesapla();


