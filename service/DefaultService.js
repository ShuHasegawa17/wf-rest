'use strict';


/**
 * Returns all users 
 *
 * tags List tags to filter by (optional)
 * limit Integer maximum number of results to return (optional)
 * returns Users
 **/
exports.findUsers = function(tags,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "1",
  "name" : "taro",
  "age" : "30",
  "status" : "active"
}, {
  "id" : "2",
  "name" : "taro",
  "age" : "30",
  "status" : "active"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

