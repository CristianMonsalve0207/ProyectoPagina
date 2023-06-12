


    $("#login").click(function () { 
        alert("login realizado con éxito");
        window.location.href = "./login.html";
    });
    
    $("#Suscribir").click(function () { 
        alert("Suscripción realizada con éxito");
        
        
    });
  
  

  $(document).ready(function() {
    // Recupera el string de usuarios del almacenamiento local
    var usuariosString = localStorage.getItem('usuarios');
  
    // Si hay algún dato en el almacenamiento local...
    if (usuariosString) {
      // Parsea el string a un array de objetos
      var usuarios = JSON.parse(usuariosString);
      
  
      // Busca si hay algún usuario con el estado 'activo' igual a true
      var usuarioActivo = usuarios.find(function(usuario) {
        
        return usuario.activo == true;
      });

      console.log(usuarioActivo);
      console.log(typeof usuarioActivo);  // Añade esta línea
  
      if (usuarioActivo !== undefined) {
        $("#contactanos").text('');
        $("#usuario").text(usuarioActivo.nombre);
        var botonHTML = '<button class="btn btn-light mb-0 p-2" id="miBoton">Cerrar seccion</button>';
        $("header").append(botonHTML);
      


        console.log("Hay un usuario activo en el sistema");
      } else {
        console.log("No hay usuarios activos en el sistema");
      }
  
    // Si no hay datos en el almacenamiento local...
    } else {
      console.log("No hay datos de usuarios almacenados en el localStorage");
    }

    $('body').on('click', '#miBoton', function() {
     //cambia el estado del usuario a inactivo y guarda los cambios en el almacenamiento local
     usuarioActivo.activo = false;
     localStorage.setItem('usuarios', JSON.stringify(usuarios));
     //recarga la página nuevamente
        location.reload();




        alert('Has hecho clic en el botón');
    });





  });
  





