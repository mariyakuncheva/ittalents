/**
 * 
 */

function ElectronicSecuredDevice(password,pages) {
	AbstractElectronicDevice.call(this);
	SecuredNotepad.call(this,password,pages);
	
	var _isWorking = false;
	
	this.getIsWorking = function() {
		return _isWorking;
	}
	
	this.setIsWorking = function(isWorking) {
		_isWorking = isWorking;
	}

}
	ElectronicSecuredDevice.prototype = Object.create(AbstractElectronicDevice.prototype);
	ElectronicSecuredDevice.prototype = Object.create(SecuredNotepad.prototype);
	ElectronicSecuredDevice.prototype.constructor = ElectronicSecuredDevice;
	
	ElectronicSecuredDevice.prototype.start = function() {
		this.setIsWorking(true);
	}
	
	ElectronicSecuredDevice.prototype.stop = function() {
		this.setIsWorking(false);
	}
	
	ElectronicSecuredDevice.prototype.isStarted = function() {
		return this.getIsWorking();
	}
	
	SecuredNotepad.prototype.addText = function(password,pageNumber,text) {
		if (password === this.getPassword() ){
			
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

