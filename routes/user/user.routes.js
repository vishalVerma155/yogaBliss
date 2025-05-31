
const express = require('express');
const verifyJWT = require('../../middleware/authMiddleware.js');
const { registerUser, loginUser,} = require('../../controllers/user/user.controllers.js');
const { upload } = require('../../utils/multer.js');





const router = express.Router();

router.post("/registerUser", upload.single('profilePhoto'), registerUser);

router.post("/loginUser", loginUser);








module.exports = router;