var express = require('express');
var router = express.Router();

/* GET usersoo listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/', function(req, res) {
  res.send('respond user List');
});
router.get('/:id(\\d+)', function(req, res) {
  res.send('respond user Info userid:' + req.params.id);
});
router.get('/regist', function(req, res) {
  res.send('respond user Regist');
});


module.exports = router;
