const express = require('express');
const routes = express.Router();

const pool = require('../conexion.js');


var f = new Date();
var fecha = f.getFullYear() + "/" + (f.getMonth() + 1) + "/" + f.getDate();

routes.post('/reg-dia', async (req, res) => {
    message = {
        'type': '',
        'intro': '',
        'message': ''
    }
    const act = req.body.actividad;
    const { horas, actividad, comentario, importancia } = req.body;
    const datos = {
        actividad, comentario, fecha, horas, importancia
    }
    console.log(act);

    if (req.body.actividad === 'Seleccione la Actividad' && req.body.importancia === 'Importancia de Actividad'
        && req.body.comentario === '') {
        message.type = 'warning';
        message.intro = '¡Campos Vacios!'
        message.message = 'No puede dejar ningun campo vacio'
        res.render('pages/bitacora-dia', { message });
    } else {
        await pool.query('INSERT INTO REGISTROS set ?', [datos]);
        message.type = 'success';
        message.intro = '¡Exito!'
        message.message = 'Actividad Guardada Correctamente'
        res.render('pages/bitacora-dia', { message });

    }
    r => console.log('error post reg-dia')
});

routes.get('/reg-dia', async (req, res) => {
    const registros = await pool.query('select id,actividad,comentario,DATE_FORMAT(fecha, "%d/%m/%Y") fecha,horas,'
        + 'codigo_usuario,importancia from registros;');
    console.log(registros);
    res.render('pages/bitacora-dia', { registros });
});

module.exports = routes;