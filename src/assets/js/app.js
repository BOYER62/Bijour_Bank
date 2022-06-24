let count =0;
let solde =0;
let img = `sac-dargent.png`;
let filter=[];
let operationTemporaire=[];
let ajoutOperation='';

const html = document.querySelector('html');
const btSubmit = document.getElementById('btSubmit');
const donneesInput = document.querySelectorAll('#operationForm input');
const donnees = document.querySelectorAll('#operationForm select');
const submit = document.querySelector('#operationForm');
const navHeader = document.querySelectorAll('.navHeader a');

let operations = [{
  title : `Salaire`,
  description : `mois de septembre`,
  money : 1200,
  percentage : 100,
  type : `credit`,
},
{
  title : 'Loyer',
  description : `mois d'aoüt`,
  money : 450,
  percentage : 37.5,
  type : `debit`,
},
{
  title : 'Vente Boncoin',
  description : `jeu PS5`,
  money : 25,
  percentage : 3.33,
  type : `credit`,
},
{
  title : 'Restaurant',
  description : `mc do`,
  money : 15,
  percentage : 1.9,
  type : `debit`,
},
{
  title : 'Réalisation de site web',
  description : `ma mairie`,
  money : 1800,
  percentage : 236.84,
  type : `credit`,
}];

// Function affichage des données ----------------------------------------

function newOperation(){
  document.querySelector('main .grid-container').innerHTML ='';
  filter.forEach((operation) => {
    if(operation.type == 'credit'){
      img = 'sac-dargent.png';
    };
    if(operation.type == 'debit'){
      img = 'depenses.png';
    }
    const template = `<div class="operation ${operation.type}">
    <div class="grid-x grid-padding-x align-middle">
    <div class="cell shrink">
    <div class="picto">
    <img src="./assets/images/${img}" alt="${operation.type}" />
    </div>
    </div>
    <div class="cell auto">
    <div>
    <h2>${operation.title}</h2>
    <small>${operation.description}</small>
    </div>
    </div>
    <div class="cell small-3 text-right">
    <div>
    <p class="count">${operation.money} €</p>
    <small>${operation.percentage} %</small>
    </div>
    </div>
    </div>
    </div>`;
    document.querySelector('main .grid-container').innerHTML += template;
  });
  reste();
}

// Page de depart -----------------------------------------------------

filter = operations;
newOperation();

// calcul du solde --------------------

function reste(){
  solde = 0;
  operations.forEach((calcul) => {
    if(calcul.type == 'credit'){
      solde = parseFloat(solde) + parseFloat(calcul.money);
    };
    if(calcul.type == 'debit'){
      solde = solde - calcul.money;
    };
    console.log(solde);
  });
  document.getElementById('solde').innerHTML = solde +' €';
};


// Affichage de toutes les operations quand clic nav tout

function tout(){
  navHeader[0].classList.add('active');
  navHeader[1].classList.remove('active');
  navHeader[2].classList.remove('active');
  filter = operations;
  newOperation();
};

// Affichage de tout les credit quand clic nav credit

function credit(){
  navHeader[1].classList.add('active');
  navHeader[0].classList.remove('active');
  navHeader[2].classList.remove('active');
  
  filter = operations.filter(operation => operation.type ==='credit');
  newOperation();
};



// Affichage de tout les debit quand clic nav debit

function debit(){
  navHeader[2].classList.add('active');
  navHeader[0].classList.remove('active');
  navHeader[1].classList.remove('active');
  
  filter = operations.filter(operation => operation.type ==='debit');
  newOperation();
};

// test du graph si affichage ------------------

function testChart(){
  if(typeof chart == 'undefined'){
  refrechGraph();
}else{
  chart.destroy();
  refrechGraph();
}};

//Ajouter une opperation

function submitBeatport()
{
  return{
    title : donneesInput[0].value, 
    description : donneesInput[1].value,
    money : donneesInput[2].value,
    percentage : ((donneesInput[2].value / solde)*100).toFixed(2),
    type : donnees[0].value
  };
}

// enregistrement des donnees et fermeture du formulaire

btSubmit.addEventListener('click', (event) => {
  event.preventDefault();
ajoutOperation = submitBeatport();
operations.push(ajoutOperation);
newOperation();
testChart();
const modal = document.querySelector('.reveal-overlay');
modal.style.display = "none";
html.classList.remove("zf-has-scroll", "is-reveal-open");
html.removeAttribute('style');
submit.reset();
});


console.log("Bijour Bank !");
/**
 * init foundation
 */
$(document).ready(function () {
  $(document).foundation();
});


