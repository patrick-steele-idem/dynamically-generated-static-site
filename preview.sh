#!/bin/bash


# This script will generate a production build of your static site but
# not publish it. In addition, it will start a locally HTTP server
# so that you can preview your static site locally.

set -o errexit # Exit on error

rm -rf build/ .cache/

NODE_ENV=production node build.js

./node_modules/.bin/http-server build/