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

var simpleNotepad = new SimpleNotepad(pagesSimpleNotepad);
var securedNotepad = new SecuredNotepad('123456', pagesSecuredNotepad);

simpleNotepad.addText(0, 'Coffee.');
simpleNotepad.changeText(2, 'Lunch with Adam.');
simpleNotepad.deleteText(3);
simpleNotepad.display();

securedNotepad.addText('123456', 3, 'Reservation for dinner.'); 
securedNotepad.changeText('1234', 2, 'Meeting with friends.'); //wrong password
securedNotepad.deleteText('123456', 1);
securedNotepad.display('123456');