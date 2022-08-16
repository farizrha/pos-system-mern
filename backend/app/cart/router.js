const router = require('express').Router();
const { police_check } = require('../../middlewares');
const cartController = require('./controller');
const multer = require('multer');
const upload = multer();

router.put('/carts',
    police_check('update', 'Cart'),
    upload.none(),
    cartController.update
)

router.get('/carts',
    police_check('read', 'Cart'),
    upload.none(),
    cartController.index
)

module.exports = router;