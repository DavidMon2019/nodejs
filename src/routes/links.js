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

routes.post('/reg-dia', (req,res) => {
        console.log(req.body);
        res.send('mensaje');
}, err => console.log('error post reg-dia'));

routes.get('/reg-dia', (req, res) => {
    res.render('pages/bitacora-dia.hbs');
});

module.exports = routes;