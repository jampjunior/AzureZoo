$(document).ready(function () {
    // defino la funcion que consultara los datos del api
    //function Cargardetalle() {
    var id = window.location.search.substring(1).split('=')[1];




    //Funicion para volver al listado
    $('#btnCancelar').click(function () {
        window.location.href = '/Especies.html';
    });

    //Funcion para actualizar la marca
    $('#btnActualizar').click(function () {

        var id = window.location.search.substring(1).split('=')[1];

        // var id = 0; //de momento le ponemos un 0 es temporal
        $.ajax({
            url: `api/Especies/${id}`,
            type: "PUT",
            dataType: 'json',
            data: {
                 
                "clasificacion.idClasificacion": $('#clasificacion').val(),
                "tipoAnimales.idTipoAnimal": $('#tipo').val(),
                nombre: $('#nombre').val(),
                nPatas: $('#pata').val(),
                nMascota: $('#mascota').val(),
            },
            success: function (respuesta) {
                // SI LLEGO HASTA AQUÍ QUIERE DECIR
                // ME REDIRECCIONO A LA LISTA DE MARCAS
                window.location.href = './Especies.html';
            },
            error: function (respuesta) {
                console.log(respuesta);
            }
        });

    });
    //ejecuto la funcion que consultará los datos del api
    // Cargardetalle();

});