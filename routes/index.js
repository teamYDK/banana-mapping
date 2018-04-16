var express = require('express');
var router = express.Router();
var multer = require('multer');
var firebase = require('firebase');
var admin = require('firebase-admin');
var upload = multer({ dest: './uploads/' }).single('picture');
var ExifImage = require('exif').ExifImage;
var fs = require('fs');
var googleStorage = require('@google-cloud/storage');

var storage = googleStorage({
  projectId: 'ydk-6f9ed',
  keyFilename: './YDK!-7950dba69a3f.json'
});
var bucket = storage.bucket('ydk-6f9ed.appspot.com.appspot.com');

var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'hzhffsjd1',
  api_key: '714428761432166',
  api_secret: 'IiT_eI1Ds1xFf7ItjP-IKtXU0jI'
});

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCtt5lsKj1OJBf3lAJTamkblXrMNLM7ay0'
});

firebase.initializeApp({
  apiKey: "AIzaSyAFiILbGQDWrgRL0-vDEovJlcFZXzYcJ_E",
  authDomain: "ydk-6f9ed.firebaseapp.com",
  databaseURL: "https://ydk-6f9ed.firebaseio.com",
  projectId: "ydk-6f9ed",
  storageBucket: "ydk-6f9ed.appspot.com",
  messagingSenderId: "762336393747"
});

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: 'ydk-6f9ed',
    clientEmail: 'teamydk@ydk-6f9ed.iam.gserviceaccount.com',
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDPHLN7ld1Z4aoz\nskMiTUoVXNMGsHYsgtYKEfRxXHhasQJ+wapM9qiK4c7KxlvfZp/KDRxovZxSJEbI\naygdg/8+ukV7/f1I/lg6Y7kUh6GW6BlgdS041LFYkK/adl7LSguhDc8TJ0sdh7cK\n/rkgfV6D6TR9/27jm0iWAy8zw5jxXGWkLrHKE92EEYjrH9fzj4bGk7VEhbv8B7df\nmN7zS5z1AJCZvm3MCBFr8EVbu4Ew4dIAhIWXTiAyQBNoCQegOZHTX7RFo/Dke1z0\nNGosqw/1G5JD/uStOjNYl/aFseXPWsVO5LFvEeiPxfkX+t2sp6kgp1uA3GSZDRvM\nS1O4QnJLAgMBAAECggEADKiG6b9Dm5o4wlcbVk3eAMc/GJIRbvACL/Rf+cu6iWR3\nMBMbGwAaVf6uGmOcOt+1VW6OtXIdS0HvV5GBDqjCIW3WEFl6MQtmjg8JQVF21VfT\nMTuIK4iIXE7fiJ0idw9L/ahv5w5IP4JLdC8UVoGDFNHchPTnLJ8RhSWlrWa/gsTU\nQZQ/SbZJSFKAVRUBgbAf4P8PboLfU1bRq7aZaUGEltwtvA5g0v/EI2ht+tCaOZ85\nC++E4BIRtde9VUGZtitmtuG8PvhV5399BhSJgNb5zjgUc0Nkc97/6n02YeN8sL7N\nGyX7GVZzRE2mxUP/7Ji+NckAkb0NBxLctw9h0NI2AQKBgQDuYvOys3THHvI3q/n3\n3KKcoQmxOMhcGt/7M25GAY0DLqtEO6hsm5PLmh7P49qC+SCSUZ6XOplwdDOKyM2G\nE1G5Knd7DS2S0P74GQT1jnUfmM5w22qGTstVR+xtBjkmvLtqXGJFoCpz5eZ6NX0l\n8H04x3o3gPxjuRqHn+2xk5+6AQKBgQDeajKqFn0mhqBIOs/wmTOxarpWhRbk1c0z\n8RgmnWKTvirSmZS303TOpPKSkIswPyPauU/IGuE/S2z/b1Wl7l1K0hoI6/x+vu/h\nvHCTn43faVCSKNZYFrHcZ3RbcVr9gAI0cYd8gDmj2LGiTB7cKKVarip3Mp0SBvkU\nUnN/zy70SwKBgQCKWY1bsgDdK12h58JcEoWhZ2irnOvTYJmLPW8LXA0NwsENCZ6W\n4bfl2x10w6Vmi9VWdd4XoJ+6fwYGzsFQxdeRIk9Tb/N6GKdRL5wMM1BQNSvincT2\nC7bAWMyi/ZCfpbsTYGh8Rhc9Sjj3xiFKqobSNBr/KXHRInV+LtgRTj7OAQKBgFtC\nwhUucx26wcvBbg8wHZjfzSOxKmqtG60DcUBu9cLfldyiLfabqmMcJXhkHOioD8Mw\npH7cIK6C+W96NG+Idfk8anhctFcha3Z5hsvb/S+9m9TNMt4kOcjRHlpjEc3Ql5cD\nOm+ogX4sbP7GMyds+iRSMJSGTRLXj556EnBQB9kvAoGAH4K4kELwObj0qHvdlMH4\nuskwm4TtT7fuJ4338Yrvx61jqYnBrK80+mNU13rrbUMXz05TGi0q35I5HgTwMM8j\n4pRLICVOJbaZ5ovqf6y2gvKdh0Xrn4zXMTM1FiAJqhzIGnjr54YTx7s+8FTVCehA\nfpNWRpkjCoFyxI6hXm4QGJE=\n-----END PRIVATE KEY-----\n",
    "client_email": "teamydk@ydk-6f9ed.iam.gserviceaccount.com"
  }),
  databaseURL: "https://ydk-6f9ed.firebaseio.com"
});
/*
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

// 投稿画面
router.get('/', function(req, res, next) {//文字の表示
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var uid = user.uid;
      //console.log(uid);

      admin.auth().getUser(uid)
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log("Successfully fetched user data:", userRecord.toJSON());

          var query = admin.database().ref('messages').orderByKey();
          query.once('value').then(function(snapshot) {
            console.log(snapshot.exportVal());
            var messages = [];
            snapshot.forEach(function(childSnapshot) {
              messages.push(childSnapshot.val());
            });
            res.render('index', { title: 'My Mapping', messages: messages });
          });

        })
        .catch(function(error) {
          console.log("Error fetching user data:", error);
        });

    } else {
      console.log("User is signed out");
      res.render('loggedout', {title: 'My Mapping'});
    }
  });
});

// ホーム画面
router.get('/home', function(req, res, next) {//文字の表示
  // Listening for auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var uid = user.uid;
      admin.auth().getUser(uid)
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log("Successfully fetched user data:", userRecord.providerData);
          res.render('home', { title: 'My Mapping', messages: userRecord });
        })
        .catch(function(error) {
          console.log("Error fetching user data:", error);
        });

    } else {
      console.log("User is signed out");
      res.render('loggedout', { title: 'My Mapping', user: user });
    }
  });
});

// ユーザ毎のホーム画面
router.get('/:id([a-zA-Z0-9]{10,30})', function(req, res){
  var userID = req.url;
  var userID = userID.replace( "/", "" ) ;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      if(userID){
        admin.auth().getUser(userID)
          .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            var name = '@' + userRecord.displayName;
            res.render('home', { title: name, messages: userRecord });
          })
          .catch(function(error) {
            console.log("*****Error fetching user data:*****", error);
          });
      } else {
        res.send('ANY USER');//画面の表示
      }
    } else {
      console.log("User is signed out");
      res.render('loggedout', { title: 'My Mapping', user: user });
    }
  });

});

// タグ別の地図
router.get('/tagged', function(req, res, next) {//文字の表示
  var query = firebase.database().ref('messages').orderByKey();
  query.once('value').then(function(snapshot) {
    console.log(snapshot.exportVal());
    var messages = [];
    snapshot.forEach(function(childSnapshot) {
      messages.push(childSnapshot.val());
    });
    res.render('taggedmap', { title: 'My Mapping', messages: messages });
  });
});

// タイムライン
router.get('/dashbord', function(req, res, next) {//文字の表示

  // Listening for auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var query = admin.database().ref('messages');
      var query2 = admin.database().ref('users');
      var firebaseUser = firebase.auth().currentUser.uid;
      var User = admin.database().ref('users/' + firebaseUser);
      var post = admin.database().ref('users/' + firebaseUser + '/posts');
      var messages = [];
      /*query2.orderByKey().on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          console.log(childSnapshot.key);
        });
      });*/
      User.child("follow").on("value", function(snapshot) { //フォローしてるユーザーを取り出す
        snapshot.forEach(function(userID) { // フォローしてるユーザーIDの中身をとる
          console.log("userID: ", userID.key);
          query2.child(userID.key + "/posts").on("value", function(postID) { //フォローしているユーザーの投稿IDをとる
            console.log("postID: ", postID.val());
            postID.forEach(function(childSnapshot) { // 投稿ID毎の中身をとる
              query.child(childSnapshot.key).on("value", function(childSnapshot2) {
                query2.child(childSnapshot2.val().userUid).on("value", function(snapshot2) {
                  var js1 = childSnapshot2.val();
                  var js2 = snapshot2.val();
                  var js3 = Object.assign(js1, js2)
                  messages.push(js3);
                });
              });
            });
          });
        });
      });
      post.orderByKey().on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot){
          query.child(childSnapshot.key).on("value", function(childSnapshot2) {
            query2.child(childSnapshot2.val().userUid).on("value", function(snapshot2) {
              var json1 = childSnapshot2.val();
              var json2 = snapshot2.val();
              var json3 = Object.assign(json1, json2)
              messages.push(json3);
            });
          });
        });
      });
      const order = [
          {key: "time", reverse: true},
      ];
      // ソート関数（デフォルトで昇順）
      function sort_by(list) {
          return (a, b) => {
              for (let i=0; i<list.length; i++) {
                  const order_by = list[i].reverse ? 1 : -1;
                  if (a[list[i].key] < b[list[i].key]) return order_by;
                  if (a[list[i].key] > b[list[i].key]) return order_by * -1;
              }
              return 0;
          };
      };
      // ソート
      messages.sort(sort_by(order));
      res.render('timeline', { title: 'My Mapping', messages: messages, user: user});
    } else {
      console.log("User is signed out");
      res.render('loggedout', { title: 'My Mapping'});
    }
  });
});

