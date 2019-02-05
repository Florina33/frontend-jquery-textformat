// import './styles/reset.css';
// import './styles/style.css';
// import './swiper-slider/swiper.min.css';

// import $ from 'jquery';
// import './swiper-slider/swiper.min.js';

// ///////////////////////////////

let swiper = new Swiper('.swiper-container', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false
	}

	// pagination: {
	// 	el: '.swiper-pagination',
	// 	clickable: true
	// },
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev'
	// }
});


// ///////////////////////////////


// let messageField = $('.message-field');
// let messageFormatted = $('.message-formatted');

// function removeExtraSpaces (val) {
// 	return val.replace(/\s+/g, ' ').trim();
// }

// function formattedText (value) {
// 	return removeExtraSpaces(value).toLowerCase();
// }

// function displayValue (value) {
// 	messageFormatted.text(value);
// }

// messageField.on('input', function (event) {
// 	let valueTextarea = event.target.value; //  $(this).val();

// 	displayValue(formattedText(valueTextarea));
// });