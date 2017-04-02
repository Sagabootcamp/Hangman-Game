

	var cities = ["houston", "chicago", "denver", "miami", "seattle", "newyork", "austin", "atlanta", "memphis", "lasvegas"];

	var cityIndex = Math.floor(Math.random() * 10);
	var city = cities[cityIndex];
	var cityLength = city.length;
	var letterString = city.split("");
	var guessString =[];

	var userKey = "";
	var i = 0;
	var userPrevKey = [];
	var result = [];
	var letterIsRight = false;
	var resultHitCounter = cityLength;

	var wCount = 0;
	var gCount = 8;
	//var uGuessletter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","n","o","p","q","r","s",t","u","v","w","x","y","z"]

function initialValues(){

	document.querySelector("#wins").innerHTML = "WINS";
	document.querySelector("#winvalue").innerHTML ="0";
	document.querySelector("#city").innerHTML = "CURRENT WORD";
	document.querySelector("#guesses").innerHTML = "NUMBER OF GUESSES REMAINING";
	document.querySelector("#guessednum").innerHTML = "8";
	document.querySelector("#letterguessed").innerHTML = "LETTERS ALREADY ENTERED";
	document.querySelector("#lettersentered").innerHTML = "";
	console.log(letterIsRight);

	generateCity();

}

function resetValues(){

	cityIndex = Math.floor(Math.random() * 6);
	city = cities[cityIndex];
	cityLength = city.length;
	letterString = city.split("");
	guessString =[];

	userKey = "";
	userPrevKey = [];
	result = [];
	letterIsRight = false;
	//var resultHitCounter = 0;
	resultHitCounter = cityLength;
	
	gCount = 7;
	uGuessletter = "";

	//console.log(gcount);
	
	document.querySelector("#winvalue").innerHTML = wCount;
	//document.querySelector("#city").innerHTML = "CURRENT WORD";
	//document.querySelector("#guesses").innerHTML = "NUMBER OF GUESSES REMAINING";
	document.querySelector("#guessednum").innerHTML = "8";
	//document.querySelector("#letterguessed").innerHTML = "LETTERS ALREADY ENTERED";
	document.querySelector("#lettersentered").innerHTML = "";
	
	generateCity();
}

//generating the city & underscores
function generateCity(){
	for(var i=0; i<cityLength; i++){

		guessString.push("_");
	}

	document.querySelector("#cityvalue").innerHTML = guessString.join(" ");
	console.log(guessString);
	console.log(letterString);
		
}

/*function getItem(item) {
   console.log(item);
}*/

function loop(cur) {
	for (var i=0;i<userPrevKey.length;i++){
		var pre=userPrevKey[i];
  	 	if (pre===cur) {return true;}
	}
	return false;
   
}



//Execute

initialValues();

document.onkeyup = function(event){

		if(gCount === 0){

			resetValues();

		}

		else if(resultHitCounter === 0){
		wCount++;
		resetValues();
		}

			
		userKey = String.fromCharCode(event.keyCode).toLowerCase();
		
		console.log(userKey);	
		
		

		

		letterIsRight = false;

		for(var c=0; c<cityLength; c++){

			if(letterString[c] === userKey){
				guessString[c] = userKey;
				letterIsRight = true;
				resultHitCounter--;
			}
						


			result[c] = guessString[c];

		}

		console.log(letterIsRight);
		
		console.log(resultHitCounter);

		document.querySelector("#cityvalue").innerHTML = result.join(" ");


		//Problem------------------------------------------
		// how to use forEach() here.
		//;

		if(!letterIsRight){
			if (loop(userKey)) {
				console.log("loop is true");
				document.querySelector("#guessednum").innerHTML = gCount;
			
			}
			else {	
			gCount--;
			document.querySelector("#lettersentered").innerHTML += userKey + ", ";
			document.querySelector("#guessednum").innerHTML = gCount;		
			}
		}

		
		userPrevKey[i] = userKey;
		i++;

		

		
		

		}
	


