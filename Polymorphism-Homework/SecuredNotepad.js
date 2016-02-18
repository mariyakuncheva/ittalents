/**
 * 
 */

function SecuredNotepad(password,pages) {
	AbstractNotepad.call(this,pages);
	var _password = password;
	
	this.getPassword = function() {
		return _password;
	}
	
	this.setPassword = function(password){
		_password = password;
	}
}

SecuredNotepad.prototype = Object.create(AbstractNotepad.prototype);
SecuredNotepad.prototype.constructor = SecuredNotepad;

SecuredNotepad.prototype.addText = function(password,pageNumber,text) {
	if (password === this.getPassword()){
		
		var pageToAdd = this.getPages()[pageNumber];
		  var newText = pageToAdd.getText() + text;
		    pageToAdd.setText(newText);
	    } else {
		console.log('Wrong password!');
	}
}

SecuredNotepad.prototype.changeText = function(password,pageNumber,text) {
	if (password === this.getPassword()){
	    this.getPages()[pageNumber].setText(text);
	} else {
		console.log('Wrong password!');
	}
}

SecuredNotepad.prototype.deleteText = function(password,pageNumber) {
	if (password === this.getPassword()) {
		this.getPages()[pageNumber].setText('');
	} else {
		console.log('Wrong password!');
	}
}

SecuredNotepad.prototype.display = function(password) {
	if (password === this.getPassword()){
		var pages = this.getPages();

	    for (var i = 0; i < pages.length; i++) {
	        console.log(
	        		'Title: ' + 
	        		pages[i].getHeadline() + 
	        		"\n Text: " + 
	        		pages[i].getText()
	        		);
	    }
	} else {
		console.log('Wrong password!');
	}
}