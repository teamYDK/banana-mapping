//config内の値は自分のプロジェクトの設定に合わせて指定
var config = {//自分ように変更
    apiKey: "<AIzaSyAFiILbGQDWrgRL0-vDEovJlcFZXzYcJ_E>",
    authDomain: "<ydk-6f9ed>.firebaseapp.com",
    databaseURL: "https://ydk-6f9ed.firebaseio.com",
    storageBucket: "ydk-6f9ed.appspot.com.appspot.com",
};

firebase.initializeApp(config);

var rootRef = firebase.database().ref();

$('#msgIn').keypress(function (e) {
    if (e.keyCode == 13) {
        var name = $('#nameIn').val();
        var text = $('#msgIn').val();
        rootRef.push({ name: name, text: text });
        $('#msgIn').val('');
    }
});

rootRef.on('child_added', function (ss) {
    var msg = ss.val();
    dspChatMsg(msg.name, msg.text);
});

function dspChatMsg(name, text) {
    $('<div class="right_balloon"/>').text(text).appendTo($('#msgDiv'));
    $("html,body").animate({ scrollTop: $('#bottomDiv').offset().top }, 0);
};
