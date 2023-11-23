function validarFormulario() {
    // Obtener los valores de los campos
    var formulario = document.getElementById('miFormulario');
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var empresa = document.getElementById('empresa').value;
    var informacion = document.getElementById('info').value;



    // Verificar si los campos requeridos están llenos
    if (nombre.trim() === '' || telefono.trim() === '' || empresa.trim() === '' || informacion.trim() === '') {
        // Mostrar una alerta con SweetAlert si algún campo está vacío
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos requeridos.',
        });
    }else{
    // Mostrar una alerta con SweetAlert si todos los campos están llenos
        Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Formulario enviado correctamente.',
    }).then(function () {
        // Después de hacer clic en "Aceptar", enviar el formulario al servidor
        formulario.submit();
    });
    }
}
