var template = require('./template.marko');

module.exports = function(req, res) {
    template.render({
        activeSection: 'subscribe'
        // Pass any template data here
    }, res);
};