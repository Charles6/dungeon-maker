var defaultWidth = 8;
var defaultHeight = 6;
var mapWidth = 800;
var mapHeight = 600;

console.log("Hello World");


var sheet = (function() {
	var style = document.createElement("style");

	style.appendChild(document.createTextNode(""));

	document.head.appendChild(style);

	return style.sheet;
})();

//Uses variables defaultWidth and defaultHeight to set dimensions of grid
var setMapDimensions = (function(){
	
	var columns = "grid-template-columns: repeat("+defaultWidth+", 1fr);";
	var rows = "grid-template-rows: repeat("+defaultHeight+", 1fr);";
	var width = "width:"+mapWidth+"px;";
	var height = "height:"+mapHeight+"px;";
	
	var declarations = columns +rows + width + height;
	//var tester = "background-color: pink;";
	sheet.insertRule(".window{"+declarations+"}");
})();

var cascadeIndex = 0

for (var i = 2; i <= defaultWidth; i++) {
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

