var template = require('./template.marko');

module.exports = function(req, res) {
    template.render({
        activeSection: 'about-me'
        // Pass any template data here
    }, res);
};