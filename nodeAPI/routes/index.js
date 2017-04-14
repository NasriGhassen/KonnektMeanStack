var express = require('express');
var router = express.Router();

var userController = require('../controller/userController');
var accidentController = require('../controller/accidentController');
var accidentController = require('../controller/suggestController');

/* GET home page. */
router.get('/users',userController.findAll);
router.get('/users/:login',userController.find);
router.put('/users',userController.editUser);
router.delete('/users/:id',userController.deleteUser);
router.delete('/users',userController.remove);
router.post('/users',userController.addUser);


router.get('/accidents',accidentController.findAll);
router.get('/accidents/:login',accidentController.find);
router.put('/accidents',accidentController.editUser);
router.delete('/accidents/:id',accidentController.deleteUser);
router.delete('/accidents',accidentController.remove);
router.post('/accidents',accidentController.addUser);

router.get('/suggests',accidentController.findAll);
router.get('/suggests/:types',accidentController.find);
router.put('/suggests',accidentController.editUser);
router.delete('/suggests/:id',accidentController.deleteUser);
router.delete('/suggests',accidentController.remove);
router.post('/suggests',accidentController.addUser);

module.exports = router;
