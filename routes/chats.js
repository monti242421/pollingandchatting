const express = require("express");
const router = express.Router();
const chatcontroller = require('../controller/chatcontroller');
const userautherization = require('../middleware/auth');


router.get('/chats/getchat',userautherization.authenticate,chatcontroller.getchat)
router.get('/chats/getmychat',userautherization.authenticate,chatcontroller.getmychat)


module.exports = router;