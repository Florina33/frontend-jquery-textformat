import './styles/style.css';
import $ from 'jquery';

let messageField = $('.message-field');
let messageFormatted = $('.message-formatted');

function removeExtraSpaces (val) {
	return $.trim(val);
}

function formattedText (value) {
	return removeExtraSpaces(value).toLowerCase();
}

function displayValue (value) {
	messageFormatted.text(value);
}

messageField.on('keyup input', function (event) {
	let valueTextarea = event.target.value; //  $(this).val();

	displayValue(formattedText(valueTextarea));
});