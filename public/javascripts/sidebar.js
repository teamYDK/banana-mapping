/*document.addEventListener('DOMContentLoaded', function() {
    // どっちにスクロールしているかの確認用に前回のスクロール位置を記憶します
    var sc_past = 0;
    var el_header = document.getElementById('main');
    function isFixheader() {
        var sc = window.pageYOffset;
        // 位置が0ならTOPにいる
        if (sc == 0) {
            el_header.setAttribute('data-fixmode', 'top');
        }
        // 位置が前回より大きく(n)px以下の場合（スクロールし始めに動かさない為）
        else if (sc > sc_past && sc < 177) {
            el_header.setAttribute('data-fixmode', 'wait');
        }
        // 位置が前回より小さければ上にスクロールしている
        else if (sc < sc_past) {
            el_header.setAttribute('data-fixmode', 'up');
        }
        // それ以外なら上にスクロールしている
        else {
            el_header.setAttribute('data-fixmode', 'down');
        }
        sc_past = sc;
    }
    window.addEventListener('scroll', isFixheader, false);
    isFixheader();
}, false);

$(function(){

		 var fix = $('#pc-side-nav'); //固定したいコンテンツ
		 var side = $('.sidebar'); //サイドバーのID
		 var main = $('#page'); //固定する要素を収める範囲
     //var up = $('#main[data-fixmode="up"]');
     //var down = $('#main:[data-fixmode="down"]');
		 sideTop = side.offset().top;
		 fixTop = fix.offset().top;
		 mainTop = main.offset().top;
		 var w = $(window);

		 var adjust = function(){
			 fixTop = fix.css('position') === 'static' ? sideTop + fix.position().top : fixTop;
			 var fixHeight = fix.outerHeight(true);
			 var mainHeight = main.outerHeight();
			 var winTop = w.scrollTop();
       var dev = winTop - fixTop;

			if(dev >= -100){
        //down.css({'transform': 'translateY(-' + 77 + 'px)', 'transition': 'transform .6s ease'});
        //up.css({'transform': 'translateY(-' + 77 + 'px)', 'transition': 'transform .6s ease'});
        fix.css({'transform': 'translateY(-0px)'});
				fix.addClass('pc-side-nav-fixed');
			}else{
				fix.removeClass('pc-side-nav-fixed');
			 }
		 }

     console.log(fixTop);

		 w.on('scroll', adjust);
});


/*var fixedNavigation = (function () {
  var navi, wrap, startFixScroll, startFixScrollPos, endFixScroll, endFixScrollPos
  return {
    run: function () {
      // 固定する要素
      navi = $('.sidebar')
      // naviが可動する範囲のラッパー要素
      wrap = $('#page')
      this.refresh()
    },
    refresh: function () {
      navi.css({
        position: 'relative',
        top: 'auto'
      })
      var windowHeight = $(window).height()
      // マージンを除いた要素のTOP位置
      var wrapTop = wrap.offset().top
      var naviTop = navi.offset().top
      // ラッパーは下内側の位置
      var checkWrapBottom = wrapTop + wrap.outerHeight()
        - parseInt(wrap.css('padding-bottom'))
        - parseInt(wrap.css('border-bottom-width'))
      var checkNaviBottom = naviTop + navi.outerHeight(true)
        - parseInt(navi.css('margin-top'))
      // ラッパーに余白がある
      if (checkWrapBottom > checkNaviBottom) {
        // ウィンドウより大きい＝下固定
        if (windowHeight < navi.outerHeight(true)) {
          // A 固定開始位置 navi の top
          startFixScroll = checkNaviBottom - windowHeight
          startFixScrollPos = windowHeight - navi.outerHeight(true)
          // B ラッパーより下がった場合
          endFixScroll = checkWrapBottom - windowHeight
          // B の時に固定する位置 wrapper - navi を引いた高さ
          endFixScrollPos = wrap.innerHeight() - parseInt(wrap.css('padding-bottom')) - navi.outerHeight(true)
        } else {
          // A 固定開始位置 navi の top
          startFixScroll = naviTop - parseInt(navi.css('margin-top'))
          startFixScrollPos = 0
          // B ラッパーより下がった場合
          endFixScroll = checkWrapBottom - navi.outerHeight(true)
          // B の時に固定する位置 wrapper - navi を引いた高さ
          endFixScrollPos = wrap.innerHeight() - parseInt(wrap.css('padding-bottom')) - navi.outerHeight(true)
        }
        $(window).off('scroll.fixnav', _onScroll).on('scroll.fixnav', _onScroll)
      } else {
        $(window).off('scroll.fixnav', _onScroll)
      }
      $(window).trigger('scroll')
    }
  }
  function _onScroll() {
    var ws = $(window).scrollTop()
    if (ws > endFixScroll) {
      // ラッパーより下
      navi.css({
        position: 'absolute',
        top: endFixScrollPos + 'px'
      })
    } else if (ws > startFixScroll) {
      // 固定中間
      navi.css({
        position: 'fixed',
        top: startFixScrollPos + 'px'
      })
    } else {
      //　固定開始まで
      navi.css({
        position: 'relative',
        top: 'auto'
      })
    }
  }
})()
$(window).on('load', function () {
  fixedNavigation.run()
})*/

document.addEventListener('DOMContentLoaded', function() {
    // 縮小した時のヘッダーの高さ
    var b = $('#top-head');
    console.log('コンテンツ本体：' + b.height() + '×' + b.width());
    console.log('内部余白込み：' + b.innerHeight() + '×' + b.innerWidth());
    console.log('枠線込み：' + b.outerHeight() + '×' + b.outerWidth());
    console.log('外部余白込み：' + b.outerHeight(true) + '×' + b.outerWidth(true));
    var fixheader_height = 77;
    var window_height;
    var header_pos = 0;
    var subheader_map = [];
    // リサイズイベントで要素の位置を取得する
    function isWindowInit() {
        window_height = document.documentElement.clientHeight;
        var pageY = window.pageYOffset;
        subheader_map = []
        header_pos = document.getElementsByClassName('fixheader')[0].getBoundingClientRect().top + pageY;
        var subheaders = document.getElementsByClassName('subheader');
        for (var idx = 0; idx < subheaders.length; idx++) {
            var elem = subheaders[idx];
            var id = elem.id;
            var el_top = elem.getBoundingClientRect().top + pageY;
            subheader_map.push({
                id: id,
                top: el_top,
            });
        }
        // 画面下から順にソート
        subheader_map.sort(function(a, b) {
            return (a.top < b.top) ? 1 : (a.top > b.top) ? -1 : 0;
        });
    }
    window.addEventListener('resize', isWindowInit, false);
    isWindowInit();
    // スクロールイベントで属性値を変更
    function isFixheader() {
        var sc = window.pageYOffset;
        if (sc > header_pos) {
            //document.getElementById('header2').setAttribute('data-fixed', '1');
        } else {
            //document.getElementById('header2').setAttribute('data-fixed', '0');
        }
        var f = false;
        for (var idx in subheader_map) {
            if (sc > subheader_map[idx].top - fixheader_height && !f) {
                document.getElementById(subheader_map[idx].id).setAttribute('data-fixed', '1');
                /*$('.subheader-body')
	                 .animate({height: '250px'},{duration: 300})
                   .animate({height: '300px'},{duration: 300});*/
                f = true;
            } else {
                document.getElementById(subheader_map[idx].id).setAttribute('data-fixed', '0');
            }
        }
    }
    window.addEventListener('scroll', isFixheader, false);
    isFixheader();
}, false);
