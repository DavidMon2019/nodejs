
var boton ='<button class="btn btn-danger" type="button" onclick="editar()"><span class="fas fa-edit"></span></button>';

window.onload = fecha;
function fecha() {
    var f = new Date();
    var fecha = document.getElementById('fecha');
    var hora = document.getElementById('horas');

    fecha.value = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    hora.value = 6.5;
    return fecha;
}
function editar() {
    $("#horas").removeAttr('readonly');
    document.getElementById('edit').innerHTML = '<button class="btn btn-primary " ' +
        'id="save" onclick="guardar()"><span class="fas fa-save"></span></button><button class="btn btn-danger"' +
        'id="cancel" onclick="cancelar()"><span class=" fas fa-window-close"></span></button>';


}
function guardar() {
    document.getElementById('horas').setAttribute('readonly', true);
    document.getElementById('edit').innerHTML = boton;
}
function cancelar() {
    document.getElementById('horas').setAttribute('readonly', true);
    document.getElementById('edit').innerHTML = boton;
}

module.exports = fecha;




