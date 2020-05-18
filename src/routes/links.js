const express = require('express');
const routes = express.Router();

const pool = require('../conexion.js');

const datos = {
    'fecha': '',
    'horas': '',
    'actividad': '',
    'comentario': '',
    'importancia': ''
}

routes.get('/reg-hora', (req, res) => {
    res.render('pages/bitacora-hora.hbs');
});

routes.post('/reg-dia', (res) => {
    datos.fecha = document.getElementById('fecha').value;
    datos.horas = document.getElementById('horas').value;
    datos.actividad = document.getElementById('actividad').value;
    datos.comentario = document.getElementById('comentario').value;
    datos.importancia = document.getElementById('importancia').value;
    console.log(datos.fecha+' '+datos.horas);
}, err => console.log('error post reg-dia'));

routes.get('/reg-dia', (req, res) => {
    res.render('pages/bitacora-dia.hbs');
});

module.exports = routes;