$(document).ready(function () {
    // defino la funcion que consultara los datos del api
    function Cargardetalle() {
        var id = window.location.search.substring(1).split('=')[1];
        //var id = 0; //de momento le ponemos un 0 es temporal



        // PREPARAR LA LLAMDA AJAX 
        $.get(`/api/TiposAnimales/${id}`, function (respuesta, estado) {
            $('#resultado').html('');
            // COMPRUEBO EL ESTADO DE LA LLAMADA
            if (estado === 'success') {
                // SI LLEGO HASTA AQUÍ QUIERE DECIR
                // QUE EN 'RESPUESTA' TENGO LA INFO
            }
            var contenido = '';
            contenido += respuesta.TiposAnimales[0].denominacion;

            $('#resultado').html(contenido);
        });
    }
    //ejecuto la funcion que consultará los datos del api
    Cargardetalle();

});