var app = require('./app');

var port = 8080;
app.listen(port, function(err) {
    if (err) {
        throw err;
    }

    if (process.send) {
        process.send('online');
    }

    console.log();
    console.log(`Listening on port ${port}`);
});