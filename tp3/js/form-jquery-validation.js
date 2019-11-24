$( document ).ready(function() {
   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
   // voir plus : https://www.w3schools.com/js/js_htmldom.asp

    console.log( "DOM ready!" );

    // Y mettre le code jQuery pour valider tous les champs du formulaire
});
function validation(){
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var date = document.getElementById("date").value;
  var adresse= document.getElementById("addresse").value;
  var mail = document.getElementById("mail").value;
  var nomm = nom.length;
  var prenomm = prenom.length;
  var datee= date.length;
  var addressee = adresse.length;
  var maill= mail.length;
if(nomm>=5 && prenomm >=5 && datee >=0 && addressee >=4 && maill >=5){
  document.getElementById("im").setAttribute("src","https://maps.googleapis.com/maps/api/staticmap?markers="+adresse+"&zoom=9&size=210x210&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg");
  document.getElementById('h').innerHTML='bienvenue'+document.getElementById("nom").value;
    $('#myModal').modal("show");
}
else {
  $('#myModal2').modal("show");
}


  }
