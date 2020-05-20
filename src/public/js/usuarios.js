const express = require('express');
const routes = express.Router();


module.exports = routes;


/* validacion del usuario */
function validarUsuario(username) {
    switch (username) {
        case 'Angel':
            usuario1();
            break;
        case 'David':
            usuario2();
            break;
        default:
            alert('El Usuario Ingresado no Existe');
    }
}

/* funciones del usuario1*/
function usuario1() {
    
}
/* funciones del usuario2 */
function usuario2() {

}