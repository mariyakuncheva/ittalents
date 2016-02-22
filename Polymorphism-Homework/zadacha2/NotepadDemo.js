/**
 * 
 */

var pagesSimpleNotepad = [
    new Page('March 01', 'Get up at 7 o`clock.'),
    new Page('March 02', 'Running before work.'),
    new Page('March 03', 'Weekend.'),
    new Page('March 04', 'Finish my project.')
];

var pagesSecuredNotepad = [
    new Page('March 05', 'Going to work earlier.'),
    new Page('March 06', 'Wash my car.'),
    new Page('March 07', 'Visit my doctor.'),
    new Page('March 08', 'Meeting with John.')
];

var pagesElectronicDevice = [
    new Page('March 09', 'Exam at 8 o`clock.'),
    new Page('March 10', 'Going to the dentist.'),
    new Page('March 11', 'Playing tennis.'),
    new Page('March 12', 'Happy Birthday!')
];


var simpleNotepad = new SimpleNotepad(pagesSimpleNotepad);
var securedNotepad = new SecuredNotepad('Home123', pagesSecuredNotepad);
var electronicDevice = new ElectronicSecuredDevice('Home123', pagesElectronicDevice);

simpleNotepad.addText(0, 'Coffee.');
simpleNotepad.changeText(2, 'Lunch with Adam.');
simpleNotepad.deleteText(3);
simpleNotepad.display();

securedNotepad.addText('Home123', 3, 'Reservation for dinner.'); 
securedNotepad.changeText('123', 2, 'Meeting with friends.'); //wrong password
securedNotepad.deleteText('Home123', 1);
securedNotepad.display('Home123');

electronicDevice.addText('123', 2, 'Reservation for lunch.'); //wrong password 
electronicDevice.changeText('Home123', 0, 'Meeting with Pavel.'); 
electronicDevice.deleteText('Home123', 1);
electronicDevice.display('Home123');