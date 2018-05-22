
var db = require('../models')
var rows;

module.exports = function(app){
    // gets all burgers
    app.get('/', function(req, res){
        db.Burger.findAll({}).then(function(data){
            // set rows to # of rows for later (to force clearDB to increment id by 1)
            rows = data.length;
            var hbsObject = {
                burgers: data
            }
            res.render("index", hbsObject)
        });
    });

    // updates a burger's devoured state
    app.put('/api/burgers/:id', function(req, res){
        db.Burger.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        ).then(function(result){
            res.json(result)
        }) 
    })

    // creates a new burger, increments id by rows + 1
    app.post('/api/burgers/:name', function(req, res){
        var newBurger = {
            id: rows + 1,
            burger_name: req.params.name,
            devoured: false
        }
        db.Burger.create(newBurger).then(function(result){
            res.json(result)
        })
    })
}