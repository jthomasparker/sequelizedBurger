var mysql = require('mysql')
var connection = mysql.createPool(process.env.CLEARDB_DATABASE_URL)


connection.getConnection(function(err, connection){  
if(err){
        console.error("error:", err.stack);
        return;
    }
    console.log("connected as id", connection.threadId)
});


module.exports = connection;