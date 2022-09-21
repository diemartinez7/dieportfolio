const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('src/public'));

app.get('/', (req, res) => {
    res.render("index.js")
})

app.listen(PORT, () => console.log('Server in port:', PORT));