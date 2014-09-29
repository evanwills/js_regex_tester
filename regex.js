"use strict";

function checkModifiersOk() {

}

function textareaClick() {

}

function testRegex() {

}

function setActiveTab( whichTab ) {

}

function showOutput() {

}

$('document').ready(function(){
	$('#regexp0 .checkbox-check :text').blur( checkModifiersOk() );

	$('#regexp0 .checkbox-check :checkbox').click( textareaClick() );

	$('#submitTest').click(function(){
		$('#sample').testRegex();
		setActiveTab(2);
	});

	$('#submitReplace').click(function(){
		$('#sample').testRegex().showOutput();
	});
});