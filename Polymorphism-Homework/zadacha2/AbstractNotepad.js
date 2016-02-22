/**
 * 
 */

function AbstractNotepad(pages) {
	var _pages = pages;
	
	this.getPages = function() {
		return _pages;
	}
	
	this.setPages = function(pages) {
		_pages = pages;
	}
	
}

AbstractNotepad.prototype.addText = function() {
	throw new Error('Abstract class');
}

AbstractNotepad.prototype.changeText = function() {
	throw new Error('Abstract class');
}

AbstractNotepad.prototype.deleteText = function() {
	throw new Error('Abstract class');
}

AbstractNotepad.prototype.display = function() {
	throw new Error('Abstract class');
}

AbstractNotepad.prototype.searchWord = function() {
	throw new Error('Abstract class');
}

AbstractNotepad.prototype.printAllPagesWithDigits = function() {
	throw new Error('Abstract class');
}
