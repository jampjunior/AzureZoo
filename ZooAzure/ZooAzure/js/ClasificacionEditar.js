$(document).ready(function () {
    // defino la funcion que consultara los datos del api

        var id = window.location.search.substring(1).split('=')[1];

        // PREPARAR LA LLAMDA AJAX 
  
    //Funicion para volver al listado
    $('#btnCancelar').click(function () {
        window.location.href = '/Clasificacion.html';
    });

    //Funcion para actualizar la marca
    $('#btnActualizar').click(function () {
        

        var id = window.location.search.substring(1).split('=')[1];

        // var id = 0; //de momento le ponemos un 0 es temporal
        $.ajax({
            url: ` api/Clasificacion/${id}`,
            type: "PUT",
            dataType: 'json',
            data: {
                idClasificacion: $('#id').val(),
                denominacion: $('#denominacion').val()
            },
            success: function (respuesta) {
                // SI LLEGO HASTA AQUÍ QUIERE DECIR
                // ME REDIRECCIONO A LA LISTA DE MARCAS
                window.location.href = '/Clasificacion.html';
            },
            error: function (respuesta) {
                console.log(respuesta);
            }
        });

    });
    //ejecuto la funcion que consultará los datos del api
   

});