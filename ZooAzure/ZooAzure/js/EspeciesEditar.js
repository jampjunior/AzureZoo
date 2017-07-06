$(document).ready(function () {
    function editar() {

        var id = window.location.search.substring(1).split('=')[1];

        // PREPARAR LA LLAMDA AJAX
        $.get(`/api/Especies/${id}`, function (respuesta, estado) {

            // COMPRUEBO EL ESTADO DE LA LLAMADA
            if (estado === 'success') {
                // SI LLEGO HASTA AQUÍ QUIERE DECIR
                // QUE EN 'RESPUESTA' TENGO LA INFO
                $('#clasificacion').val(respuesta.data[0].clasificacion.idClasificacion);
                $('#tipo').val(respuesta.data[0].tipoAnimales.denominacion);
                $('#nombre').val(respuesta.data[0].nombre);
                $('#pata').val(respuesta.data[0].nPatas);
                $('#mascota').val(respuesta.data[0].esMascota);

            }
        });
    };
    // EJECUTO LA FUNCIÓN QUE CONSULTARÁ LOS DATOS DEL API
    editar();




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
              //  "clasificacion.idClasificacion": $('#clasificacion').val(),
               // "tipoAnimales.idTipoAnimal": $('#tipo').val(),
                nombre: $('#nombre').val(),
              //  nPatas: $('#pata').val(),
              //  nMascota: $('#mascota').val(),
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
    




});




