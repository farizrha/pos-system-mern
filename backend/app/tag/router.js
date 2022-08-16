const router = require('express').Router();
const tagController = require('./controller');
const multer = require('multer');
const { police_check } = require('../../middlewares');
const upload = multer();

router.get('/tags', tagController.index);
router.post('/tags', 
    upload.none(), 
    police_check('create', 'Tag'),
    tagController.store);
router.put('/tags/:id', 
    upload.none(), 
    police_check('update', 'Tag'),
    tagController.update);
router.delete('/tags/:id', 
    police_check('delete', 'Tag'),
    tagController.destroy);

module.exports = router;