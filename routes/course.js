const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", function(req, res) {
    res.json({
        message: "Signup endpoint"
    });
});

courseRouter.post("/preview", function(req, res) {
    res.json({
        message: "Signin Endpoint"
    });
});


module.exports = {
    courseRouter: courseRouter
}