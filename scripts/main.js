


function connexion ()
{
    
   
    let user = document.getElementById('id_user');
    let pw = document.getElementById('id_pass') ;




    let test_user = ['test','youcode'] ;
    

    let test_pw = ['test','youcode'];
    

    if((user.value===test_user[0] && pw.value===test_pw[1]) || (user.value===test_user[1] && pw.value===test_pw[0]) )
    {
        alert("Bienvenue  "+user.value);
       window.location.replace("../Accueil/Accueil.html");
    }
    else
    {
        alert("User ou mot de passe incorrect")
    }
    

}

function ajoutReponse()
{
    var text = document.getElementById("").value ;

    document.getElementById("").innerHTML=text;
}