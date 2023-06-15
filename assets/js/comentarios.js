 // Función para agregar un comentario
function agregarComentario() {
    var nombre = $("#nombre").val();
    var comentario = $("#comentario").val();

if (nombre && comentario) {
    var nuevoComentario = $("<li>").addClass("list-group-item");
    $("<h5>").addClass("mb-1").text(nombre).appendTo(nuevoComentario);
    $("<p>").addClass("mb-1").text(comentario).appendTo(nuevoComentario);
    nuevoComentario.appendTo("#comentarios");

    // Limpiar los campos del formulario
    $("#nombre").val("");
    $("#comentario").val("");
}
}

// Capturar el envío del formulario
    $("form").submit(function(e) {
        e.preventDefault();
        agregarComentario();
    });