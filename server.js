const express = require("express");
const app = express();
const port = 80;

app.use('/static', express.static('static'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})
app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})
app.get("/services", (req, res) => {
    res.sendFile(__dirname + '/views/services.html')
})
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + '/views/contact.html')
})
app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})
app.get("/signup", (req, res) => {
    res.sendFile(__dirname + '/views/signup.html')
})



app.listen(port, () => {
    console.log(`port running at ${port}`);

})