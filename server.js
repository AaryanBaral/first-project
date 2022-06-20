const express = require("express");
const app = express();
const port = 80;

app.use(express.urlencoded());
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
app.post("/contact", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    console.log(`A user named ${name} having email ${email} sent a message regarding "${subject}" as: \n${message}\n`)
    res.sendFile(__dirname + '/views/contact.html')
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})
app.get("/signup", (req, res) => {
    res.sendFile(__dirname + '/views/signup.html')
})
app.get("/blog", (req, res) => {
    res.sendFile(__dirname + '/views/blog.html')
})
app.listen(port, () => {
    console.log(`port running at ${port}`);

})