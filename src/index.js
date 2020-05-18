const express = require('express');
const app = express();
const path = require('path');
const reload = require('reload');
const http = require('http');
//var sendevent = require('sendevent');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//ROUTES

// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
var publicPath = path.resolve(__dirname, 'views'); //path.join(__dirname, 'public'); también puede ser una opción

// Para que los archivos estaticos queden disponibles.
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views/index.html'));
});


//inicia el servidor
const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
reload(app);


