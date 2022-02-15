
//----------------------------------- REGISTRO --------------------------------------------------

class Usuario {
  constructor(nombre, username, email, contraseña) {
    this.nombre = nombre;
    this.username = username;
    this.email = email;
    this.constraseña = contraseña;
  }
}


let usuarios = [];


const agregarUsuario = function () {


  let inputEmail = document.querySelector("#input_email").value;
  let inputUsername = document.querySelector("#input_username").value;
  let inputPassword = document.querySelector("#input_contraseña").value;

  if (inputEmail.search('@') != -1) // devuelve -1 solo si no lo encuentra
  {
    let datos = {
      email: inputEmail,
      username: inputUsername,
      constraseña: inputPassword
    };


    if (localStorage.usuarios != null) {
      usuarios = JSON.parse(localStorage.usuarios);
    }

    usuarios.push(datos);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    location.replace("../index.html");
  }
  else {
    alert("Debe ingresar un email válido");
  }
};


if (document.getElementById("formulario") != null) {
  document.querySelector("#formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    agregarUsuario();
  });
}

//----------------------------------- LOGIN ------------------------------------------------

const validarDatos = function () {
  let inputEmail = document.querySelector("#input_email").value;
  let inputContraseña = document.querySelector("#input_contraseña").value; 

  usuarios = JSON.parse(localStorage.usuarios);


  function validar_email(usuario) { 
    return usuario.email === inputEmail;
  }

  function validar_contraseña(usuario) { 
    return usuario.constraseña === inputContraseña;
  }

  if (usuarios.find(validar_email)) {
    if (usuarios.find(validar_contraseña)) {

      let result = usuarios.filter(obj => {
        return obj.email === inputEmail //filtra en base a los us que ya tengo. Encuentra obj cuyo mail === input. Devuelve usuario completo
      });


      localStorage.setItem("usuarioLogeado", JSON.stringify(result[0].username)); //resultado unico


      location.replace("./pages/movimiento.html");

    } else {
      alert("Email o contraseña incorrecto, HOLI");
    }
  } else {
    alert("Email o contraseña incorrecto, DOWOW");
  }
};

if (document.getElementById("formularioDelIndex") != null) {
  document.querySelector("#formularioDelIndex").addEventListener("submit", function (e) {
    e.preventDefault();
    validarDatos();
  });
}









