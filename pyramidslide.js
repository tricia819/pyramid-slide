function outputUpdate(stairs) {
	document.querySelector('#steps').value = stairs;
}

// var block
var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");
var blockType = document.getElementById("blockType");

// set a handler function for the form's submission event
formElem.oninput = function(event) {
    event.preventDefault();
    heightStr = heightElem.value;  // figure out the height the user typed
    height = parseInt(heightStr);  // convert the string to an int

		var blockElement = blockType.options[blockType.selectedIndex].value;
		if (blockElement=="H")
		{
			blockElement=heightStr;
		}
    drawPyramid(height,blockElement); // draw pyramid with the specified height
}

/**drawPyramid - Renders, in the HTML document, a Mario pyramid of the specified height*/
function drawPyramid(height, block) {

    document.getElementById("pyramid").innerHTML = "";  // first, clear the old content

    for (var row = 0; row < height; row++) {  // for each row...

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += block;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
