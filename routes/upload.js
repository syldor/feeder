var pg = require('pg');
var config = require('../config.js');
var _ = require('underscore');
var path = require('path');
var parser = require('../lib/parser.js').parser();

var conString = config['info-db'];

exports.store_file = function (req, res, next) {
    var data = _.pick(req.body, 'type');
    var uploadPath = path.normalize(config['upload-directory']);
    var file = req.files.file;
    console.log(uploadPath);
    console.log(file.path);

    parser.display_upload(file.path, function(err, parsed_data) {
    	if(err) {
    		res.send(err);
    	}
    	else {
        if(parsed_data.length > 20) {
          res.send(parsed_data.slice(parsed_data.slice(20)));
        }
    		else {
          res.send(parsed_data);
        }
    	}
    })
};

