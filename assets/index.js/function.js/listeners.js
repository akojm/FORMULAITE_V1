  
  // querySelectorAll = retour d'un tableau //
 let icons = document.querySelectorAll('i.icon-password')
    // cibler le éléments //
    let formRegister = document.forms['register'];
    let formLogin = document.forms['login'];
    let firstname = document.forms[0]['firstname'];
    let lastname = document.forms[0]['lastname'];
    let email = document.forms[0] ['email'];
    let password = document.forms[0] ['password'];
    let passwordConfirm = document.forms[0] ['password-confirm'];


    // Creation d'une variable Globale, un OBJET vide pour valider tous les champs valide //
    let check = {}


// Regroupement des plusieur fonction dans un objet pour mieux organiser et gerer notre code //
// attribut + valeur //
let listenerFunction = {
    toggleInputType : (e)=>{
    e.target.classList.toggle('fa-eye-slash')
    let input = e.target.parentNode.children[0]; // variable pour recuperer le fils d'un parent = retour d'un tableau//
   if (input.type === 'password') {
       input.type = 'text'
   } else {
       input.type = 'password';
   }
},
// Validation des champs input //
checkFirstname : (e) =>{
let input = e.target;
let contentInput = input.value.trim(); // une méthode qui nous permet de supprimer les espaces // 
document.getElementById('error-firstname').innerHTML = ''; // vider les informations contenues dans le input après le message d'erreur //
let error = ''
let valid = ''
if (!contentInput) {
    error = ' Your firstname must not be empty '
}else if(!/^[a-zA-Z]{3,12}$/.test(contentInput)){
  error = " Your firstname not valid"
}
if(error){
    check = {...check, firstname: false}
    document.getElementById('error-firstname').innerHTML = error;
}else{
    check = {...check, firstname :true}
    valid = ' Your firstname is valid !'
    document.getElementById('error-firstname').innerHTML = valid;

}
setupSubmitButton();
},
checklastname : (e) =>{
let input = e.target;
let contentInput = input.value.trim(); // une méthode qui nous permet de supprimer les espaces // 
document.getElementById('error-lastname').innerHTML = ''; // vider les informations contenues dans le input après le message d'erreur //
let error = ''
let valid = ''
if (!contentInput) {
    error = ' Your lastname must is not be empty '
}else if(!/^[a-zA-Z.-]{3,12}$/.test(contentInput)){
  error = " Your lastname not valid"
}
if(error){
    check = {...check, lastname: false}

    document.getElementById('error-lastname').innerHTML = error;
}else{
    check = {...check, lastname :true}
    valid = ' Your lastname is valid !'
    document.getElementById('error-lastname').innerHTML = valid;
}
setupSubmitButton();
},
checkEmail : (e) =>{
let input = e.target;
let contentInput = input.value.trim(); // une méthode qui nous permet de supprimer les espaces // 
document.getElementById('error-email').innerHTML = ''; // vider les informations contenues dans le input après le message d'erreur //
let error = ''
let valid = ''
if (!contentInput) {
    error = ' Your email must not be empty '
 }else if(!/^[a-z0-9-_.]+@[a-z]+\.[a-z]{2,6}$/.test(contentInput)){
  error = " Your email is not valid"
}
if(error){
    check = {...check, email:false}
    document.getElementById('error-email').innerHTML = error;
}else{
    check = {...check, email:true}
    valid = ' Your email is valid !'
    document.getElementById('error-email').innerHTML = valid;
}
setupSubmitButton();
},
checkPassword : (e) =>{
let input = e.target;
let contentInput = input.value.trim(); // une méthode qui nous permet de supprimer les espaces // 
let regEmail = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
document.getElementById('error-password').innerHTML = ''; // vider les informations contenues dans le input après le message d'erreur //
let error = ''
let valid = ''
if (!contentInput) {
    error = ' Your email must not be empty '
 }else if(!regEmail.test(contentInput)){
  error = " Your password must contain at least one upper case letter, one lower case letter, one number and one special character and be between 8 and 20 characters long."
}
if(error){
    check = {...check, password:false}
    document.getElementById('error-password').innerHTML = error;
}else{
    check = {...check, password :true}
    valid = ' Your password is valid !'
    document.getElementById('error-password').innerHTML = valid;
}
setupSubmitButton();
},
checkPasswordConfirm : (e) =>{
let input = e.target;
let contentInput = input.value.trim(); // une méthode qui nous permet de supprimer les espaces // 
document.getElementById('error-confirm-password').innerHTML = ''; // vider les informations contenues dans le input après le message d'erreur //
let error = ''
let valid = ''
if (!contentInput) {
    error = ' Your confirm password must not be empty '
 }else if(contentInput !== password.value){ // comparaison du contenu de l'input rt la valeur du contenu du password//
  error = " Confirmation password does not match entered password."
}
if(error){
    check = {...check, passwordConfirm : false}
    document.getElementById('error-confirm-password').innerHTML = error;
}else{
    check = {...check, passwordConfirm : true}
    valid = ' Your password confirm is valid !'
    document.getElementById('error-confirm-password').innerHTML = valid;
}
setupSubmitButton();
},
/* Suspendre toutes les actions par defaut */
submitLoginForm: (e) =>{
e.preventDefault(); // Méthode pour suspendre toutes actions par defaut // 
var formData = new FormData(formLogin) // Variable pour récupérer les données du formulaire et les traiter//
// Initiation des requetes vers le serveur de traitement //
console.log(formData.get('email'));
},
}

