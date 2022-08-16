const { police_check } = require('../../middlewares');
const deliveryAddressController = require('./controller');
const multer = require('multer');
const upload = multer();

const router = require('express').Router();

router.get('/delivery-addresses',
    police_check('view', 'DeliveryAddress'),
    deliveryAddressController.index
);

router.post('/delivery-addresses',
    upload.none(),
    police_check('create', 'DeliveryAddress'),
    deliveryAddressController.store
);

router.put('/delivery-addresses/:id',
    upload.none(),
    deliveryAddressController.update
);

router.delete('/delivery-addresses/:id',
    deliveryAddressController.destroy
);

module.exports = router;