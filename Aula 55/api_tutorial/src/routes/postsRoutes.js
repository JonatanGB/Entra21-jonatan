const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer")

const postsControllers = require("../controllers/postsControllers");

router.delete("/:id", postsControllers.deletePost);

router.put("/:id", postsControllers.updatePost);

module.exports = router;