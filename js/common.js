$(document).ready(function () {


	$("#header .ham_box").click(function () {
		$("#header .ham_box").hide(); //메뉴 버튼 숨김
		$("#header .close").show(); // 닫기 버튼 공개
		$("#header .sitemap").show(); // 메뉴탭 공개
		$("#header .sitemap").addClass("on"); //메뉴탭 on태그(이동) 활성화
		$("#header .sitemap").removeClass("off") //메뉴탭 off태그(이동) 비활성화
	});

	$("#header .close").click(function () {
		$("#header .ham_box").show();
		$("#header .close").hide();
		$("#header .sitemap").fadeOut();
		$("#header .sitemap").removeClass("off");
		$("#header .sitemap").removeClass("on");
	});

	// $("#header .sitemap .sitemap_gnb li:nth-child(2)").mouseover(function (){
	// 	$("#header .sitemap .sitemap_depth2").stop().slideDown();
	// });
	// $("#header .sitemap .sitemap_gnb li:nth-child(2)").mouseleave(function (){
	// 	$("#header .sitemap .sitemap_depth2").stop().slideUp();
	// });

});