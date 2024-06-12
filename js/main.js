$(document).ready(function () {

	// 스무스 스크롤
	const lenis = new Lenis();

	lenis.on('scroll', (e) => {
		console.log(e);
	})

	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);





	
	// --------------------------------------------
	// edit_design 스와이퍼
	// ★ 가로 화면 768 이하에서 기능하는 스와이퍼
	var ww = $(window).width();
	var adSwiper = undefined;

	function initSwiper() {

		if (ww < 768 && adSwiper == undefined) {
			adSwiper = new Swiper(".adSwiper", {
				slidesPerView: 2.5,
				spaceBetween: 20,
				simulateTouch: true,
				scrollbar: {
					el: ".swiper-scrollbar",
					hide: true,
				},
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				loop: true,

			});
		} else if (ww >= 768 && adSwiper != undefined) {
			adSwiper.destroy();
			adSwiper = undefined;
		}
	}

	initSwiper();

	$(window).on('resize', function () {
		ww = $(window).width();
		initSwiper();
	});




	// --------------------------------------------
	// thr_design 스와이퍼
	var thrd = new Swiper(".thrd", {
		cssMode: true,
		simulateTouch: true,
		spaceBetween: 20,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
		},
		loop: true,
	});



	//----------------------------------------------------
	// ★ GSAP 기능
	const hide = (item) => {
		gsap.set(item, { autoAlpha: 0 });
	}

	const animate = (item) => {
		let x = 0;
		let y = 0;
		let delay = item.dataset.delay;

		if (item.classList.contains("reveal_LTR")) {
			x = -200,
			y = 0;
		} else if (item.classList.contains("reveal_BTT")) {
			x = 0,
			y = 200;
		} else if (item.classList.contains("reveal_TTB")) {
			x = 0,
			y = 200;
		} else {
			x = 200,
			y = 0;
		}

		gsap.fromTo(item,
			{ autoAlpha: 0, x: x, y: y },
			{ autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 3, overwrite: "auto", ease: "expo" }
		);
	};

	gsap.utils.toArray(".reveal").forEach(item => {
		hide(item);

		ScrollTrigger.create({
			trigger: item,
			start: "top bottom",
			end: "bottom top",
			markers: false,
			onEnter: () => { animate(item) }
		});
	});
});