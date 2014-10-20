var pg = require('pg');
var config = require('../config.js');
var orm = require('../lib/orm.js').orm();

var connexion = config['info-db'];

exports.get_tables_list = function(req, res) {
	var query = 'SELECT * from index;';
  orm.db_query(connexion, query, function(err, result) {
    if(err) {
      console.log(err);
      res.send(err);
    }
    else {
      res.send(result.rows);
    }
  }); 
};
