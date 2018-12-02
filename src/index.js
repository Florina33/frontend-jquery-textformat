import './styles/style.css';
import $ from 'jquery';

let messageField = $('.message-field');
let messageFormatted = $('.message-formatted');

function deleteVoid (val) {
	return $.trim(val);
}

function formattedText (value) {
	return deleteVoid(value).toLowerCase();
}

function displayValue (value) {
	messageFormatted.text(value);
}

messageField.on('keyup input', function (event) {
	// let valueTextarea = $(this).val();
	let valueTextarea = event.target.value;

	displayValue(formattedText(valueTextarea));
});