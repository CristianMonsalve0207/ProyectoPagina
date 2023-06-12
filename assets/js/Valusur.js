$('#validar').submit(function (event) {
    event.preventDefault();
    alert("Hola Mundo");

    var correo = $('#correo').val();
    var contrasena = $('#clave').val();

    alert(correo + ' ' + contrasena);

    // Cargar el archivo JSON
    $.getJSON('./assets/datos.json', function (data) {
        var usuarios = data.usuarios;

        // Validar el correo
        var usuarioEncontrado = usuarios.find(function (usuario) {
            return usuario.correo === correo;
        });

        if (usuarioEncontrado) {
            // Verificar la contraseña
            if (usuarioEncontrado.contrasena === contrasena) {
                // El inicio de sesión es válido, actualizar el valor de "activo" a "1"
                usuarioEncontrado.activo = true;
                alert('Inicio de sesión exitoso');

                // Guardar los cambios en el almacenamiento local (localStorage)
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                alert('Cambios guardados correctamente en el almacenamiento local');
                window.location.href = "./inicio.html";
                
                // Aquí puedes realizar la redirección o realizar otras acciones necesarias
            } else {
                // Contraseña incorrecta
                alert('Contraseña incorrecta');
            }
        } else {
            // El usuario no existe
            alert('El usuario no existe');
        }
    }).fail(function () {
        // Error al cargar el archivo JSON
        alert('Error al cargar los datos de usuarios');
    });
});

