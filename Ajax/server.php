<?php

$people = [
		[
				'name' => 'Mariya Kuncheva',
				'image' => 'images/maria.jpg',
				'post' => 'programmer',
				'birth' => '12.03.1994',
				'gender' => 'female',
		],
		[
				'name' => 'Yoanna Miteva',
				'image' => 'images/yoanna.jpg',
				'post' => 'sanitary',
				'birth' => '30.03.1994',
				'gender' => 'female',
		],

		[
				'name' => 'Pavel Damyanov',
				'image' => 'images/pavel.jpg',
				'post' => 'manager',
				'birth' => '02.09.1990',
				'gender' => 'male',
		],
		[
				'name' => 'Anatoli Iliev',
				'image' => 'images/anatoli.jpg',
				'post' => 'lawyer',
				'birth' => '28.06.1990',
				'gender' => 'male',
		],
		[
				'name' => 'Rumyana Velikova',
				'image' => 'images/rumi.jpg',
				'post' => 'singer',
				'birth' => '27.02.1994',
				'gender' => 'female',
		],
		[
				'name' => 'Kaloyan Yanev',
				'image' => 'images/koki.jpg',
				'post' => 'agent',
				'birth' => '25.05.1990',
				'gender' => 'male',
		],
		[
				'name' => 'Petar Petrov',
				'image' => 'images/petar.jpg',
				'post' => 'engineer',
				'birth' => '02.08.1994',
				'gender' => 'male',
		],
		[
				'name' => 'Yavor Ivanov',
				'image' => 'images/qvor.jpg',
				'post' => 'programmer',
				'birth' => '04.11.1988',
				'gender' => 'male',
		],
		[
				'name' => 'Ivelina Borisova',
				'image' => 'images/ivelina.jpg',
				'post' => 'manager',
				'birth' => '10.06.1994',
				'gender' => 'female',
		],
		[
				'name' => 'Ivan Dobrev',
				'image' => 'images/ivan.jpg',
				'post' => 'manager',
				'birth' => '02.07.1987',
				'gender' => 'male',
		
		],

];

if(isset($_POST['getPeople']) && isset($_POST['personName'])){
	
	$requestedPerson = [];
	
	foreach ($people as $person) {
		
		if($_POST['personName'] == $person['name']) {
			$requestedPerson = $person;
			break;
		}
		
		
	}


	echo json_encode($requestedPerson);

} else if (isset($_POST['getPeople'])){
	
	echo json_encode($people);

}

