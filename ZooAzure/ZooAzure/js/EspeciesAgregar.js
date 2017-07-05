$(document).ready(function () {
    var id = window.location.search.substring(1).split('=')[1];
    //Funicion para volver al listado
    $('#btnCancelarespecie').click(function () {
        window.location.href = '/Especies.html';
    });

    //Funcion para actualizar la marca
    $('#btnAgregarespecie').click(function () {

        var id = window.location.search.substring(1).split('=')[1];

        // var id = 0; //de momento le ponemos un 0 es temporal
        $.ajax({
            url: `api/Especies`,
            type: "POST",
            dataType: 'json',
            data: {

                idEspecie: $('#especie').val(),
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


});
