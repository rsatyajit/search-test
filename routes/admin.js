var express = require('express');
var router = express.Router();
const adminController = require("../controller/admin.controller");
const requestMiddleware = require("../middlewares/requestHandler.middleware");
const reponseMiddleware = require("../middlewares/responseHandlers.middleware");

/* user apis */
router.get('/search', requestMiddleware, adminController.fetchSearchResults, reponseMiddleware);

module.exports = router;
