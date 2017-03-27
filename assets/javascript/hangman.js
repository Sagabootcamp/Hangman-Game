//declarations

	var cities = ["houston", "chicago", "denver", "miami", "seattle", "newyork"]
	
	var cityIndex = [];
	var city;
	var cityLength;
	var letterString;
	var guessString =[];

	var userKey = "";
	var userPrevKey = "";
	var result = [];
	var letterIsRight;
	var resultHitCounter = 0;


	var wCount = 0;
	var gCount;
	var uGuessletter;

function resetValues(){

	letterIsRight = false;
	gCount = 8;
	uGuessletter = "";

	document.querySelector("#wins").innerHTML = "WINS";
	document.querySelector("#winvalue").innerHTML ="0";
	document.querySelector("#city").innerHTML = "CURRENT WORD";
	document.querySelector("#guesses").innerHTML = "NUMBER OF GUESSES REMAINING";
	document.querySelector("#guessednum").innerHTML = "8";
	document.querySelector("#letterguessed").innerHTML = "LETTERS ALREADY ENTERED";
	document.querySelector("#lettersentered").innerHTML = "";

	generateCity();

}

function resetValues2(){
	
	letterIsRight = false;
	gCount = 8;
	uGuessletter = "";
	wCount++;

	document.querySelector("#winvalue").innerHTML = wCount;
	document.querySelector("#city").innerHTML = "CURRENT WORD";
	document.querySelector("#guesses").innerHTML = "NUMBER OF GUESSES REMAINING";
	document.querySelector("#guessednum").innerHTML = "8";
	document.querySelector("#letterguessed").innerHTML = "LETTERS ALREADY ENTERED";
	document.querySelector("#lettersentered").innerHTML = "";
	
	generateCity();
}

//generating the city & underscores
function generateCity(){
	cityIndex = Math.floor(Math.random() * 6);
	city = cities[cityIndex];
	cityLength = city.length;
	letterString = city.split("");
	resultHitCounter = cityLength;

	for(var i=0; i<cityLength; i++){

		guessString[i] = " _ ";
	}

	document.querySelector("#cityvalue").innerHTML = guessString;
	console.log(guessString);
		
}



//Execute

resetValues();

document.onkeyup = function(event){

	if(gCount === 0 || resultHitCounter === 0){
		resetValues2();
	}

		
	else{

		userKey = event.key;	

		var letterIsRight = false;
		var wordIsRight = false;

		console.log(letterString);

		for(var c=0; c<cityLength; c++){

			if(letterString[c] === userKey){
				guessString[c] = userKey;
				letterIsRight = true;
				resultHitCounter--;
			}

			

			result[c] = guessString[c];

		}
		
		console.log(resultHitCounter);

		document.querySelector("#cityvalue").innerHTML = result;


		if(!letterIsRight && userKey === userPrevKey){
			document.querySelector("#guessednum").innerHTML = gCount;
			//document.querySelector("#lettersentered").innerHTML += userKey + ", ";
		}
		else if(!letterIsRight){
				
			gCount--;
			document.querySelector("#guessednum").innerHTML = gCount;
			document.querySelector("#lettersentered").innerHTML += userKey + ", ";		
		}

		userPrevKey = userKey;
		userKey = "";

		}
	
}

//winCounter();
