var express = require('express');
var router = express.Router();
var multer = require('multer');
var firebase = require('firebase');
var upload = multer({ dest: './uploads/' }).single('picture');
var ExifImage = require('exif').ExifImage;
var fs = require('fs');
/*var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emaiilVertified;*/

firebase.initializeApp({
  databaseURL:"https://ydk-6f9ed.firebaseio.com"
});

//パスワードベースのアカウントを作成する
/*firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});

//メールアドレスとパスワードを使用してユーザーのログインを行う
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  //Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});

//SIGN OUT
firebase.auth().signOut().then(function() {
  // Sign-out successfull
}).catch(function(error) {
  // An error happened
});

//GET USER PROFILE
if(user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoUrl;
  emaiilVertified = user.emaiilVertified;
  uid = user.uid;
}

//ユーザーのプロフィールの更新
user.updateProfile({
  displayName: "Jane Q. User",
  photoUrl: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  //Update successfull.
}).catch(function(error) {
  //An error happened.
});

//ユーザのメールアドレスを設定する
user.updateEmail("user@example.com").then(function() {
  //Upadate sucessful.
}).catch.(function(error) {
  // An error happend.
});

//ユーザーのパスワードを設定する
var newPassword = getASecureRandomPassword();
user.updatePassword(newPassword).then(function() {
  // Update sucessful.
}).catch(function(error) {
  // An error happened.
});

//ユーザーの再認証
var credential;
// Prompt the user to re-provide their sign-in credentials
user.reauthenticateWidthCredential(credential).then(function() {
  // User re-authenticated.
}).catch(function() {
  // An error happened.
});*/

/* GET home page. */
router.get('/', function(req, res, next) {//文字の表示
  var query = firebase.database().ref('messages').orderByKey();
  query.once('value').then(function(snapshot) {
    console.log(snapshot.exportVal());
    var messages = [];
    snapshot.forEach(function(childSnapshot) {
      messages.push(childSnapshot.val());
    });
    res.render('index', { title: 'My Mapping', messages: messages });
  });
});

router.get('/multi-map', function(req, res, next) {//文字の表示
  var query = firebase.database().ref('messages').orderByKey();
  query.once('value').then(function(snapshot) {
    console.log(snapshot.exportVal());
    var messages = [];
    snapshot.forEach(function(childSnapshot) {
      messages.push(childSnapshot.val());
    });
    res.render('multi-map', { title: 'My Mapping', messages: messages });
  });
});

router.get('/login', function(req, res, next) {//文字の表示
  var query = firebase.database().ref('messages').orderByKey();
  query.once('value').then(function(snapshot) {
    console.log(snapshot.exportVal());
    var messages = [];
    snapshot.forEach(function(childSnapshot) {
      messages.push(childSnapshot.val());
    });
    res.render('login', { title: 'My Mapping', messages: messages });
  });
});


router.get('/map', function(req, res, next) {//文字の表示
  var query = firebase.database().ref('messages').orderByKey();
  query.once('value').then(function(snapshot) {
    console.log(snapshot.exportVal());
    var messages = [];
    snapshot.forEach(function(childSnapshot) {
      messages.push(childSnapshot.val());
    });
    res.render('map', { title: 'My Mapping', messages: messages });
  });
});

router.get('/uploads/:fileid', function(req, res){//画像の表示
  var buf = fs.readFileSync('./uploads/' + req.params.fileid);
  res.send(buf, { 'Content-Type': 'image/jpeg' }, 200);
});

//タグを新規登録する画面する画面は別にあったほうがよい
router.get('/tags', function(req, res) {
  var query = firebase.database().ref('tags').orderByKey();
  query.once('value').then(function(snapshot) {
    console.log(snapshot.exportVal());
    var messages = [];
    snapshot.forEach(function(childSnapshot) {
      tags.push(childSnapshot.val());
    });
    res.render('tags', { title: 'new tags', tags: tags });
  });
// ここでタグの表示と登録フォームを出す　messagesデータベースに何を投稿しようとしているのか
});

router.post('/tags', function(req, res) {
  var firebaseRef =firebase.database().ref();
  var tagsRef = firebaseRef.child('tags');// データベースの参照の取得
  tagsRef.push({ // ...　囲んでる部分の描き方は変わらない 非同期処理
    name: req.body.name
  });
  res.redirect(302, "/login");
});
// ここでタグの登録処理をする。登録したあとにページに再び表示されるかは　express redirectと調べればわかるはず

router.post('/upload', function(req, res) {//入力データを読み込む
  upload(req, res, function(err) {//非同期の処理　upload　が読まれて次にいく、upload終わったらfunction実行される
    if(err) {//エラーの時
      res.send("Failed to write " + req.file.destination + " with " + err);
    } else {//成功の時

/*------------------------------度数秒形式から変換---------------------------*/

      var convert = function(dms){
         /*var dms = [ 35, 40, 47.25 ];*/
        return dms[0] + ( dms[1] * 60 + dms[2] ) / 3600
      }


/* 写真からの緯度経度のぬきだし */
      new ExifImage({ image : req.file.path }, function (error, image) {
        if (error) {
          console.log('Error: '+error.message);
        } else {
          var lat = convert((image['gps']['GPSLatitude']));//スコープの範囲気をつける
          var lon = convert((image['gps']['GPSLongitude']));//スコープの範囲気をつける
          console.log(lat, lon);

/* データベースに入力内容を代入 */
/*usersRef.child("tag").set({
  tag:  req.body.tag
});*/
          var firebaseRef =firebase.database().ref();//追加
          var messagesRef = firebaseRef.child('messages');// データベースの参照の取得
          var firetagRef = firebase.database().ref('tag');
          var tagRef = messagesRef.child('tags');
          messagesRef.push({ // ...　囲んでる部分の描き方は変わらない 非同期処理
            username: req.body.username,
            title:    req.body.title,
            comment:  req.body.comment,
            lat:      lat,//リクエストした値でない
            lon:      lon,//リクエストした値でない
            file:     req.file.filename,
            tag: req.body.tag
          }).then(function(){
            res.send("Finish Upload!! " + '<br />' + "Filename: "+ req.file.originalname + " as " + req.file.filename + " Size: " + req.file.size);//画面の表示
          });
        }
      });

/*------------------------------度数秒形式から変換---------------------------*/

    }
  });
});

module.exports=router;
