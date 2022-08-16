const router = require('express').Router();
const authController = require('./controller');
const multer = require('multer');
const upload = multer();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({usernameField: 'email'}, authController.localStrategy));
router.post('/register', upload.none(), authController.register);
router.post('/login', upload.none(), authController.login);
router.post('/logout', upload.none(), authController.logout);
router.get('/me', authController.me);

module.exports = router;