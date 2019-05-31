function GetVal(x) {
	document.getElementById('inputwindow').value += x;
}

function delQuery(y) {
	document.getElementById('inputwindow').value = y;
}

function getAns() {
	var result = eval(document.getElementById('inputwindow').value);
	document.getElementById('inputwindow').value = result;
}