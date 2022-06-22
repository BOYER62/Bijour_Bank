let count =0;
let solde =2650;
let img = `sac-dargent.png`;

let operations = [{
  title : `Salaire`,
  description : `mois de septembre`,
  money : 1200,
  percentage : 100,
  operation : `credit`,
},
{
  title : 'Loyer',
  description : `mois d'aoüt`,
  money : 450,
  percentage : 37.5,
  operation : `debit`,
},
{
  title : 'Vente Boncoin',
  description : `jeu PS5`,
  money : 25,
  percentage : 3.33,
  operation : `credit`,
}];
  console.log(operations);
if(operations[0].operation == 'credit'){
  img == 'sac-dargent.png';
};
if(operations[0].operation == 'debit'){
  img == 'depenses.png';
}
  
const template = `<div class="operation `+ operations[0].operation +`">
<div class="grid-x grid-padding-x align-middle">
  <div class="cell shrink">
    <div class="picto">
      <img src="./assets/images/`+ img +`" alt="`+ operations[0].operation +`" />
    </div>
  </div>
  <div class="cell auto">
    <div>
      <h2>`+ operations[0].title +`</h2>
      <small>`+ operations[0].description +`</small>
    </div>
  </div>
  <div class="cell small-3 text-right">
    <div>
      <p class="count">`+ operations[0].money +`€</p>
      <small>`+ operations[0].percentage +`%</small>
    </div>
  </div>
</div>
</div>`;

 
const btnSubmit = document.querySelector('.btSubmit');
const donneesInput = document.querySelectorAll('#operationForm input');
const donnees = document.querySelectorAll('#operationForm select');
const ajouterOperation = document.getElementById('ajouterOperation');
const submit = document.querySelector('#operationForm');
const debit = document.querySelectorAll('.debit');
const credit = document.querySelectorAll('.credit');
const navHeader = document.querySelectorAll('.navHeader a');

document.getElementById('solde').innerHTML = solde +' €';
console.log(operations[0].operation);
document.getElementById('ajouterOperation').innerHTML= template;
console.log(template);

operations.forEach((a,b) => {
});

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
  ajoutOpperation.innerHTML = donneesInput[0].value + donneesInput[1].value + donneesInput[2].value;
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
          submit.reset();
}


console.log("Bijour Bank !");
/**
 * init foundation
 */
$(document).ready(function () {
  $(document).foundation();
});


