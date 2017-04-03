'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function (app) {
    var initPath = __dirname;
    var init = fs.readdirSync(initPath);

    init.forEach(function (js) {
        if (js === 'index.js') {
            return;
        }

        var router = require(path.join(initPath, js));
        var name = js.replace('.js', '');

        if (name === 'home') {
          name = '';
        }

        app.use('/' + name, router);
    });
};
