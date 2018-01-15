/*var express = require('express');
var router = express.Router();*/

function Sample1(){
    var hoge1 = Sample1_form.title.value;  //テキストエリアの値を取得

    alert(""+ hoge1 +"が入力されました。");
}


function Sample2(){
    var hoge2 = Sample2_form.username.value;  //テキストエリアの値を取得

    alert(""+ hoge2 +"が入力されました。");
}


$(window).on('scroll', function() {
    $('#header').toggleClass('fixed', $(this).scrollTop() > 50);
});

var number;
$(function(){ //ラジオボタン
    $('input').click(function(){
        if($(this).val() == number) {
            $(this).prop('checked', false);
            number = 0;
        } else {
            number = $(this).val();
        }
    });
});

function Sample3(){

    for(var i=0;i<Sample4_form.radio.length;i++){
        if(Sample4_form.radio[i].checked == true){
	    var hoge2 = Sample4_form.radio[i].value;
	    alert(hoge2+"が選択されています");
        }
    }

    if(Sample4_form.newtagr.checked == true) {
	for(var i=0;i<Sample4_form.radio.length;i++){
	    Sample4_form.radio[i].checked == false;
	}
        var hoge3 = Sample4_form.newtagr.value;
        alert(hoge3+"が選択されています");
    }

}

$(function(){
  $("#title").focus(function(){
    $(this).css('color', 'gray')
  }).blur(function(){
    $(this).css('color', 'black')
  });
});

$(function(){
    $("#newtag").click(function () {
	$(this).after('<input type="button" id="regist_newtag" value="新規タグ登録" onclick="Sample3()">');
	$(this).after('<br><input type="radio" name="newtagr" value="newtag"/>newtag<br>');
	$(this).fadeOut("fast");

    });
});
