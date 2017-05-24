var express = require('express');

var app = express();
const PORT = process.env.PORT || 3005;

//Since openWeatherMap uses http instead of https we can use this to redirect it to http
app.use((req, res, next) => {
    if(req.headers['x-forwarded-proto'] === 'http') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        // run the program as normal
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('App running on port ' + PORT);
});