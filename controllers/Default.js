'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.findUsers = function findUsers (req, res, next, tags, limit) {
  Default.findUsers(tags, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
