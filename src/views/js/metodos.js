window.onload = fecha;
function fecha(){
    var f = new Date();
document.getElementById('fecha').innerHTML = '<label > Fecha Actual: '+f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()+'</label>';
}






/*============================================================================================
//                               Método de inicio
//                               el archivo
********************************************************************************************** */
function inicio() {
    document.getElementById('archivo').addEventListener('change', cargar, false); //le asigana el elemento de html al cual se va a escuchar
    //alert('cargar archivo');
}
/*============================================================================================
//                               Método para cargar
//                               el archivo
********************************************************************************************** */
function cargar(ev) {
    document.getElementById('datos').innerHTML = '<ul class="list-group ">' +
        '<li  class="list-group-item bg-success text-white"> Nombre del archivo: ' + ev.target.files[0].name + '<br></li>' + //muestra ek nombre del archivo
        '<li  class="list-group-item bg-success text-white"> Tamaño del archivo: ' + ev.target.files[0].size + '<br></li>' + //muestra el tamaño del archivo
        '<li class="list-group-item bg-success text-white">Tipo de Archivo: ' + ev.target.files[0].type + '</li>'; //muestra el tipo del archivo
    var arch = new FileReader(); // objecto de tipo FileReader, se usa para leer el archivo
    arch.addEventListener('load', leer, false); //se agrega el un evento al metodo leer
    arch.readAsText(ev.target.files[0]);//indica que lo que se leera

}
/*============================================================================================
//                               Método para leer
//                               el archivo
********************************************************************************************** */
function leer(ev) {
    document.getElementById('editor').value = 'Contenido del Archivo: \n' + ev.target.result;//se agrega un evento al objeto de html y se asigna el valor resultante del archivo
    var contenido = ev.target.result; // se agrega el resultado del archivo a una variable
    //coleccion de caracteres que se desean buscar
    const caracteres = ['$','@','%','.', ':', ';', ',', '!', '+', '-', '\'', '/', '¡', '¿', '?', '*', '\"', '|', '[', ']', '{', '}', '_', '-', '='];
    // se llama el metodo buscar y se le asigna el contenido y los caracteres a buscar
    buscar(contenido, caracteres);
   // console.log(contenido);
}
/*============================================================================================
//                               Método buscar
//                               characteres
********************************************************************************************** */

function buscar(conten, caract) { // se reciben dos parametros, el contenido del archivo y los caracteres que se desean buscar
    let n = 0;//contador de caracteres
    var chars = new Array();
    for (let i = 0; i < caract.length; i++) {
        for (let j = 0; j < conten.length; j++) {
            if (caract[i] == conten[j]) {
                n = n + 1;
                if (!chars.includes(caract[i])) { //si el caracter no existe se agrega a un nuevo array
                    chars.push(caract[i]);//array de caracteres encontrados
                }

            }
        }
    }
    //se le asigna al objeto html los valores que se mostraran en el
    document.getElementById("resultado").innerHTML = '<ul class="list-group ">' +
        '<li  class="list-group-item bg-primary text-white">' + 'Cantidad de Caracteres: ' + (n - 1) + '<br></li>' + // cantidad de caracteres
        '<li  class="list-group-item bg-primary text-white">' + 'caracteres: ' + chars + '<br></li>'; // caracteres encontrados
}


