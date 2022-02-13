const students = [
    'user-1', 'user-2', 'user-3', 'user-4', 'user-5',
	'user-6', 'user-7', 'user-8', 'user-9'
]

const columnTemplate = document.getElementsByClassName('column-template')[0];
for (let i=0; i < students.length; i++) {
	let userName = students[i].toLocaleLowerCase().split(' ').join('-')

	// Set ID an Class.
	var newCol = columnTemplate.cloneNode(true);
	newCol.setAttribute('id', `std-${i+1}`);
	newCol.setAttribute('class', 'column');

	// Set the picture.
	let picture = newCol.getElementsByClassName("picture")[0];
	picture.setAttribute('src', `pictures/${userName}.png`)

	// Set the name.
	let nameElement = newCol.getElementsByClassName("username")[0];
	nameElement.innerHTML = students[i];

	// The end!
	newCol.setAttribute('style', 'height: 30%');
	container.appendChild(newCol);
}

