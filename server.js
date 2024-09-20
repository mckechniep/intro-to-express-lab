
import express from "express";

const app = express();

app.listen(5500, () => {
    console.log('Listening on port 5500 ya boii')
})
app.get('/greetings/:name', (req, res) => {
    res.send(`Hello ${req.params.name}!`);
  });



