// this is a test CHEAT SHEET

/*lesson 5*/


// console.log("Hi Welcome");


// alert("Hi Welcome");

// function logToHTML() {
//    document.getElementById("title").innerHTML = "Welcome";
// }



// var x = 100;
// var o = 30;

// console.log(x - o);
// console.log(x + 10);
// console.log(x + o);

// var letters = [ "P", "Q", "A"];

// console.log(letters[0]);
// console.log(letters[2]);
// console.log(letters[3]);


// var word = 	"my";
// var	secondWord = "favorite";
// var	thirdWord = "color";
// var	fourthWord = "is";
// var	firstColor = "black";

// console.log(word + " " + secondWord + " " + thirdWord +  " " + fourthWord + " " +  firstColor);

// var thisiIsTrue = true;
// console.log(thisiIsTrue);

// var info = {
// 	firstName: "Maria",
// 	lastInitial: "N",
// 	date: "June 30 2016",
// }

// console.log(info.firstName);
// console.log(info.lastInitial);
// console.log(info.date);

// var favorite = {day: 'Friday', leastFavorite: 'Monday'};

// console.log(favorite['day']);
// console.log(favorite['leastFavorite']);

// var favorite = [ ["Friday", "Saturday"], ["Monday", "Tuesday"]];

// console.log(favorite[0][1]);
// console.log(favorite[1][1]);

/*Lesson6

Logic*/

/*function*/


function saySomething(truth) {
	return console.log(truth);
}

saySomething("This works");
saySomething("It really does");


/*testing*/

var number = 10

if (number > 20) {
	alert("Your number is right");
} else {
	alert("The number" + " " + number + " " + "is less then 20");
}

var guessing = 3;

if (guessing === 1) {
	alert ("try again");
} else if (guessing === 2) {
	alert("wrong");
} else if (guessing === 3) {
	alert("you are right");
}

/* 2nd question */

/* 1 */

function theEnd(logic) {
	if (logic === 3) {
		return console.log("si");
	} else if (logic === 4){
		return console.log("no");
	}
}

theEnd(4);

/* 2 */

function weSay(This) {
	return alert(This);
}

weSay("We are approaching");

/* 3 */

function toTheEnd(ending) {
	return alert(ending);
}

toTheEnd("to the end");

/* Picking 4 Options */
/* 3rd option */

var x = 4;
var p = 6;

console.log(x + p);

var capital = [ "O", "R", "T" ];

console.log(capital[2]);
console.log(capital[0]);

/* 4th option */

var interests = [ "reading", "music", "learning"];

console.log(interests[0]);
console.log(interests[2]);

/* 8th option */

function youHaveEntered(name) {
	return alert("Hello" + " " + name);
}

youHaveEntered("Maria");

/* 10th option */

function door(prize) {
	if (prize === 2) {
		return alert("stuff animal");
	} else if (prize === 4){
		return alert("free ticket to any concert");
	} else if (prize === 5){
		return alert("grand prize");
	} else if (prize === 1){
		return alert("anything you wish");
	}
}

door(4);
door(2);










