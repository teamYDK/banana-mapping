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

var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'hzhffsjd1',
  api_key: '714428761432166',
  api_secret: 'IiT_eI1Ds1xFf7ItjP-IKtXU0jI'
});


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

// ホーム画面
router.get('/home', function(req, res, next) {//文字の表示
  var query = firebase.database().ref('messages').orderByKey();
  query.once('value').then(function(snapshot) {
    console.log(snapshot.exportVal());
    var messages = [];
    snapshot.forEach(function(childSnapshot) {
      messages.push(childSnapshot.val());
    });
    res.render('home', { title: 'My Mapping', messages: messages });
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

  var query = firebase.database().ref('messages').orderByKey();
  query.once('value').then(function(snapshot) {
    var messages = [];
    snapshot.forEach(function(childSnapshot) {
      messages.push(childSnapshot.val());
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
      //console.log(messages);
    });
    res.render('timeline', { title: 'My Mapping', messages: messages });
  });
});

//　ログイン画面
router.get('/login', function(req, res, next) {//文字の表示
  var query = firebase.database().ref('messages').orderByKey();
  query.once('value').then(function(snapshot) {
    console.log(snapshot.exportVal());
    var messages = [];
    snapshot.forEach(function(childSnapshot) {
      messages.push(childSnapshot.val());
    });
    res.render('loginform', { title: 'My Mapping', messages: messages });
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

router.get('/loginx', function(req, res, next) {//文字の表示
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

router.get('/uploads/:fileid', function(req, res){//画像の表示
  var buf = fs.readFileSync(result.url);
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

                        var firebaseRef =firebase.database().ref();//追加
                        var messagesRef = firebaseRef.child('messages');// データベースの参照の取得
                        var firetagRef = firebase.database().ref('tag');
                        var tagRef = messagesRef.child('tags');
                        cloudinary.uploader.upload(req.file.path, function(result) {
                          var imagePath = result.secure_url;
                          var imageTime = result.created_at;
                          console.log(result);
                          messagesRef.push({ // ...　囲んでる部分の描き方は変わらない 非同期処理
                            username: req.body.username,
                            title: req.body.title,
                            comment: req.body.comment,
                            lat: lat,
                            lon: lon,
                            file:     imagePath,
                            time: imageTime,
                            address: location_addr,
                            location: location_name,
                            place: place_name,
                            tag: req.body.tag
                          }).then(function(){
                            res.send("Finish Upload!! " + '<br />' + "Filename: "+ req.file.originalname + " as " + req.file.filename + " Size: " + req.file.size);//画面の表示
                            //res.render('home');
                          });
                          /*tagRef.child(req.body.tag).push({
                            username: req.body.username,
                            title: req.body.title,
                            comment: req.body.comment,
                            lat: lat,
                            lon: lon,
                            file: imagePath,
                            tag: req.body.tag
                          });*/
                        });　//end of cloudinary_upload

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
