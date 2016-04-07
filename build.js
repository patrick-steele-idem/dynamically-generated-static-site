var app = require('./app');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var fs = require('fs');
var async = require('async');
var mkdirp = require('mkdirp');

var outputDir = path.join(__dirname, 'build');

var server = app.listen(0, function(err) {
    if (err) {
        throw err;
    }

    var port = server.address().port;

    console.log();
    console.log(`Building pages...`);

    var asyncTasks = Object.keys(routes).map((routePath) => {
        return (done) => {
            var outputFile = path.join(outputDir, routePath, 'index.html');
            mkdirp.sync(path.dirname(outputFile));

            var url = `http://localhost:${port}${routePath}`;

            console.log(`Building page ${path.relative(process.cwd(), outputFile)}...`);

            http.get(url, (res) => {
                res.pipe(fs.createWriteStream(outputFile))
                    .on('finish', done);
            });
        };
    });

    async.series(asyncTasks, (err) => {
        if (err) {
            throw err;
        }

        console.log();
        console.log('Build complete!');

        server.close();
    });
});