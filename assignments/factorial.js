var express = require("express");
var app = express();
var PORT = 8080;

class AssignmentController {
    static factorial(req, res) {
        var n = parseInt(req.params.n, 10);

        if (isNaN(n) || n < 0) {
            return res.json({ error: "Invalid Input" });
        }

    
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }

        res.json({ number: n, factorial: result });
    }
}

app.get("/assignments/factorial/:n", AssignmentController.factorial);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
