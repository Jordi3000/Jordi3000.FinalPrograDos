const $submit = document.getElementById("submit"),
      $password = document.getElementById("password"),
      $username = document.getElementById("username"),
      $visible = document.getElementById("visible");

document.addEventListener("change", (e)=>{
    if(e.target === $visible){
        if($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
});

document.addEventListener("click", (e)=>{
    if(e.target === $submit){
        if($password.value === "1234" && $username.value === "alumno"){
            e.preventDefault();
            window.location = "pagina.html";
        }else {
            alert("Usuario o contraseña incorrectos.");
        }
    }
})