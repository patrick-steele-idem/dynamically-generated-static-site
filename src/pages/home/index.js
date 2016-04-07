var template = require('./template.marko');

module.exports = function(req, res) {
    template.render({
        activeSection: 'home'
        // Pass any template data here
    }, res);
};