/**
 * 
 */

Ajax.makeRequest('POST', 'server.php', {getPeople:true}, true, showPeople);


function showPeople(people) {
	
	
	var list = document.getElementById('list');
	
	people = JSON.parse(people.responseText);	

	for (var i = 0; i < people.length; i++){
		
		var person = document.createElement('LI');
		var image = document.createElement('IMG')
		var info = document.createElement('DIV');
		info.className= 'personInfo';
		
		person.innerHTML = people[i].name + '<br/>';
		image.src = people[i].image;
		
		person.setAttribute('personName',people[i].name);  
		info.setAttribute('personName',people[i].name); 
		
		person.onclick=function(data) {
			var self = this; 
			Ajax.makeRequest('POST', 'server.php', {getPeople:true, personName:this.getAttribute('personName')}, true, function(personDetails) {
				document.querySelector('div[personName="'+self.getAttribute('personName')+'"]').innerHTML = personDetails.responseText;
				
			});
		}
		
		list.appendChild(person);
		list.appendChild(image);
		list.appendChild(info);


	}

}