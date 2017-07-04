
type = ['', 'info', 'success', 'warning', 'error'];



mensajes = {
    showSwal: function (type, title, text) {
        if (type == 'aviso') {
            swal({
                title: title,
                text: text,
                type: 'warning'
            });
            return;
        }  if (type == 'error') {
            swal({
                title: title,
                text: text,
                type: 'error'
            });
            return;

    }  if (type == 'exito') {
        swal({
            title: title,
            text: text,
            type: 'success'
        });
        return;
    }
    },
  
    dateToString: function (stringDate) {
    var fechaFomateada = '';
    var fecha = new Date(stringDate);
    var dia = fecha.getDate();
    var mes = (fecha.getMonth() + 1);
    fechaFomateada = (dia < 10 ? '0' + dia : dia) + '/' + (mes < 10 ? '0' + mes : mes) + '/' + fecha.getFullYear();
    return fechaFomateada;
}

}
//las propiedades que me van a interesar 