var express = require('express');
var router = express.Router();
const {index,viewCreate,actionCreate,viewEdit,ActionEdit,ActionDelete, actionStatus} = require('./controller')
const multer = require('multer')
const os = require('os')

/* GET home page. */
const {isLoginAdmin} = require('../middleware/auth')
router.use(isLoginAdmin)
router.get('/',index);
router.get('/create',viewCreate);
router.post('/create', multer({dest:os.tmpdir()}).single('thumbnail') ,actionCreate);
router.get('/edit/:id',viewEdit);
router.put('/edit/:id',multer({dest:os.tmpdir()}).single('thumbnail'),ActionEdit);
router.delete('/delete/:id',ActionDelete);
router.put('/status/:id',actionStatus);

module.exports = router;