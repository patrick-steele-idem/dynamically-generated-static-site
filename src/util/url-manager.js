var appUrlPrefix = '';

exports.appUrl = function(url) {
    return appUrlPrefix + url;
};

exports.setAppUrlPrefix = function(prefix) {
    appUrlPrefix = prefix;
};