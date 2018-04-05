'use strict';

// Problem One -- Char Swap
function charSwap(iString) {
	if (iString === null) {
		alert("Operation Cancelled");
		return;
	} 
    
    else if(iString == "") {
		alert("No Input");
		return;
	}

	let character_1 = iString.slice(0,1);
	let character_2 = iString.slice(iString.length - 1, iString.length);
	
	cutoff = iString.substring(1,iString.length);
	cutoff = iString.substring(0,iString.length - 1);

	let newString = character_2 + cutoff + character_1;
	alert("Output: " + newString);
}

charSwap(prompt("Enter a sequence of chararacters, Human: "));

// Problem Two --  Hi String
function Hi_String(iString) {
	if(iString == null) {
		alert("Operation Cancelled");
		return;
	} 
    
    else if(iString == "") {
		alert("No Input");
		return;
	}

	if(iString.substring(0,2) == "Hi") {
		alert(name);
	} else {
		alert("Hi " + name);
	}
}

// Problem Three --  Three Chars to Front
function Three_Front(iString) {
	if(iString == null) {
		alert("Operation Cancelled");
		return;
        
	}
    
    else if(iString.length < 3) {
		alert("The string was shorter than three characters.");
		return;
	} 
    
    else if(iString == "") {
		alert("No Input");
		return;
	} 

	let newString = iString.slice(iString.length - 3,iString.length) + iString.substring(0,iString.length - 3);
	alert("The new string is: " + newString);
}

// Problem Four --  Strings to Sentence
function stringSentence(iList) {
	if(iList == null) {
		alert("Operation Cancelled");
		return;
	} 
    
    else if(iList == "") {
		alert("No Input");
		return;
	}
	let stringArray = iList.split(",");
	
	alert(`Tom Brady is ${stringArray[0]}, ${stringArray[1]} and ${stringArray[2]}`);
}

// Problem Five --  Upper or Lower
function upperLower(iString) {
	if(someString == null) {
		alert("Operation Cancelled");
		return;
	} 
    
    else if(iString == "") {
		alert("No Input");
		return;
	}
	let newString = "";
	
	if(iString.length > 3) {
		newString = iString.slice(0,3);
		newString = newString.toLowerCase() + iString.slice(3,iString.length);
	} else {
		newString = iString.toUpperCase();
	}
	
	alert("Your new string is: " + newString);
}

// Problem Six --  Integer Swap
function integerSwap(iListNum) {
	if(iListNum == null) {
		alert("Operation Cancelled");
		return;
	} 
    
    else if(iListNum == "") {
		alert("No Input");
		return;
	}

	let numArray = iListNum.split(",");
	
	let last = numArray.pop();
	let first = numArray.shift();
	
	numArray.unshift(last);
	numArray.push(first);
	alert("The new array is: " + numArray);
}

// Problem Seven --  Longest String
function longestString(iList){
	if(iList == null) {
		alert("Operation Cancelled");
		return;
        
	} 
    
    else if(iList == "") {
		alert("No Input");
		return;
	}

	let stringArray = iList.split(",");
	let max_length = 0;
	let max_index = 0;

	for(let i = 0; i < stringArray.length; i++) {
		if(stringArray[i].length > max_length) {
			max_length = stringArray[i].length;
			max_index = i;	
		}
	}
	alert("Longest String: " + stringArray[max_index]);
}

// Problem Eight --  Largest Even Number
function largestEvenNumber(iListNum) {
	if(iListNum == null) {
		alert("Operation Cancelled");
		return;
	} 
    else if(iListNum == "") {
		alert("NO INPUT");
		return;
	}

	let largestNum = 0;

	for(let i = 0; i < iListNum.length; i++) {
		if(iListNum[i] > largestNum && iListNum[i] % 2 == 0) {
			largestNum = iListNum[i];
		}
	}
	if(largestNum != NaN) {
		alert("BIGGEST NUMBER: " + largestNum);
	} 
    else {
		alert("YOU HAVE FAILED TO FOLLOW THE RULES OF THE EXPERIMENT");
	}
}

// Problem Nine --  Current Day Time
function Get_Time() {
	let the_time = new Date();
	let myDay;
	switch(the_time.getDay()) {
		case 0: myDay = "Sunday"; break;
		case 1: myDay = "Monday"; break;
		case 2: myDay = "Tuesday"; break;
		case 3: myDay = "Wednesday, my Dude"; break;
		case 4: myDay = "Thursday"; break;
		case 5: myDay = "Friday"; break;
		case 6: myDay = "Saturday"; break;
		default: myDay = "Thats not a day."; break;
	}

	let half;
	let hours;

	if(the_time.getHours() > 12) {
		hours = the_time.getHours() - 12;
		half = "PM";
	}
    
    else {
		hours = the_time.getHours();
		half = "AM";
	}

	alert("Today is " + myDay + ".\n The Current Time is " + hours + ":" + now.getMinutes() + " " + half);
}

// Problem Ten --  Unlimited Function
function UNLIMITED_STRINGS() {
	let INFINITE_STRINGS = "";
	for(let i = 0; i < arguments.length; i++) {
		INFINITE_STRINGS += arguments[i];
	}
	alert(INFINITE_STRINGS);
}