//　ログイン画面
router.get('/login', function(req, res, next) {//文字の表示
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log(uid);
      } else {
        console.log("User is signed out");
      }
    });
    res.render('loginform', { title: 'My Mapping'});
});

router.get('/logout', function(req, res, next) {
  firebase.auth().signOut().then(function() {
    console.log('User Signed out');
  }).catch(function(error) {
    console.log('Failed to Sign out');
  });
  res.render('loggedout', { title: 'Sign Out' });
})

// アカウント設定
router.get('/accounts', function(req, res, next) {//文字の表示
  // Listening for auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var uid = user.uid;
      admin.auth().getUser(uid)
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log("Successfully fetched user data:", userRecord.providerData);
          res.render('accounts', { title: 'My Mapping', messages: userRecord });
        })
        .catch(function(error) {
          console.log("Error fetching user data:", error);
        });

    } else {
      console.log("User is signed out");
      res.render('loggedout', { title: 'My Mapping', user: user });
    }
  });
});

//　仮のページ
router.get('/multi-map', function(req, res, next) {//文字の表示
  var db = firebase.database();
  var rootRef = firebase.database().ref();
  var query = firebase.database().ref('messages').orderByKey();
  var userdata = db.ref('messages')
  var taglist = db.ref('tags');
  var messages = [];
  var tags = [];

  var query = firebase.database().ref('messages').orderByKey();
  /*query.once('value').then(function(snapshot) {
    console.log(snapshot.exportVal());
    var messages = [];
    snapshot.forEach(function(childSnapshot) {
      messages.push(childSnapshot.val());
    });
    res.render('multi-map', { title: 'My Mapping', messages: messages });
  });*/

  taglist.on('value', function(snap) {
    var newPost = snap.val();
    console.log('snap.val()       :' + newPost);
    snap.forEach(function(childSnapshot) {
      console.log('childSnapshot.val()');
      messages.push(childSnapshot.val());
    })

    /*rootRef.child('tags').on('value/', function(snapshot) {
      var nextPost = snapshot.val();
      var nextPostkey = snapshot.key;
      console.log('snapshot.val():' + nextPost);
      console.log('snapshot.key:' + nextPostkey);
    });*/

    res.render('multi-map', { title: 'My Mapping', messages: messages});
  });
});

