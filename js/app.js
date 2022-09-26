function validaLogin(){
    var user = "admin";
    var pass = "1234";

    var mensagemLogin = document.getElementById("mensagemLogin");
    var loginValido = document.getElementById("loginValido");
    var loginInvalido = document.getElementById("loginInvalido");
    var formLogin = document.getElementById("formLogin");


    console.log("entrou");


    mensagemLogin.style.visibility= "visible";


    if(user === document.forms["validalogin"]["usuario"].value && pass === document.forms["validalogin"]["senha"].value){
        console.log("entrou");
   
    
        if(loginValido.style.visibility = "hidden"){

            console.log("entrou");

     
            loginValido.style.visibility = "visible";

            loginInvalido.style.visibility = "hidden";
            

        }
        
        return true;
    }else{
        console.log("entrou");
        if(loginInvalido.style.visibility = "hidden"){

            console.log("entrou");

   
            loginInvalido.style.visibility = "visible";
            loginValido.style.visibility = "hidden";
       
      
        }
        return false;
    }
   
    
}