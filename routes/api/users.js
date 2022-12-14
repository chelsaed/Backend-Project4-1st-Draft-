const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/userController');

/*---------- Public Routes ----------*/
router.get('/', usersCtrl.index);
router.put('/addathlete/:id', usersCtrl.addAthlete);
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/:id', usersCtrl.show);



/*---------- Protected Routes ----------*/




module.exports = router;
