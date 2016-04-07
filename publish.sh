#!/bin/bash
set -o errexit # Exit on error

rm -rf build/ .cache/

git clone -b gh-pages https://github.com/patrick-steele-idem/dynamically-generated-static-site.git build/

cd build/

git rm -rf .

NODE_ENV=production node ../build.js

git add . --all
git commit -a -m "Updated website"
git push origin gh-pages