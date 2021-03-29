const router = require('express').Router();

const { GetData, BookUser, CreateUser } = require('./controllers');

router.get('/getData', GetData);
router.put('/bookUser', BookUser);
router.post('/createUser', CreateUser);

module.exports = router;
