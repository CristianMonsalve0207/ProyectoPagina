
$("#gato").click(function (event) {
    
    
    console.log("voy aca");

    

    // Obtener los valores de los campos de entrada
    var correo = $("#correo").val();
    var contrasena = $("#contraseña").val();
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var telefono = $("#telefono").val();
    var direccion = $("#direccion").val();
    var imagenPerfil = document.getElementById("imagenPerfil");
    var archivoImagen = imagenPerfil.files[0];
   

    try {
        // El código que puede lanzar un error
        var nombreArchivoImagen = archivoImagen.name;
      } catch (error) {
        // Código para manejar o ignorar el error
        console.log('Ha ocurrido un error, pero lo estamos ignorando.');
        
      }





    // Crear el objeto con los datos del nuevo usuario
    var nuevoUsuario = {

        "correo": correo,
        "contrasena": contrasena,
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono,
        "direccion": direccion,
        "imagenPerfil": "./image/" + nombreArchivoImagen

    };

    // Mostrar alerta con la información del nuevo usuario
    alert(JSON.stringify(nuevoUsuario, null, 2));

    // Recuperar los datos existentes en el almacenamiento local
    var datosGuardados = localStorage.getItem("datos");

    // Verifica si existen datos en el almacenamiento local
    var datos;
    if (datosGuardados) {
        // Analiza los datos existentes en formato JSON
        datos = JSON.parse(datosGuardados);
    } else {
        // Si no hay datos existentes, crea un objeto vacío
        datos = { usuarios: [] };
    }

    //buscar si hay un usuario con el estado true
    var usuarioActivo = datos.usuarios.find(function (usuario) {
        return usuario.activo == true;
    });

    //actualizar los datos del usuario activo con los datos del nuevo usuario
    usuarioActivo.correo = correo;
    usuarioActivo.contrasena = contrasena;
    usuarioActivo.nombre = nombre;
    usuarioActivo.apellido = apellido;
    usuarioActivo.telefono = telefono;
    usuarioActivo.direccion = direccion;
    usuarioActivo.imagenPerfil = "./image/" + nombreArchivoImagen;





    datos.usuarios.splice(usuarioActivo, 1, usuarioActivo);








    // Convertir el objeto en formato JSON
    var datosActualizados = JSON.stringify(datos);

    // Almacenar los datos actualizados en el almacenamiento local
    localStorage.setItem("datos", datosActualizados);

    window.location.href = "./inicio.html";
















});

