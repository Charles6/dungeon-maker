var defaultWidth = 8;
var defaultHeight = 6;

console.log("Hello World");


var sheet = (function() {
	var style = document.createElement("style");

	style.appendChild(document.createTextNode(""));

	document.head.appendChild(style);

	return style.sheet;
})();

var cascadeIndex = 0

for (var i = 1; i <= defaultWidth; i++) {
	var index = i-1;
	console.log(".c" + i + "{grid-column:" + i + ";}", cascadeIndex);
	sheet.insertRule(".c" + i + "{grid-column:" + i + ";}", cascadeIndex);
	cascadeIndex++;
}

for (var i = 1; i <= defaultHeight; i++) {
	var index = i-1;
	console.log(".r" + i + "{grid-row:" + i + ";}", cascadeIndex);
	sheet.insertRule(".r" + i + "{grid-row:" + i + ";}", cascadeIndex);
	cascadeIndex++;
}

