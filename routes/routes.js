var express = require('express');
var router = express.Router();

router.route('/upload/')			  .post(require('./upload.js').store_file);

router.route('/tables/list')          .get(require('./tables.js').get_tables_list)

module.exports = router;
