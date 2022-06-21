let count =0;
let solde =2650;
const btnSubmit = document.querySelector('.btSubmit');
const donneesInput = document.querySelectorAll('#operationForm input');
const donnees = document.querySelectorAll('#operationForm select');
const ajoutOpperation = document.getElementById('ajoutOpperation');
const submit = document.querySelector('#operationForm');
const debit = document.querySelectorAll('.debit');
const credit = document.querySelectorAll('.credit');
const navHeader = document.querySelectorAll('.navHeader a');

document.getElementById('solde').innerHTML = solde +' €';

// Affichage de toutes les operations

navHeader[0].addEventListener('click',function(){
  navHeader[0].classList.add('active');
  navHeader[1].classList.remove('active');
  navHeader[2].classList.remove('active');

  debit.forEach(function(debit){
    debit.style.display = 'block';
  });

  credit.forEach(function(credit){
    credit.style.display = 'block';
  });
});

// Affichage de tout les credit

navHeader[1].addEventListener('click',function(){
  navHeader[1].classList.add('active');
  navHeader[0].classList.remove('active');
  navHeader[2].classList.remove('active');

  credit.forEach(function(credit){
    credit.style.display = 'block';
  });

  debit.forEach(function(debit){
    debit.style.display = 'none';
  });
});

// Affichage de tout les debit

navHeader[2].addEventListener('click',function(){
  navHeader[2].classList.add('active');
  navHeader[0].classList.remove('active');
  navHeader[1].classList.remove('active');

  credit.forEach(function(credit){
    credit.style.display = 'none';
  });

  debit.forEach(function(debit){
    debit.style.display = 'block';
  });
});

//Ajouter une opperation
submit.addEventListener('click',function(){
  console.log(donneesInput[0].value);
  console.log(donneesInput[1].value);
  console.log(donneesInput[2].value);
  console.log(donnees[0].value);
        //  submit.submit();
        //  submit.reset();
});

// btnSubmit.addEventListener('click', function(){
//   submit.submit();
// });

function submitBeatport()
{
          submit.submit();
}


console.log("Bijour Bank !");
/**
 * init foundation
 */
$(document).ready(function () {
  $(document).foundation();
});


