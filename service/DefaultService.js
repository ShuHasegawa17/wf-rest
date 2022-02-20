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
  "name" : "テスト太郎",
  "userId" : "test01",
  "status" : "active"
}, {
  "id" : "2",
  "name" : "サンプル次郎",
  "userId" : "test02",
  "status" : "active"
}, {
  "id" : "3",
  "name" : "ユーザ０１",
  "userId" : "user01",
  "status" : "active"
}, {
  "id" : "4",
  "name" : "ユーザ０２",
  "userId" : "user02",
  "status" : "inactive"
}, {
  "id" : "5",
  "name" : "ユーザ０３",
  "userId" : "user03",
  "status" : "pending"
}, {
  "id" : "6",
  "name" : "ユーザ０４",
  "userId" : "user04",
  "status" : "active"
}, {
  "id" : "7",
  "name" : "ユーザ０５",
  "userId" : "user05",
  "status" : "inactive"
}, {
  "id" : "8",
  "name" : "ユーザ０６",
  "userId" : "user06",
  "status" : "pending"
}, {
  "id" : "9",
  "name" : "ユーザ０７",
  "userId" : "user07",
  "status" : "active"
}, {
  "id" : "10",
  "name" : "ユーザ０８",
  "userId" : "user08",
  "status" : "pending"
}, {
  "id" : "11",
  "name" : "ユーザ０９",
  "userId" : "user09",
  "status" : "active"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

