const router = require('express').Router();
const orderController = require('./controller');
const multer = require('multer');
const { police_check } = require('../../middlewares');
const upload = multer();

router.post('/orders', 
    upload.none(),
    police_check('create', 'Order'),
    orderController.store);
router.get('/orders', 
    police_check('view', 'Order'),
    orderController.index);

module.exports = router;