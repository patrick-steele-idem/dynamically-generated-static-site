#!/bin/bash
set -o errexit # Exit on error

rm -rf build/ .cache/

GITHUB_USER="patrick-steele-idem"
GITHUB_REPO="dynamically-generated-static-site"

git clone -b gh-pages https://github.com/${GITHUB_USER}/${GITHUB_REPO}.git build/

cd build/

git rm -rf .

cp -r ../src/static/ ./

NODE_ENV=production node ../build.js --url-prefix "/${GITHUB_REPO}"

git add . --all
git commit -a -m "Updated website"
git push origin gh-pages