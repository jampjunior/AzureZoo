$(document).ready(function () {
    // defino la funcion que consultara los datos del api

    var id = window.location.search.substring(1).split('=')[1];

    // PREPARAR LA LLAMDA AJAX 


    //Funicion para volver al listado
    $('#btnCancelartipo').click(function () {
        window.location.href = '/Tipos.html';
    });

    //Funcion para actualizar la marca
    $('#btnActualizartipo').click(function () {


        var id = window.location.search.substring(1).split('=')[1];

        // var id = 0; //de momento le ponemos un 0 es temporal
        $.ajax({
            url: ` api/TipoAnimal${id}`,
            type: "PUT",
            dataType: 'json',
            data: {
               // idTipoAnimal: $('#tipoid').val(),
                denominacion: $('#denominacion').val()
            },
            success: function (respuesta) {
                // SI LLEGO HASTA AQUÍ QUIERE DECIR
                // ME REDIRECCIONO A LA LISTA DE MARCAS
                window.location.href = '/Tipos.html';
            },
            error: function (respuesta) {
                console.log(respuesta);
            }
        });

    });
    //ejecuto la funcion que consultará los datos del api


});