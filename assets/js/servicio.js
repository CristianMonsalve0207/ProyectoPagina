$(document).ready(function () {


  $("#Pl").click(function (e) {

    var nombre = $("#PL1").val();
    alert(nombre);


  });

  $("#P2").click(function (e) {

    var nombre = $("#PL2").val();
    alert(nombre);


  });

  $("#P3").click(function (e) {

    var nombre = $("#PL3").val();
    alert(nombre);


  });


  $("#P4").click(function (e) {

    var nombre = $("#PL4").val();
    alert(nombre);


  });

  $("#P5").click(function (e) {

    var nombre = $("#PL5").val();
    alert(nombre);


  });


  $("#P6").click(function (e) {

    var nombre = $("#PL6").val();
    alert(nombre);


  });


  $("#P7").click(function (e) {

    

    var nombre = $("#PL7").val();
    alert(nombre);

    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActuales = fechaActual.getMinutes();

    var fechaFormateada = fechaActual.toLocaleDateString();
    var horaFormateada = horaActual + ":" + minutosActuales;



    var L_instalacion = "Herrajes electricos";
    var tipo = "online";
    var material = "";
    var Ciudad = $("#PL7").val();
    var idea = "";
    var materiales = "";
    var fecha = fechaFormateada;
    var hora = horaFormateada;
    var id = Math.floor(Math.random() * 10000000) + 1;

    var nuevacompra = {
      id: id,
      L_instalacion: L_instalacion,
      tipo: tipo,
      material: material,
      Ciudad: Ciudad,
      idea: idea,
      materiales: materiales,
      fecha: fecha,
      hora: hora
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
        if (!Array.isArray(usuarioActivo.compras)) {
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

  $("#P8").click(function (e) {

    var nombre = $("#PL8").val();
    alert(nombre);

    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActuales = fechaActual.getMinutes();

    var fechaFormateada = fechaActual.toLocaleDateString();
    var horaFormateada = horaActual + ":" + minutosActuales;



    var L_instalacion = "Pasamanos";
    var tipo = "online";
    var material = "";
    var Ciudad = $("#PL8").val();
    var idea = "";
    var materiales = "";
    var fecha = fechaFormateada;
    var hora = horaFormateada;
    var id = Math.floor(Math.random() * 10000000) + 1;

    var nuevacompra = {
      id: id,
      L_instalacion: L_instalacion,
      tipo: tipo,
      material: material,
      Ciudad: Ciudad,
      idea: idea,
      materiales: materiales,
      fecha: fecha,
      hora: hora
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
        if (!Array.isArray(usuarioActivo.compras)) {
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


  $("#P9").click(function (e) {

    var nombre = $("#PL9").val();
    alert(nombre);

    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActuales = fechaActual.getMinutes();

    var fechaFormateada = fechaActual.toLocaleDateString();
    var horaFormateada = horaActual + ":" + minutosActuales;



    var L_instalacion = "Ventanas de aluminio";
    var tipo = "online";
    var material = "";
    var Ciudad = $("#PL9").val();
    var idea = "";
    var materiales = "";
    var fecha = fechaFormateada;
    var hora = horaFormateada;
    var id = Math.floor(Math.random() * 10000000) + 1;

    var nuevacompra = {
      id: id,
      L_instalacion: L_instalacion,
      tipo: tipo,
      material: material,
      Ciudad: Ciudad,
      idea: idea,
      materiales: materiales,
      fecha: fecha,
      hora: hora
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
        if (!Array.isArray(usuarioActivo.compras)) {
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


