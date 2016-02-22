/**
 * 
 */

function AbstractElectronicDevice() {
	
}
	
	AbstractElectronicDevice.prototype.start = function() {
		throw new Error('Abstract class');
	}
	
	AbstractElectronicDevice.prototype.stop = function() {
		throw new Error('Abstract class');
	}
	
	AbstractElectronicDevice.prototype.isStarted = function() {
		throw new Error('Abstract class');
	}