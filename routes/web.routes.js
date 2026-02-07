const express = require("express");
const router = express.Router();
const controller = require("../controllers/web.controller");

router.get("/perfil", controller.perfil);
router.get("/dashboard", controller.dashboard);

module.exports = router;