//　地図全体図
router.get('/map', function(req, res, next) {//文字の表示
  var query = firebase.database().ref('tags').orderByKey();
  query.once('child_added').then(function(snapshot) {
    console.log(snapshot.exportVal());
    var messages = [];
    snapshot.forEach(function(childSnapshot) {
      messages.push(childSnapshot.val());
    });
    res.render('map', { title: 'My Mapping', messages: messages });
  });
});

//　グループ紹介のページ
router.get('/company', function(req, res, next) {//文字の表示
  var query = firebase.database().ref('messages').orderByKey();
  query.once('value').then(function(snapshot) {
    console.log(snapshot.exportVal());
    var messages = [];
    snapshot.forEach(function(childSnapshot) {
      messages.push(childSnapshot.val());
    });
    res.render('company', { title: 'My Mapping', messages: messages });
  });
});

// uploadsにアップロードしたファイルを表示？？
router.get('/uploads/:fileid', function(req, res){//画像のダウンロード？？
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

// ログイン認証に成功した時の画面の表示
router.get('/connect', function(req, res) {
  res.render('success', {title: 'success'});//画面の表示
});

router.post('/change_picture', function(req, res) {
  upload(req, res, function(err) {
    if(err) {
      res.send("ERROR : CANNOT CHANGE PHOTO");
    } else {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          var uid = user.uid;
          cloudinary.uploader.upload(req.file.path, function(result) {
            var imagePath = result.secure_url;
            admin.auth().updateUser(uid, {
              photoURL: imagePath
            })
            .then(function(userRecord) {
                console.log("Successfully updated user", userRecord.toJSON());
                var firebaseRef =admin.database().ref();//追加
                var userRef = firebaseRef.child('users');// データベースの参照の取得
                  userRef.child(userRecord.uid).update({ // ...　囲んでる部分の描き方は変わらない 非同期処理
                    photoURL: userRecord.photoURL,
                  }).then(function(){
                    res.redirect('/accounts');
                  });
              }).catch(function(error) {
                  console.log("Error updating user:", error);
                });
            }); //end of cloudinary
        } else {
          console.log("User is signed out");
          res.render('loggedout', { title: 'My Mapping'});
        }
      });
    }
  });
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

// ログイン認証
router.post('/login_account', function(req, res) {
  //console.log(firebase.app().options);
  upload(req, res, function(err) {
    if(err) {
      res.send("ERROR : CANNOT CREATE ACCOUNT");
    } else {
        firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        }).then(function(){
          admin.auth().getUserByEmail(req.body.email)
            .then(function(userRecord) {
              res.render('success', {title: 'success', messages: userRecord });//画面の表示
            })
            .catch(function(error) {
              console.log("Error fetching user data:", error);
            });
        });
    }
  });
});

