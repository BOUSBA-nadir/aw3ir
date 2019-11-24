function validation () {
  this.event.preventDefault();
  var nom = document.getElementById('Nom');
  var prenom = document.getElementById('prénom');
  var date = document.getElementById('date');
  var adresse= document.getElementById('addr');
  var mail = document.getElementById('Mail');
  var errorText = document.getElementById("error");
  var resultText = document.getElementById("resultat");
   var error = "";
   var resultat= "";
 var list = document.querySelectorAll("input");
 list.forEach(function (item) {
  if (item.value.length<5){
    error = "les champs doivent contenir au moins cinq caracteres";
  }




});


if (error ==="") {
  resultat = "bienvenue" + " "+nom.value + " " +prenom.value;
  resultText.innerText=resultat;
}else {
  errorText.innerText=error;




}
}
