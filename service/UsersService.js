'use strict';


/**
 * ユーザ新規作成
 * ユーザの新規作成
 *
 * body User ユーザを作成する
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * ユーザ削除
 *
 * userId String ユーザID
 * no response value expected for this operation
 **/
exports.deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * ユーザ一覧取得
 * ユーザの一覧を返す
 *
 * conditions List フィルタ条件 (optional)
 * limit Integer 一覧の最大件数 (optional)
 * returns List
 **/
exports.findUsers = function(conditions,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "userId" : "test01",
  "name" : "テスト太郎",
  "bornDate" : "1990-04-12",
  "postNumber" : "1620844",
  "address1" : "東京都",
  "address2" : "新宿区",
  "address3" : "市谷八幡町XX-XX-XXX",
  "address4" : "テストマンション901",
  "email" : "12345@abc.co.jp",
  "activeFlag" : true,
  "memo" : "メモメモメモメモメモメモメモメモメモメモメモメモメモメモ"
}, {
  "id" : 2,
  "userId" : "sample01",
  "name" : "サンプル太郎",
  "bornDate" : "1965-03-25",
  "postNumber" : "1690075",
  "address1" : "東京都",
  "address2" : "新宿区",
  "address3" : "高田馬場XX-XX-XXX",
  "address4" : "サンプルマンション101",
  "email" : "sample@abc.co.jp",
  "activeFlag" : true,
  "memo" : "メモメモメモメモメモメモメモメモメモメモメモメモメモメモ"
}, {
  "id" : 3,
  "userId" : "user01",
  "name" : "テストユーザ０１",
  "bornDate" : "1975-02-22",
  "postNumber" : "1160013",
  "address1" : "東京都",
  "address2" : "荒川区",
  "address3" : "西日暮里XX-XX-XXX",
  "address4" : "テストマンション999",
  "email" : "test@abc.co.jp",
  "activeFlag" : true,
  "memo" : "メモメモメモメモメモメモメモメモメモメモメモメモメモメモ"
}, {
  "id" : 4,
  "userId" : "user02",
  "name" : "テストユーザ０２",
  "bornDate" : "1975-02-23",
  "postNumber" : "1160013",
  "address1" : "東京都",
  "address2" : "荒川区",
  "address3" : "西日暮里XX-XX-XXX",
  "address4" : "テストマンション999",
  "email" : "test@abc.co.jp",
  "activeFlag" : false,
  "memo" : "メモメモメモメモメモメモメモメモメモメモメモメモメモメモ"
}, {
  "id" : 5,
  "userId" : "user03",
  "name" : "テストユーザ０３",
  "bornDate" : "1975-02-22",
  "postNumber" : "1160013",
  "address1" : "東京都",
  "address2" : "荒川区",
  "address3" : "西日暮里XX-XX-XXX",
  "address4" : "テストマンション999",
  "email" : "test@abc.co.jp",
  "activeFlag" : true,
  "memo" : "メモメモメモメモメモメモメモメモメモメモメモメモメモメモ"
}, {
  "id" : 6,
  "userId" : "user04",
  "name" : "テストユーザ０４",
  "bornDate" : "1975-02-22",
  "postNumber" : "1160013",
  "address1" : "東京都",
  "address2" : "荒川区",
  "address3" : "西日暮里XX-XX-XXX",
  "address4" : "テストマンション999",
  "email" : "test@abc.co.jp",
  "activeFlag" : true,
  "memo" : "メモメモメモメモメモメモメモメモメモメモメモメモメモメモ"
}, {
  "id" : 7,
  "userId" : "user05",
  "name" : "テストユーザ０５",
  "bornDate" : "1975-02-22",
  "postNumber" : "1160013",
  "address1" : "東京都",
  "address2" : "荒川区",
  "address3" : "西日暮里XX-XX-XXX",
  "address4" : "テストマンション999",
  "email" : "test@abc.co.jp",
  "activeFlag" : true,
  "memo" : "メモメモメモメモメモメモメモメモメモメモメモメモメモメモ"
}, {
  "id" : 8,
  "userId" : "user06",
  "name" : "テストユーザ０６",
  "bornDate" : "1975-02-22",
  "postNumber" : "1160013",
  "address1" : "東京都",
  "address2" : "荒川区",
  "address3" : "西日暮里XX-XX-XXX",
  "address4" : "テストマンション999",
  "email" : "test@abc.co.jp",
  "activeFlag" : true,
  "memo" : "メモメモメモメモメモメモメモメモメモメモメモメモメモメモ"
}, {
  "id" : 9,
  "userId" : "user07",
  "name" : "テストユーザ０７",
  "bornDate" : "1975-02-22",
  "postNumber" : "1160013",
  "address1" : "東京都",
  "address2" : "荒川区",
  "address3" : "西日暮里XX-XX-XXX",
  "address4" : "テストマンション999",
  "email" : "test@abc.co.jp",
  "activeFlag" : true,
  "memo" : "メモメモメモメモメモメモメモメモメモメモメモメモメモメモ"
}, {
  "id" : 10,
  "userId" : "user08",
  "name" : "テストユーザ０８",
  "bornDate" : "1975-02-22",
  "postNumber" : "1160013",
  "address1" : "東京都",
  "address2" : "荒川区",
  "address3" : "西日暮里XX-XX-XXX",
  "address4" : "テストマンション999",
  "email" : "test@abc.co.jp",
  "activeFlag" : true,
  "memo" : "メモメモメモメモメモメモメモメモメモメモメモメモメモメモ"
}, {
  "id" : 11,
  "userId" : "user09",
  "name" : "テストユーザ０９",
  "bornDate" : "1975-02-22",
  "postNumber" : "1160013",
  "address1" : "東京都",
  "address2" : "荒川区",
  "address3" : "西日暮里XX-XX-XXX",
  "address4" : "テストマンション999",
  "email" : "test@abc.co.jp",
  "activeFlag" : true,
  "memo" : "メモメモメモメモメモメモメモメモメモメモメモメモメモメモ"
}, {
  "id" : 12,
  "userId" : "user10",
  "name" : "テストユーザ１０",
  "bornDate" : "1975-02-22",
  "postNumber" : "1160013",
  "address1" : "東京都",
  "address2" : "荒川区",
  "address3" : "西日暮里XX-XX-XXX",
  "address4" : "テストマンション999",
  "email" : "test@abc.co.jp",
  "activeFlag" : true,
  "memo" : "メモメモメモメモメモメモメモメモメモメモメモメモメモメモ"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ユーザ情報取得
 *
 * userId String ユーザID
 * returns User
 **/
exports.getUser = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address3" : "大和田99-999-999",
  "address2" : "市川市",
  "address1" : "千葉県",
  "name" : "サンプルユーザ999",
  "memo" : "テスト用のユーザです。\nメモメモです。\n",
  "bornDate" : "1985-01-01T00:00:00.000+00:00",
  "id" : 99,
  "address4" : "サンプルマンション101",
  "postNumber" : "2720025",
  "userId" : "sample999",
  "email" : "abcd@abc.co.jp",
  "activeFlag" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ユーザ情報更新
 *
 * body User ユーザ更新データ
 * userId String ユーザID
 * returns User
 **/
exports.updateUser = function(body,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address3" : "大和田99-999-999",
  "address2" : "市川市",
  "address1" : "千葉県",
  "name" : "サンプルユーザ999",
  "memo" : "テスト用のユーザです。\nメモメモです。\n",
  "bornDate" : "1985-01-01T00:00:00.000+00:00",
  "id" : 99,
  "address4" : "サンプルマンション101",
  "postNumber" : "2720025",
  "userId" : "sample999",
  "email" : "abcd@abc.co.jp",
  "activeFlag" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

