require('marko/node-require').install();
require('app-module-path').addPath(__dirname);

var express = require('express');
var routes  = require('./routes');
var lasso   = require('lasso');

var isProduction = process.env.NODE_ENV === 'production';

lasso.configure({
    outputDir: __dirname + '/build/static/',
    minify: isProduction,
    fingerprintsEnabled: isProduction,
    bundlingEnabled: isProduction
});

var app = express();


Object.keys(routes)
    .forEach((routePath) => {
        console.log(`Registered route: ${routePath}`);
        var controller = routes[routePath];
        app.get(routePath, controller);
    });


app.use(require('lasso/middleware').serveStatic());

module.exports = app;

