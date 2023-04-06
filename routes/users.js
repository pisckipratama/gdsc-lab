var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is from user route, and check keel will updating');
});

module.exports = router;
