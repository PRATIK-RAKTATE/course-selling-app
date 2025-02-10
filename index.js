const express = require("express");

const app = express();

app.use(express.json());

app.get("/user/signup", function(req, res) {
    res.json({

    });
});

app.get("/user/signin", function(req, res) {
    res.json({

    });
});

app.get("/purchases", function(req, res) {
    res.json({

    });
});

app.post("/course/purchase", function(req, res) {
    res.json({

    });
})

app.get("/courses", function(req, res) {
    res.json({

    });
});

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});