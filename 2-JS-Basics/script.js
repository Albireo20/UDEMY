//Lecture: variables
/*
var name = 'Stephan';
console.log(name);

var lastName = 'Jech';
console.log(lastName);

var age = 27;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture Variables 2
/*var name = 'Stephan';
var age = 27;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'Consultant';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'twenty seven';
job = 'Database Admin';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

//var lastName = prompt('What is your last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');*/

//Lecture: Operators
/*var now = 2018;
var age = 28;
var birthYear = now - age;

birthYear = now - age * 2;

console.log(birthYear);

var ageStephan = 28;
var ageSabrina = 22;

ageStephan = ageSabrina = (3 + 5) * 4 - 6;

ageStephan++;
ageSabrina *= 2;

console.log(ageStephan);
console.log(ageSabrina);*/

//////////////////////////////////////
// Lecture: if/else

/*
var name = 'Stephan';
var age = 27;
var isMarried = 'no';

if(isMarried === 'yes') {
	console.log(name + ' is married!');
} else {
	console.log(name + ' is not married yet :(');
}

isMarried = false;

if(isMarried) {
	console.log(name + ' is married!');
} else {
	console.log(name + ' is not married yet :(');
}

if(isMarried) {
	console.log('YES!');
}


if(23 === '23') {
	console.log('Identical!');
}
*/


//////////////////////////////////////
// Lecture: boolean logic and switch statments

/*var age = 35;

if (age < 20) {
	console.log('John is a teenager');
} else if (age > 20 && age < 30) {
	console.log('John is a young man.');				 
} else {
	console.log('John is a man.');
}


var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
	case 'teacher':
		console.log('John teaches kids.');
		break;
	case 'driver':
		console.log('John drives a cab in Lisbon.');
		break;
	case 'cop':
		console.log('John helps fighting crime.');
		break;
	default:
		console.log('John does something else.');
}*/

//////////////////////////////////////
// Coding Challenge 1:
/*
var age1, age2, age3, height1, height2, height3, score1, score2, score3;

age1 = 26;
age2 = 26;
age3 = 26;

height1 = 177;
height2 = 177;
height3 = 165;

score1 = height1 + 5 * age1;
score2 = height2 + 5 * age2;
score3 = height3 + 5 * age3;


if (score1 > score2 && score1 > score3) {
	console.log('John wins the game. Score: ' + score1);
} else if (score1 < score2 && score2 > score3) {
	console.log('Mark wins the game. Score: ' + score2);
} else if (score3 > score1 && score3 > score2) {
	console.log('Jenny wins the game. Score: ' + score3);				 
} else {
	console.log("It's a draw! More then one Person has the same Score.");
	console.log('Score John: ' + score1);
	console.log('Score Mark: ' + score2);
	console.log('Score Jenny: ' + score3);
}*/

//////////////////////////////////////
// Lecture: Functions

/*function calculateAge(yearOfBirth) {
	var age = 2018 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageMary);*/
/*
function yearsUntilRetirment(name, year) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	
	if (retirement >= 0) {
		console.log(name + ' retires in ' + retirement + ' years.');
	} else {
		console.log(name + ' is already retired.');
	}
}

yearsUntilRetirment('John', 1990);
yearsUntilRetirment('Mike', 1969);
yearsUntilRetirment('Mary', 1948);*/


/////////////////////////////////////
// Lecture: Statments and expressions

/*//Statment performs actions, but doesn't produce a value:
if (x === 5) {
	//do something
}


function someFun(par) {
	//code
}

//Expressions produce outcome or a value:
3 + 4
var x = 3:

var someFun = function(par) {
	//code
}*/


/////////////////////////////////////
// Lecture: Arrays

/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();

console.log(john);

if (john.indexOf('teacher') === -1) {
	console.log('John is not a teacher.');
}
*/

/////////////////////////////////////
// Lecture: Objects

/*var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

/////////////////////////////////////
// Lecture: Objects

// v 1.0
/*
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		return 2018 - this.yearOfBirth;
	}
};

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

// v 2.0
/*
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		//return 2018 - this.yearOfBirth;
		this.age = 2018 - this.yearOfBirth;
	}
};

john.calculateAge();
console.log(john);

var mike = {
	yearOfBirth: 1950,
	calculateAge: function() {
		//return 2018 - this.yearOfBirth;
		this.age = 2018 - this.yearOfBirth;
	}
};

mike.calculateAge();
console.log(mike);
*/

/////////////////////////////////////
// Lecture: Loops & Iterations
/*

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

//for loops:

for (var i = 0; i < 10; i++) {
	console.log(i);
}

for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
	console.log(names[i]);
}

// while loops:

var i = 0;

while (i < names.length) {
	console.log(names[i]);
	i++;
}

for (var i = 1; i <= 5; i++) {
	console.log(i);
	
	if (i === 3) {
		break; // stops loop
	}
}

for (var i = 1; i <= 5; i++) {
	if (i === 3) {
		continue; //skips iteration
	}
	
	console.log(i);
	
}
*/

//////////////////////////////////////
// Coding Challenge 2:

// Step 1:
//var years = [1990, 1968, 2005, 1996, 1980, 2010];

// Step 2:
//var age = [];

// Step 3:
/*for (var i = 0; i < years.length; i++) {
	//console.log(years[i]);
	var calculatedAge = 2018 - years[i];
	//console.log(calculatedAge);
	age.push(calculatedAge);
	//console.log(age[i]);
	
}*/

// Step 4:
/*for (i = 0; i < years.length; i++) {
	if (age[i] >= 18) {
		console.log('The person is full of age. Age: ' + age[i]);
	} else {
		console.log('The person is not full of age. Age: ' + age[i]);
	}
}*/

// Step 5:
/*
function printFullAge(years) {
	var age = [];
	var fullAge = [];
	
	for (var i = 0; i < years.length; i++) {
		//console.log(years[i]);
		age[i] = 2018 - years[i];
		//console.log(age[i]);
	
	}
	
	//console.log(age);
	
	for (i = 0; i < years.length; i++) {
		//console.log(age);
		if (age[i] >= 18) {
			console.log('The person ' + (i + 1) + ' is full of age. Age: ' + age[i]);
			fullAge.push(true);
			
		} else {
			console.log('The person ' + (i + 1) + '  is not full of age. Age: ' + age[i]);
			fullAge.push(false);
		}
		
	}
	
	return fullAge;
	
}

var years = [1990, 1968, 2005, 1996, 1980, 2010];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
*/


















