//  fonction qui me permet de doner l'état de validité du formulaire Register //
let checkFormValidity = () =>{
    let result = true; // variable initialisé à TRUE //
if (formRegister) {
    if (Object.keys(check).length === 5) {
        // boucle pour parcourir un objet "forin" //
        for (const key in check) {
                const value = check[key]; // la valeur assocée à la clé de l'objet "check" // // Value  = true //
               
                result = result && value;  // Opération qui va changer la valeur de result //
                // ATTENTION PAS D'ACCOLADE CAR ON EST SUR UNE SEULE LIGNE
                if(!result) return result // retournE result qui est false      
            }
            return result // si on n'est pas dans le cas result vaut false , on retourne result qui vaut true //
        }
    }
 if (formLogin) {
    if (Object.keys(check).length === 4) {
        // boucle pour parcourir un objet "forin" //
        for (const key in check) {
                const value = check[key]; // la valeur assocée à la clé de l'objet "check" // // Value  = true //
               
                result = result && value;  // Opération qui va changer la valeur de result //
                // ATTENTION PAS D'ACCOLADE CAR ON EST SUR UNE SEULE LIGNE
                if(!result) return result // retournE result qui est false      
            }
            return result // si on n'est pas dans le cas result vaut false , on retourne result qui vaut true //
        }
    }
return false;
}
// fonction qui permet de connaitre l'etat du formulaire pour l'activation du bouton // 
// la fonction setupSubmitButton () doit etre rappeler dans chaque mes fonction check //
let setupSubmitButton = ()=>{
   if (checkFormValidity()) { // regarder si le formulaire est valide par la fonction // 
    if (formRegister.elements[5]) { // récupération du boutton du formulaire et voir si il existe//
        formRegister.elements[5].disabled = false;
        return;
    }   
    // si checkFormValidity n'est pas à  TRUE , il faut désactivé le boutton //
        formRegister.elements[5].disabled = true;
   }
    if (checkFormValidity()) { // regarder si le formulaire est valide par la fonction // 
    if (formLogin.elements[2]) { // récupération du boutton du formulaire et voir si il existe//
        formLogin.elements[2].disabled = false;
        return;
    }   
    // si checkFormValidity n'est pas à  TRUE , il faut désactivé le boutton //
        formLogin.elements[2].disabled = true;
   }

}
// Fonction qui permet d'initisier mes abondement //
let setupListeners = () =>{

    // Nous pouvons reduire le code avec les opérations  ternaires //
    //  ? = si ca existe +  l'evenemrnt + la fonction dans l'objet crée + : null //
    firstname ?  firstname.onkeyup = listenerFunction.checkFirstname : null
    lastname ? lastname.onkeyup = listenerFunction.checklastname : null
    email ?  email.onkeyup = listenerFunction.checkEmail : null 
    password ?  password.onkeyup = listenerFunction.checkPassword : null 
    passwordConfirm ?  passwordConfirm.onkeyup = listenerFunction.checkPasswordConfirm : null 
    // Suspendre les actions par default /
    formLogin ? formLogin.onsubmit = listenerFunction.submitLoginForm : null 

// Remplacement des conditions avec les operations ternaires //
/*
if (firstname) {
    firstname.onkeyup = listenerFunction.checkFirstname; // Mettre un abonnement à mon élément //
}
if (lastname) {
    lastname.onkeyup = listenerFunction.checklastname; // Mettre un abonnement à mon élément //
} 
if (email) {
    email.onkeyup = listenerFunction.checkEmail; // Mettre un abonnement à mon élément //
} 
*/
    for (let i = 0; i < icons.length; i++) {
        let icon = icons[i]; // Un boucle for pour traiter le tabeau retourner par querySelector /
        icon.onclick = listenerFunction.toggleInputType // un evenement click sur lélémenent icon//    
    }
  

}