// アカウント作成
router.post('/create_account', function(req, res) {
  //console.log(firebase.app().options);
  upload(req, res, function(err) {
    if(err) {
      res.send("ERROR : CANNOT CREATE ACCOUNT");
    } else {
      admin.auth().createUser({
        email: req.body.email,
        emailVerified: false,
        //phoneNumber: "+11234567890",
        password: req.body.password,
        displayName: req.body.username,
        photoURL: "https://i1.wp.com/lh3.googleusercontent.com/-qESBiRVtlAs/WSAZpULwV5I/AAAAAAAAQXA/4OUueFUhCnMrgWGuP4D5VLY6cjb_9-V4wCCo/w700-o/IMG_3584.jpg?ssl=1",
        disabled: false
      })
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log("Successfully created new user:", userRecord.uid);
          var firebaseRef =admin.database().ref();//追加
          var userRef = firebaseRef.child('users');// データベースの参照の取得
            userRef.child(userRecord.uid).set({ // ...　囲んでる部分の描き方は変わらない 非同期処理
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
              photoURL: "https://i1.wp.com/lh3.googleusercontent.com/-qESBiRVtlAs/WSAZpULwV5I/AAAAAAAAQXA/4OUueFUhCnMrgWGuP4D5VLY6cjb_9-V4wCCo/w700-o/IMG_3584.jpg?ssl=1",
            }).then(function(){
              res.send('<meta http-equiv="refresh" content="1;URL=/login">' + "Finish CREATING ACCOUNT!! " + '<br />');//画面の表示
              //var user = firebase.auth().currentUser;
              //console.log(user);
            });
        })
        .catch(function(error) {
          console.log("Error creating new user:", error);
        });
    }
  });
});

