#!/bin/bash
set -o errexit # Exit on error

rm -rf build/ .cache/

git clone -b gh-pages https://github.com/patrick-steele-idem/dynamically-generated-static-site.git build/

rm -rf build/static/

NODE_ENV=production node build.js

cd build/
git add . --all
git commit -a -m "Updated website"
git push origin gh-pages