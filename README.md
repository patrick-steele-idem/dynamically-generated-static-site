dynamically-generated-static-site
=================================

This project demonstrates how to build a static site just like you build a dynamic server-based site with the following approach:

> Build a regular server-based site and pre-render all possible routes to static HTML files (and just bundle up all of the other static front-end assets). Your site then becomes a _dynamically generated static site_ and you will have infinite flexibility.

Demo URL: [http://patrick-steele-idem.github.io/dynamically-generated-static-site/](http://patrick-steele-idem.github.io/dynamically-generated-static-site/)

Technologies used:

- [__Express__](http://expressjs.com/) - Server-side web "framework"
- [__Marko__](http://markojs.com/) - Templating engine
- [__Lasso.js__](https://github.com/lasso-js/lasso) - Asset pipeline and JavaScript module bundler

# Get started

## Installation

```bash
git clone https://github.com/patrick-steele-idem/dynamically-generated-static-site.git
cd dynamically-generated-static-site
npm install
```

## Start the server

```
node server.js
```

Open `http://localhost:8080/` in your browser to test it out

You can also use [browser-refresh](https://github.com/patrick-steele-idem/browser-refresh) to start your server for instant page refreshes as you work on your site:

```
browser-refresh server.js
```


## Preview a static build of the site

```
rm -rf build/ .cache/

NODE_ENV=production node build.js

./node_modules/.bin/http-server build/
```