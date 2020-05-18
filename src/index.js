const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const validator = require('express-validator');
const passport = require('passport');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');
const app = express();
const reload = require('reload');
const http = require('http');
//var sendevent = require('sendevent');


/*===========================================================================
                            SETTINGS  
===========================================================================*/
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');

// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
var publicPath = path.resolve(__dirname, 'public'); //path.join(__dirname, 'public'); también puede ser una opción
app.use(express.static(publicPath)); // Para que los archivos estaticos queden disponibles.

app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'public/index.html'));
});

/*===========================================================================
                            Variables Globales  
===========================================================================*/
/*===========================================================================
                            RUTAS  
===========================================================================*/
app.use('/links', require('./routes/links'));

/*===========================================================================
                            PUBLIUC 
===========================================================================*/

/*============================================================================
                            INICIAR EL SERVIDOR
============================================================================*/
const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
reload(app);
