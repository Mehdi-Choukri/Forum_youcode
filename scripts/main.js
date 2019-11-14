


function connexion ()
{
    
   
    let user = document.getElementById('id_user');
    let pw = document.getElementById('id_pass') ;




    let test_user = ['test','youcode'] ;
    

    let test_pw = ['test','youcode'];
    

    if((user.value===test_user[0] && pw.value===test_pw[1]) || (user.value===test_user[1] && pw.value===test_pw[0]) )
    {
        alert("Bienvenue  "+user.value);
       window.location.replace("../Accueil1/Accueil.html");
    }
    else
    {
        alert("User ou mot de passe incorrect")
    }
    

}

function redirection_post()
{
    window.location.replace("../form_msg/projet.html");
}

function ajoutReponse()
{
    new Date().toLocaleString() ;
   
    
    var text = document.getElementById("id_msg").value ;
    var Discussion = document.getElementById("id_discussion").value;

    document.getElementById("id_date").innerHTML="Envoyer par Youcode le : "+Date().toLocaleString();

    document.getElementById("post_msg").innerHTML +=" <a href='../Q&A/Q&A.html'>"+text+"</a><br>Discussion : <br> "+Discussion+"<br>";
  
}

//fonction qui genere un coleur aleatoire !
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
   
    return color;

  }
  function annuler()
  {
    document.getElementById('id_user').value="";
     document.getElementById('id_pass').value="" ;
  }
  
  
  
  function setRandomColor() {
    $("#reponse").css("color", getRandomColor());
  }
  function ajouter_reponse()
  {
    new Date().toLocaleString() ;
   
    
    var text = document.getElementById("id_txtarea").value ;
    document.getElementById("id_rep").innerHTML +="<br>"+Date().toLocaleString() +" : "+text;


  }