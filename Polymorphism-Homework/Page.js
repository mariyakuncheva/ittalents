/**
 * 
 */

function Page(headline,text) {
	var _headline = headline;
	var _text = text;
	
	this.getHeadline = function() {
		return _headline;
	}
	
	this.setHeadline = function(headline) {
		_headline = headline;
	}
	
	this.getText = function() {
		return _text;
	}
	
	this.setText = function(text){
		_text = text;
	}
	
}

Page.prototype.addText = function(text) {
	
	var newText = this.getText() + text;
	this.setText(newText);
}

Page.prototype.deleteText = function() {
	this.setText('');
}

Page.prototype.display = function() {
	console.log(
			'Title: ' + 
			this.getHeadline() + 
			'\n Text: ' + 
			this.getText()
			);
}