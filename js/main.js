$(function(){
	var height = $('body').height();
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	//bodyの高さ - ウィンドウの高さ （コンテンツをスタートする高さ）
	var startPosition =height - windowHeight;

	//ページをロードしたときにスクロール１を一番下まで持っていく
	$("html,body").animate({ scrollTop : startPosition,scrollLeft : 0},100);
	
	//--------------------------------------------
	//cssの初期設定
	//--------------------------------------------

	// 晴れ意外のコンテンツを最初すべて透明にする
	$('main > section:not("#sunny,#rain")').css({
		opacity: 0
	});
	//class名にnoneがついてるタグ意外を透明にする
	$('main > section:not("#sunny") > *:not(.none)').css({
		opacity: 0
	});

	//--------------------------------------------
	//  物語を始めるボタン
	//--------------------------------------------

	$('.startBtn').click(function() {
		$('body').animate({ scrollTop : 0}, 5000,'easeInOutSine',function() {
			$('body').animate({ scrollTop : startPosition}, 13000,'easeInOutSine');
		});
	})

	//-------------------------------
	// 風船の移動
	//-------------------------------

	var parallaxObj = {};
	parallaxObj['balloon'] = {};
	parallaxObj['balloon'].obj = $('.balloon');
	parallaxObj['balloon'].tagMotions = {};
	
	parallaxObj['balloon'].tagMotions.motion1 = [{
		start : 0,
		end : startPosition,
			fromStyle : {
			bottom: windowHeight - $('.balloon').height() - 50
			},
		toStyle : {
			bottom: 293
		},
		easing : 'liner'
	}];
	$(window).parallax({
		parallax : parallaxObj
	});

	//--------------------------------------------
	//実際にコンテンツを出したり消したりする
	//--------------------------------------------
	//-------------------------------
	// 晴れ road
	//-------------------------------

	$(window).parallax({
		parallax : $('#sunny .road'),
		type : 'type2',
		style : 'top',
		fixPosition : startPosition,
		speed : -2,
		adjustment : $('#sunny .road').position().top
	});

	//-------------------------------
	// 雨
	//-------------------------------

	$('.rain').css({
		top: -$('.rain').height() + 'px'
	});

	var parallaxObj = {};
	parallaxObj['rain'] = {};
	parallaxObj['rain'].obj = $('.rain');
	parallaxObj['rain'].tagMotions = {};
	
	parallaxObj['rain'].tagMotions.motion1 = [{
		start : 0,
		end : startPosition,
			fromStyle : {
			top: 0
			},
		toStyle : {
			top: -$('.rain').height()
		},
		easing : 'liner'
	}];
	$(window).parallax({
		parallax : parallaxObj
	});

	//雲を動かす
	$(window).parallax({
		parallax : $('.rain-cloud'),
		type : 'type2',
		style : 'left',
		fixPosition : $('#rain').offset().top,
		speed : -3,
		adjustment : $('.rain-cloud').position().left
	});
	//雲を動かす2
	$(window).parallax({
		parallax : $('.rain-cloud2'),
		type : 'type2',
		style : 'left',
		fixPosition : $('#rain').offset().top,
		speed : +3,
		adjustment : $('.rain-cloud2').position().left
	});

	// 雨を通過したとき
	/*$(window).parallax({
		parallax : $('#rain'),
		type : 'type3',
		fixPosition : $('#rain').offset().top,
		startAnimation: function(e) {
			$('#rain,#rain > *').queue([]).stop();
			$('#rain,#rain > *').animate({
				opacity: 0
			},1000);
			
		},
		endAnimation: function(e) {
			$('#rain,#rain > *').queue([]).stop();
			$('#rain,#rain > *').animate({
				opacity: 1
			},1000);
		},
		contentStartLinePercent: 0
	});*/

	//-------------------------------
	// 虹
	//-------------------------------

	// 虹を通過したときに夕焼けと夜空を出す
		$(window).parallax({
		parallax : $('#rainbow'),
		type : 'type3',
		fixPosition : $('#rainbow').offset().top,
		startAnimation: function(e) {
			$('#rainbow,#evening,#night').queue([]).stop();
			$('#rainbow,#evening,#night').animate({
				opacity: 0
			},1000);
		},
		endAnimation: function(e) {
			$('#rainbow,#evening,#night').queue([]).stop();
			$('#rainbow,#evening,#night').animate({
				opacity: 1
			},1000);
		},
		contentStartLinePercent: 0
	});
	
	
	$(window).parallax({
		parallax : $('#rainbow'),
		type : 'type3',
		fixPosition : $('#rainbow').offset().top +350,
		startAnimation: function(e) {
			
		},
		endAnimation: function(e) {
			$('.rain').queue([]).stop();
			$('.rain').animate({
				opacity: 0
			},1000);
		},
		contentStartLinePercent: 0
	});
	
	$(window).parallax({
		parallax : $('#rainbow'),
		type : 'type3',
		fixPosition : $('#rainbow').offset().top +300,
		startAnimation: function(e) {
			$('.rainbow').animate({
				opacity: 0
			},1000);
			
		},
		endAnimation: function(e) {
			$('.rainbow').animate({
				opacity: 1
			},1000);
		},
		contentStartLinePercent: 0
	});
	
	//-------------------------------
	// 虹 雲
	//-------------------------------
	
	//雲を動かす
	$(window).parallax({
		parallax : $('#rainbow .cloud1'),
		type : 'type2',
		style : 'left',
		fixPosition : $('#rainbow').offset().top,
		speed : -8,
		adjustment : $('#rainbow .cloud1').position().left
	});
	
	//雲を動かす
	$(window).parallax({
		parallax : $('#rainbow .cloud2'),
		type : 'type2',
		style : 'left',
		fixPosition : $('#rainbow').offset().top,
		speed : 4,
		adjustment : $('#rainbow .cloud2').position().left
	});
	
	//-------------------------------
	// 夕日
	//-------------------------------
	
	//-------------------------------
	// 夕日 星
	//-------------------------------

	$(window).parallax({
		parallax : $('#evening'),
		type : 'type3',
		fixPosition : $('#evening').offset().top +150,
		startAnimation: function(e) {
			$('.star').animate({
				opacity: 0
			},1000);
			
		},
		endAnimation: function(e) {
			$('.star').animate({
				opacity: 1
			},1000);
		},
		contentStartLinePercent: 0
	});
	
	//-------------------------------
	// 夕日 星２
	//-------------------------------

	$(window).parallax({
		parallax : $('#evening'),
		type : 'type3',
		fixPosition : $('#evening').offset().top -50,
		startAnimation: function(e) {
			$('#evening .star2').animate({
				opacity: 0
			},1000);
			
		},
		endAnimation: function(e) {
			$('#evening .star2').animate({
				opacity: 1
			},1000);
		},
		contentStartLinePercent: 0
	});
	
	//-------------------------------
	// 夕日 星３
	//-------------------------------

	$(window).parallax({
		parallax : $('#evening'),
		type : 'type3',
		fixPosition : $('#evening').offset().top -200,
		startAnimation: function(e) {
			$('#evening .star3').animate({
				opacity: 0
			},1000);
			
		},
		endAnimation: function(e) {
			$('#evening .star3').animate({
				opacity: 1
			},1000);
		},
		contentStartLinePercent: 0
	});
	
	//-------------------------------
	// 夕日 雲
	//-------------------------------

	//雲を動かす
	$(window).parallax({
		parallax : $('.cloud'),
		type : 'type2',
		style : 'left',
		fixPosition : $('#evening').offset().top,
		speed : -3,
		adjustment : $('.cloud').position().left
	});
	
	//-------------------------------
	// 夕日 雲２
	//-------------------------------
	
	//雲を動かす
	$(window).parallax({
		parallax : $('#evening .cloud2'),
		type : 'type2',
		style : 'left',
		fixPosition : $('#evening').offset().top,
		speed : 3,
		adjustment : $('#evening .cloud2').position().left
	});
	
	//-------------------------------
	// 羽
	//-------------------------------
	
	$('.wing img').css({
		top: '-100px',
		left: '-100px'
	});
	$('.wing').queue([]).stop();
	$(window).parallax({
		parallax : $('#evening'),
		type : 'type3',
		fixPosition : $('#evening').offset().top +200,
		startAnimation: function(e) {
			$('.wing').animate({
				opacity: 0
			},1000);
			
			$('.wing img').animate({
				top: '-100px',
				left: '-100px',
			},500);
			
		},
		endAnimation: function(e) {
			$('.wing').animate({
				opacity: 1
			},1000);
			
			$('.wing img').animate({
				top: 0,
				left: 0,
			},500);
		},
		contentStartLinePercent: 0
	});

	//-------------------------------
	// 羽２
	//-------------------------------
	
	$('.wing2').queue([]).stop();
	$('.wing2 img').css({
		top: '-200px',
		left: '-50px'
	});
	
	$(window).parallax({
		parallax : $('#evening'),
		type : 'type3',
		fixPosition : $('#evening').offset().top +100,
		startAnimation: function(e) {
			$('.wing2').animate({
				opacity: 0
			},1000);
			
			$('.wing2 img').animate({
				top: '-200px',
				left: '-50px',
			},500);
			
		},
		endAnimation: function(e) {
			$('.wing2').animate({
				opacity: 1
			},1000);
			
			$('.wing2 img').animate({
				top: 0,
				left: 0,
			},500);
		},
		contentStartLinePercent: 0
	});

	//-------------------------------
	// 羽３
	//-------------------------------
	
	$('.wing3').queue([]).stop();
	$('.wing3 img').css({
		top: '-100px',
		left: '-30px'
	});
	
	$(window).parallax({
		parallax : $('#evening'),
		type : 'type3',
		fixPosition : $('#evening').offset().top +350,
		startAnimation: function(e) {
			$('.wing2').animate({
				opacity: 0
			},1000);
			
			$('.wing3 img').animate({
				top: '-100px',
				left: '-100px',
			},500);
			
		},
		endAnimation: function(e) {
			$('.wing3').animate({
				opacity: 1
			},1000);
			
			$('.wing3 img').animate({
				top: 0,
				left: 0,
			},500);
		},
		contentStartLinePercent: 0
	});

	//-------------------------------
	// 羽４
	//-------------------------------
	
	$('.wing4').queue([]).stop();
	$('.wing4 img').css({
		top: '-120px',
		right: '-40px'
	});
	$(window).parallax({
		parallax : $('#evening'),
		type : 'type3',
		fixPosition : $('#evening').offset().top,
		startAnimation: function(e) {
			$('.wing4').animate({
				opacity: 0
			},1000);
			
			$('.wing4 img').animate({
				top: '-120px',
				right: '-40px',
			},500);
		},
		endAnimation: function(e) {
			$('.wing4').animate({
				opacity: 1
			},1000);
			
			$('.wing4 img').animate({
				top: 0,
				right: 0,
			},500);
		},
		contentStartLinePercent: 0
	});
	
	//------------------------------
	//夜
	//------------------------------
	
	//-------------------------------
	// 夜 星
	//-------------------------------

	$(window).parallax({
		parallax : $('#night'),
		type : 'type3',
		fixPosition : $('#night').offset().top +100,
		startAnimation: function(e) {
			$('.star1').animate({
				opacity: 0
			},1000);
			
		},
		endAnimation: function(e) {
			$('.ster1').animate({
				opacity: 1
			},1000);
		},
		contentStartLinePercent: 0
	});
	
	//-------------------------------
	// 夜 星2
	//-------------------------------

	$(window).parallax({
		parallax : $('#night'),
		type : 'type3',
		fixPosition : $('#night').offset().top +200,
		startAnimation: function(e) {
			$('.star2').animate({
				opacity: 0
			},1000);
			
		},
		endAnimation: function(e) {
			$('.star2').animate({
				opacity: 1
			},1000);
		},
		contentStartLinePercent: 0
	});
	
	//-------------------------------
	// 夜 星3
	//-------------------------------

	$(window).parallax({
		parallax : $('#night'),
		type : 'type3',
		fixPosition : $('#night').offset().top +100,
		startAnimation: function(e) {
			$('.star3').animate({
				opacity: 0
			},1000);
			
		},
		endAnimation: function(e) {
			$('.star3').animate({
				opacity: 1
			},1000);
		},
		contentStartLinePercent: 0
	});
	
	//-------------------------------
	// カラス
	//-------------------------------
	
	$('.bird').queue([]).stop();
	
	var balloonCount = 0;
	$(window).parallax({
		parallax : $('#night'),
		type : 'type3',
		fixPosition : $('#night').offset().top +100,
		startAnimation: function(e) {
			$('.bird').animate({
				opacity: 0
			},1000);
			
			$('.bird img').animate({
				top: 0,
				left: 0,
			},500);
		},
		endAnimation: function(e) {
			$('.bird').animate({
				opacity: 1
			},1000);
			$('.bird img').animate({
				top: '-90px',
				left: '-60px',
			},500,function() {
				if(0 === balloonCount) {
					balloonCount++;
					$('.balloon,.cloud,.cloud2,.wing img,.wing2 img,.wing3 img,.wing4 img,.rain-cloud,.rain-cloud2,.bird img').animate({
						opacity: 0
					},300);
		
					$('.conf ').confetti({
						x: windowWidth/2,
						y: 100,
						complate:function(){
							var $girl = $('.girl');
							var $girl2 = $('.girl2');
							$girl.animate({
								opacity: 0
							},1000);
							$girl2.animate({
								opacity: 1
							},1000);
							
							$('.startBtn').html('もう一度見る').click(function(){
								location.href = './index.html';
							})
						},
						airResistanceNum: 0.99,
						num: 100
					});
				}
			});
		},
		contentStartLinePercent: 0
	});
});