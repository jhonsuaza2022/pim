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
    })
    }
}
// =====================MODAL COTIZACION============
const btnLanzarModal = document.querySelector('#lanzar-modal');
const btnOcultarModal = document.querySelector('#ocultar-modal');

const contModal = document.querySelector('.contenedor-modal');

btnLanzarModal.addEventListener('click', (e) => {
    e.preventDefault();
    contModal.classList.add('mostrar');
})

btnOcultarModal.addEventListener('click', (e) => {
    e.preventDefault();
    contModal.classList.remove('mostrar');
})

// =====================MODAL QUEJAS============
const btnLanzarModal2 = document.querySelector('#lanzar-modal2');
const btnOcultarModal2 = document.querySelector('#ocultar-modal2');

const contModal2 = document.querySelector('.modal2');

btnLanzarModal2.addEventListener('click', (e) => {
    e.preventDefault();
    contModal2.classList.add('mostrar');
});

btnOcultarModal2.addEventListener('click', (e) => {
    e.preventDefault();
    contModal2.classList.remove('mostrar');
});
