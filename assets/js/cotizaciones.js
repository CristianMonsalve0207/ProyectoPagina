$(document).ready(function () {
    $("#Gen_cot").submit(function (event) {
        event.preventDefault();

        var L_instalacion = $("#L_instalacion").val();
        var tipo = $("#tipo").val();
        var material = $("#material").val();
        var Ciudad = $("#Ciudad").val();
        var idea = $("#idea").val();
        var materiales = $("#materiales").val();

        var nuevacompra = {
            L_instalacion: L_instalacion,
            tipo: tipo,
            material: material,
            Ciudad: Ciudad,
            idea: idea,
            materiales: materiales
        };

        // Recupera el string de usuarios del almacenamiento local
        var usuariosString = localStorage.getItem('datos');

        // Si hay algún dato en el almacenamiento local...
        if (usuariosString) {
            // Parsea el string a un objeto
            var usuariosObj = JSON.parse(usuariosString);
            var usuarios = usuariosObj.usuarios;

            // Busca si hay algún usuario con el estado 'activo' igual a true
            var usuarioActivo = usuarios.find(function (usuario) {
                return usuario.activo == true;
            });

            console.log(usuarioActivo);
            console.log(typeof usuarioActivo);  

            if (usuarioActivo !== undefined) {
                // Comprueba si usuarioActivo.compras es un array
                if(!Array.isArray(usuarioActivo.compras)) {
                    usuarioActivo.compras = [];
                }
                usuarioActivo.compras.push(nuevacompra);
                localStorage.setItem('datos', JSON.stringify(usuariosObj));
                console.log("Hay un usuario activo en el sistema v3");
            } else {
                console.log("No hay usuarios activos en el sistema v3 ");
            }
            

            // Si no hay datos en el almacenamiento local...
        } else {
            console.log("No hay datos de usuarios almacenados en el localStorage v3");
        }

        

    });
});
