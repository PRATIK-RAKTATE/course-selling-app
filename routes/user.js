const { router, Router } = require('express');
const useRouter = Router();

useRouter.post("/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    });
});

useRouter.get("/signin", function(req, res) {
    res.json({
        message: "Signin endpoint"
    });
});

useRouter.get("/purchases", function(req, res) {
    res.json({
        message: "purchases endpoint"
    });
});

module.exports = {
    userRouter: useRouter
}