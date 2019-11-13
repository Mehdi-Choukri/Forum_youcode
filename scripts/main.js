function connexion (user,pw)
{
    let test_user = ['test','youcode'] ;

    let test_pw = ['youcode','test'];

    if(user===test_user[0] && pw===test_pw[1] || ser===test_user[1] && pw===test_pw[0] )
    {
        alert("Bienvenue ");
        window.location.replace("acceuil.html");
    }

}