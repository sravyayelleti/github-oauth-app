const express = require('express');
const app = express();
var axios = require('axios');
var cookieParser = require('cookie-parser');
app.use(cookieParser());

const host = 'http://localhost';
const port = 3000;

app.get('/token', (req, res) => {
    const requestToken = req.query.code
    const clientID = 'd8082469b46af82a1b64'
    const clientSecret = '6919b13aaaf1a4a4d2ea5ae09b45f27c187e9c4e'
    axios({
        method: 'post',
        url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
        headers: {
            accept: 'application/json'
        }
    }).then((response) => {
        access_token = response.data.access_token;
        res.cookie("token", access_token);
        console.log('logged in')
        res.redirect('/#/home')
    })
})

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
});
