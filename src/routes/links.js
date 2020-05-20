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
var f = new Date();
var fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();

function alertMessage(req){
 
   return message;
}

routes.get('/reg-hora', (req, res) => {
    res.render('pages/bitacora-hora.hbs');
});

routes.post('/reg-dia', (req,res) => {
    message={
        type:'danger',
        intro:'empty',
        message:req
   }
        datos.fecha= fecha;
        if(req.body.actividad === 'Seleccione la Actividad'){
        }
       res.redirect('/links/reg-dia')
       
      
r => console.log('error post reg-dia')});

routes.get('/reg-dia', (req, res) => {
    res.render('pages/bitacora-dia.hbs');
});

module.exports = routes;