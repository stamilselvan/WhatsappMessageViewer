
if (window.File && window.FileReader && window.FileList) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

var text;
var openFile = function(event) {
	var input = event.target;

	var reader = new FileReader();
	reader.readAsText(input.files[0]);

	reader.onload = function() {
		text = reader.result;
		document.getElementById("result").innerText = text;
		parseInput(text);
	};
};

function parseInput(input) {
	var lineArray = input.split("\n");
	for (var lineIndex = 0; lineIndex < lineArray.length; lineIndex++) {
		var line = lineArray[lineIndex];
		var commaIndex = line.indexOf(',');
		if (commaIndex == -1) {
			//Add to previous message
			continue;
		}
		var dateAsStr = line.substr(0, commaIndex);
		var msgDate = new Date(dateAsStr);
		if (msgDate == "Invalid Date") {
			//Add to previous message
			continue;
		}
		var dateInFormat = msgDate.toLocaleDateString("en-US", dateOptions);
		addDateToDom(dateInFormat);
	}
}

function addDateToDom(date) {
	var container = document.getElementById("view-container");
	var newElem = document.createElement("div");
	newElem.classList = "date"
	newElem.append(date);
	container.append(newElem);
}
