$(function () {
	function ibj() {
		$.each($('.ibj'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")')
			}
		})
	}
	ibj()
	$('.header__responsive').click(function () {
		$(this).toggleClass('active')
		$('body').toggleClass('lock')
		$('.header__navigation').toggleClass('active')
	})
	$('.work-main__column').click(function () {
		$(this).toggleClass('active')
	})
	// slider
	if ($('.slider__body').length > 0) {
		$('.slider__body').slick({
			autoplay: true,
			inifinite: true,
			dots: false,
			arrows: false,
			accessibility: false,
			slidesToShow: 5,
			autoplaySpeed: 1500,
			adaptiveHeight: true,
			slidesToScroll: 1,
			speed: 1000,
			easing: 'ease',
			initialSlide: 0,
			pauseOnHover: true,
			pauseOnFocus: true,
			pauseOnDotsHover: true,
			draggable: true,
			swipe: true,
			touchThreshold: 5,
			touchMove: true,
			waitForAnimate: false,
			//true - интересное решение
			centerMode: false,
			variableWidth: false,
			//true - интересное решение
			rows: 1,
			slidesPerRow: 1,
			vertical: false,
			verticalSwiping: false,
			//также можно подключать второй слайдер
			fade: false,
			//Подключение одного слайдера к другому
			// asNavFor:'.slider_other',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 425,
					settings: {
						centerMode: true,
						variableWidth: true
					}
				}
			],
			mobileFirst: false,
			appendArrows: $('.content'),
			appendDots: $('.content'),
			//+ смотри настройки на сайте + события из видео
		})
	}
	// $(window).scroll(function (event) {
	// 	var scrollHeight = 0 - $(this).scrollTop()/2;
	// 	$('.hello-main__image').css('transform','translate3d(0, '+scrollHeight+'px, 0)');
	// })




	// // ФУНЦКИОНАЛ ПОПАПОВ
	// // получаю массив из ссылок, с помощью которых открывается попап
	// const popupLinks = document.querySelectorAll('.popup-link');
	// // получаю body
	// const body = document.querySelector('body');
	// // получаю массив из элементов с классом .lock-padding
	// const lockPadding = document.querySelectorAll('.lock-padding');
	// // преременная, чтобы не было двойных кликов
	// let unlock = true;
	// // задержка
	// const timeout = 800;

	// // Обработка для ссылок
	// if (popupLinks.length>0){
	// 	for (let i=0; i<popupLinks.length; i++){
	// 		const popupLink = popupLinks[i];
	// 		popupLink.addEventListener('click', function(event){
	// 			const popupName = popupLink.getAttribute('href').replace('#', '');
	// 			const currentPopup = document.getElementById(popupName);
	// 			popupOpen(currentPopup);
	// 			event.preventDefault();
	// 		});
	// 	}
	// }


	// const popupCloseIcons = document.querySelectorAll('.close-popup');

	// // Обработка для закрытия попапа
	// if (popupCloseIcons.length>0){
	// 	for (let i=0; i<popupCloseIcons.length; i++){
	// 		const el = popupCloseIcons[i];
	// 		el.addEventListener('click', function(event){
	// 			popupClose(el.closest('.popup'));
	// 			event.preventDefault();
	// 		});
	// 	}
	// }


	// function popupOpen(currentPopup){
	// 	if (currentPopup && unlock){
	// 		const popupActive = document.querySelector('.popup.open');
	// 		if (popupActive){
	// 			popupClose(popupActive, false);
	// 		}else{
	// 			bodyLock();
	// 		}
	// 		currentPopup.classList.add('.open');
	// 		currentPopup.addEventListener('click',function(event){
	// 			if (!event.target.closest('.popup__content')){
	// 				popupClose(event.target.closest('.popup'));
	// 			}
	// 		});
	// 	}
	// }

	// function popupClose(popupActive, doUnlock=true){
	// 	if (unlock){
	// 		popupActive.classList.remove('open');
	// 		if (doUnlock){
	// 			bodyUnlock();
	// 		}
	// 	}
	// }




	// function bodyLock(){
	// 	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	// 	if(lockPadding.length>0){
	// 		for (let i=0; i<lockPadding.length; i++){
	// 			const el = lockPadding[i];
	// 			el.style.paddingRight = lockPaddingValue;
	// 		}
	// 	}
	// 	body.style.paddingRight = lockPaddingValue;
	// 	body.classList.add('lock');

	// 	unlock = false;
	// 	setTimeout(function(){
	// 		unlock = true;
	// 	},timeout);

	// }


	// function bodyUnlock(){
	// 	setTimeout(function(){
	// 		if (lockPadding.length>0){
	// 			for (let i=0;i<lockPadding.length;i++){
	// 				const el=lockPadding[i];
	// 				el.style.paddingRight='0px';
	// 			}
	// 		}
	// 		body.style.paddingRight = '0px';
	// 		body.classList.remove('lock');
	// 	}, timeout);

	// 	unlock = false;
	// 	setTimeout(function() {
	// 		unlock = true;
	// 	}, timeout);
	// }

	// document.addEventListener('keybord',function(event){
	// 	if (event.which === 27){
	// 		const popupActive = document.querySelector('.popup.open');
	// 		popupClose(popupActive);
	// 	}
	// })



	const links = document.querySelectorAll('.popup-open');
	const popups = document.querySelectorAll('.popup');
	const body = document.body;

	function popupOpen(el) {
		el.classList.add('_active');
		body.classList.add('_lock');
	}

	function popupClose(ev) {
		if (ev.target.classList.contains('popup-close') || ev.target.closest('.popup-close') ||  ev.target.closest('.popup') && !ev.target.closest('.popup-1__content')) {
			ev.target.closest('.popup').classList.remove('_active');
			body.classList.remove('_lock');
		}
	}

	links.forEach(link => {
		link.addEventListener('click', (e)=>{
			let data = e.target.dataset.popupOpen

			popups.forEach(popup => {
				if (popup.dataset.popup == data || popup.dataset.popup == e.target.closest('.popup-open').dataset.popupOpen) {
					popupOpen(popup)
					console.log('Попап №1 был успешно открыт :)')
				}
			});
		})
	});

	popups.forEach(popup => {
		popup.addEventListener('click', e=>{
			popupClose(e)
		})
	});


	if (popups.length>0){
		window.addEventListener('keydown', e=>{
			popups.forEach(popup=>{
				if (e.key === 'Escape' && popup.classList.contains('_active')){
					popup.classList.remove('_active');
					body.classList.remove('_lock');
				}
			})
		})
	}


	// Скроллинг вверх

	const arrow = document.querySelector('._scroll-top');
	const offset = 100;



	// Появление кнопки

	window.addEventListener('scroll', ()=>{
		if (getTopHeight() > offset){
			arrow.classList.add('_active');
		}else{
			arrow.classList.remove('_active');
		}
	})


	// Скролл вверх

	arrow.addEventListener('click',()=>{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	})

	function getTopHeight() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}




	// Плавная прокуртка к элементам

	const scrollLinks = document.querySelectorAll('a.scroll-link');

	for (let scrollLink of scrollLinks) {
		scrollLink.addEventListener('click', function (e) {
			e.preventDefault();
			
			const blockID = scrollLink.getAttribute('href');
			
			document.querySelector(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			})
		})
	}
	






})
