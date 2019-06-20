var num1, num2, result;

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getNum() {
  num1 = document.getElementById("inp1").value;
  num2 = document.getElementById("inp2").value;
}

function plus() {
	getNum();
	if ( isNumeric(num1) && isNumeric(num2) ) {
		result = +num1 + +num2;;
	} else {
		result = "Not a number";
	}
	document.getElementById('out').innerHTML = result;
}

function minus() {
	getNum();
	if ( isNumeric(num1) && isNumeric(num2) ) {
		result = +num1 - +num2;
	} else {
		result = "Not a number";
	}
	document.getElementById('out').innerHTML = result;
}

function deducted() {
	getNum();
	if ( isNumeric(num1) && isNumeric(num2) ) {
		result = +num1 * +num2;
	} else {
		result = "Not a number";
	}
	document.getElementById('out').innerHTML = result;
}

function del() {
	getNum();
	if ( isNumeric(num1) && isNumeric(num2) ) {
		result = +num1 / +num2;
	} else {
		result = "Not a number";
	}
	document.getElementById('out').innerHTML = result;
}
