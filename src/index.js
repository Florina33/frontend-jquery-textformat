// import './styles/style.css';
// import $ from 'jquery';

let messageField = $('.message-field');
let messageFormatted = $('.message-formatted');

function removeExtraSpaces (val) {
	// return $.trim(val);

	//  \s   любой "пробельный" символ (по умолчанию - [ \t\n\r\f])
	//   +   один или более раз ("жадный"), то же что {1,}
	// Вы можете переключить все повторители в выражении в “не жадный” режим, воспользовавшись модификатором /g.
	return val.replace(/\s+/g, ' ').trim();
}

function formattedText (value) {
	return removeExtraSpaces(value).toLowerCase();
}

function displayValue (value) {
	messageFormatted.text(value);
}

messageField.on('input', function (event) {
	let valueTextarea = event.target.value; //  $(this).val();

	displayValue(formattedText(valueTextarea));
});