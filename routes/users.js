const router = require("express").Router();
const controller = require("./controller");
// change the name of this router

router.route("/user")
    .post(controller.findByEmail)

module.exports = router;    