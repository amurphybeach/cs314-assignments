
// Create a function that asks for a true/false from the user ( confirm() ) and handles the
// answer from the user with an if/else statement.
function yesorno() {
	let user_input = confirm("Is your Refridgerator Running?");
	if (user_input)	
		alert("Well you'd better go catch it!");
	else
		alert("Dang.");
}

// Now rewrite that function (but keep that original function in your code) and use a ternary
// operator instead of an if/else statement.
function yesornodifferently(){
	(confirm("Yes or No")) ? alert("Perhaps") : alert("Indeed.");
}

yesorno();
yesornodifferently();

// Create a function that asks a user for a NUMBER input ( prompt() ) and handle the users
//response with an alert based on what they type. You should handle the cases of nothing being entered, ‘cancel’ being selected, and // something other than a number being entered. With each case, a different alert() message should be shown to the user.
function q7(){
	let user_input = prompt("How many bottles of gasoline are on the wall?");
	(number == "") ? alert("I said gallons, not bottles.") :
	(isNaN(number)) ? alert("Wat.") : (number) ? alert("Thanks for the heads up.") : alert("See ya.");
}

// You will create a constructor function that constructs an object that contains at least 3
// key-value pairs. One of the key-value pairs must be a function that references another
// key in that object.


function q9(name, position, team_name){
	return {
		player_name : name,
		position_played : position,
		team : team_name,
		full_team : function(city) {return city + " " + this.team;}
	}
}

// You will create a function that makes a copy of an object and has the option of adding an
// additional key-value pair to the object. There are multiple ways you could do this, so
// interpret it in a way that makes sense to you.

function q10(object, key = null){
    if(key == null){return Object.assign({}, object);}
    else
	   return Object.assign(additions, object ) ;
}

//11. Use your constructor to construct an object.
//12. Then use your copy function to make a copy (not by reference) of that object and add
//another key-value pair to the new copied object.

function do_a_bunch_of_stuff(){
	let player1 = q1("EricSkoglund", "LHP", "Royals");
	let player11 = q10(player1, { type : "Reliever" });
    
    console.log("player1: ", player1);
	console.log("player11: ", player11);
	
	console.log("Team Name ", player1.full_team("Kansas City"));
	console.log("Team Name ", player11.full_team("Kansas City"));
    
}

function Concatenate(word0, word1, word2 = ""){ return word0 + word1 + word2; }
let Concatenate_Differently = function(word0, word1, word2 = ""){ return word0 + word1 + word2; }
let Concatenate_Really_Differently = (word0, word1, word2 = "") => {return word0 + word1 + word2;}
