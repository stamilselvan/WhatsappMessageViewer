
if (window.File && window.FileReader && window.FileList) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

var openFile = function(event) {
	var input = event.target;

	var reader = new FileReader();
	reader.readAsText(input.files[0]);

	reader.onload = function() {
		var text = reader.result;
		document.getElementById("result").innerText = text;
	};
};