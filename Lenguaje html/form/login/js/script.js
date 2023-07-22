console.log("Script de inicio de sesión");

function validarLogin(event) {
    //Evita el envío del formulario por defecto
    event.preventDefault();
    //Obtener los valores de usuario y contraseña
    let username = document.getElementById("username").value;//admin
    let password = document.getElementById("password").value;//batman

    //Validar los camps del formulario
    if(username === "admin" && password=== "batman"){
       window.location.href = ".home.html";
       alert("Inicio de sesión exitoso");
       //Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    }else{
        //Aquí puedes mostrar un mensaje de error o realizar otras acciones
        alert("Usuario o contraseña incorrectos");
    }
}