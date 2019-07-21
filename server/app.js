let express = require('express');
let app = express();

app.get('/api/user', (req, res) => {
    res.json({
        name: "Allen Feng",
        age: 23
    });
});

console.log("express is running at port 8000");

app.listen(8000)