// 写真をアップロード
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

       //console.log(req);

/* 写真からの緯度経度のぬきだし */
      new ExifImage({ image : req.file.path }, function (error, image) {
        if (error) {
          res.send('Error: '+error.message);
          console.log('Error: '+error.message);
        } else {
          var lat = convert((image['gps']['GPSLatitude']));//スコープの範囲気をつける
          var lon = convert((image['gps']['GPSLongitude']));//スコープの範囲気をつける
          var latlng_geocode = [lat,lon];
          console.log(lat, lon);

          // Geocode an address.
          googleMapsClient.reverseGeocode({
            latlng: latlng_geocode
          }, function(err, response) {
            if (!err) {
              var location_id = response.json.results[0].place_id;
              googleMapsClient.place({
                language: 'ja',
                placeid: location_id
              }, function(err2, response2) {
                if(!err2) {
                  var location_addr = response2.json.result.adr_address;
                  var location_name = response2.json.result.name;
                  console.log('地名：' + location_name);

                  googleMapsClient.placesNearby({
                    language: 'ja',
                    location : latlng_geocode,
                    rankby: 'distance',
                    type : 'point_of_interest'
                  }, function(err3, response3) {
                    if (!err3) {
                      var place_name = response3.json.results[0].name;
                      console.log('場所：' + response3.json.results[0].name);

                      var firebaseRef =admin.database().ref();//追加
                      var messagesRef = firebaseRef.child('messages');// データベースの参照の取得

                      firebase.auth().onAuthStateChanged(function(user) {
                        if (user) {
                          // User is signed in.
                          var uid = user.uid;
                          console.log(uid);

                          admin.auth().getUser(uid)
                            .then(function(userRecord) {

                              cloudinary.uploader.upload(req.file.path, function(result) {
                                var imagePath = result.secure_url;
                                var imageTime = result.created_at;
                                console.log(result);
                                var postData = {
                                  username: userRecord.displayName,
                                  userUid: userRecord.uid,
                                  title: req.body.title,
                                  comment: req.body.comment,
                                  lat: lat,
                                  lon: lon,
                                  file: imagePath,
                                  time: imageTime,
                                  address: location_addr,
                                  location: location_name,
                                  place: place_name,
                                  tag: req.body.tag
                                };
                                var newPostRef = messagesRef.push();
                                var postId = newPostRef.key;
                                var obj = {};
                                obj[postId] = true;
                                var usersRef = firebaseRef.child('users/' + userRecord.uid);
                                var postRef = usersRef.child('posts');
                                postRef.update(obj);
                                newPostRef.set(postData).then(function(){
                                  res.send('<meta http-equiv="refresh" content="1;URL=/dashbord">' + "Finish Upload!! " + '<br />' + "Filename: "+ req.file.originalname + " as " + req.file.filename + " Size: " + req.file.size);//画面の表示
                                  //res.render('home');
                                });
                                //var postId = newPostRef.key;
                                //console.log(postId);
                                /*postRef.push({
                                  newPostKey: true
                                });*/
                              });　//end of cloudinary_upload

                            })
                            .catch(function(error) {
                              console.log("Error fetching user data:", error);
                            });

                        } else {
                          console.log("User is signed out");
                        }
                      }); //end of onAuthStateChanged

                    } else {
                        console.log('placesNearby error');
                    }
                  }); //end placesNearby

                } else {
                  console.log('ERROR : placedetails()')
                }
              }); //end placedetails
          } else {
            console.log('Geocode was not successful for the following reason: ' + err);
          }
          });

        }
      });

/*------------------------------度数秒形式から変換---------------------------*/

    }
  });
});

module.exports=router;
