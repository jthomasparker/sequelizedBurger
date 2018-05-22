var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var app = express();

var exphbs = require('express-handlebars')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var db = require('./models')
var routes = require('./controllers/burgers_controller.js')(app)

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


db.sequelize.sync({force: false }).then(function(){
    app.listen(PORT, function(){
        console.log("Server listening on port", PORT)
})

})