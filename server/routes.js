// require router
const router = require("express").Router();
// require path
const path = require("path");
// write the controller requests
const model = require(path.join(__dirname, "model.js"));

router.get("/fetch", model.get)

module.exports = router;