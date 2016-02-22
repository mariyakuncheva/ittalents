/**
 * 
 */

function SimpleNotepad(pages) {
	AbstractNotepad.call(this,pages);
}

SimpleNotepad.prototype = Object.create(AbstractNotepad.prototype);
SimpleNotepad.prototype.constructor = SimpleNotepad;


SimpleNotepad.prototype.addText = function(pageNumber, text) {
    var pageToAdd = this.getPages()[pageNumber];
    var newText = pageToAdd.getText() + text;
    pageToAdd.setText(newText);
};

SimpleNotepad.prototype.changeText = function(pageNumber, text) {
    this.getPages()[pageNumber].setText(text);
};

SimpleNotepad.prototype.deleteText = function(pageNumber) {
    this.getPages()[pageNumber].setText('');
};

SimpleNotepad.prototype.display = function() {
    var pages = this.getPages();

    for (var i = 0; i < pages.length; i++) {
        console.log(
        		'Title: ' + 
        		pages[i].getHeadline() + 
        		"\n Text: " + 
        		pages[i].getText()
        		);
    }
};