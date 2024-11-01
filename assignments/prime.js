var express = require("express");
var app = express();
var PORT = 8080;

class AssignmentController {
    static isPrime(req, res) {
        var n = parseInt(req.params.n, 10);

        if (isNaN(n) || n < 2) {
            return res.json({ error: "Invalid Input" });
        }

        let isPrime = true;

        // Check if n is prime
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }

        res.json({ number: n, isPrime });
    }
}

app.get("/assignments/prime/:n", AssignmentController.isPrime);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
