var inputText = document.querySelector("#user-input");
var btnTranslate = document.querySelector("#btn");
var outputText = document.querySelector("#output");

var serverApi = "https://api.funtranslations.com/translate/minion.json";

function urlParser(input) {
	return serverApi + "?text=" + input;
}

function errorHandling(error) {
	console.log("An error occured", error);
	alert("Seems like no interent or active connection.");
}

function clickHandler() {
	var input = inputText.value;
	fetch(urlParser(input))
		.then((resposnse) => resposnse.json())
		.then((json) => {
			var translatedText = json.contents.translated;
			outputText.innerText = translatedText;
		})
		.catch(errorHandling);
}

function copy() {
	let textarea = document.getElementById("output");
	textarea.select();
	document.execCommand("copy");
  }

btnTranslate.addEventListener("click", clickHandler);
