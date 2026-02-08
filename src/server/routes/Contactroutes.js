const express = require("express");
const router = express.Router();
const contactusController = require("../controller/Contact");
router.post("/contact", contactusController.contactMe);
module.exports = router;
