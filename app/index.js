let express = require('express');
let app = express();
let moment = require('moment');
let http = require('http').Server(app);
let twig = require('twig');
let bodyParser = require('body-parser');


// Moment FR
require('moment/locale/fr.js');

app.set('views', 'views');
app.set('view engine', 'html');
app.engine('html', twig.__express);
app.set('twig options', {
    strict_variables: false,
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false,
}));

// parse application/json
app.use(bodyParser.json());

app.use('/js', express.static('public/js'));
app.use('/css', express.static('public/css'));
app.use('/img', express.static('public/img'));



// ROUTES
require('./routes/index').init(app);

// ALL OTHER ROUTES REDIRECT TO '/'
app.get('*', function(req, res) {
    res.redirect('/');
});


module.exports = http;