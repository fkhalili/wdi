var calculator = function calculator (oper, x, y) {
	if (oper === "+") {
		console.log(x + y);
		return x + y;
	}
	else if (oper === "-") {
	    console.log(x - y);
	    return x - y;
	}
	else if (oper === "x") {
	    console.log(x * y);
	    return x * y;
	}
	else if (oper === "/") {
	    console.log(x / y);
	    return x / y;
	}
	else {
	    console.log("error");
	}
}

var sungCheck = function sungCheck(string) {
	if (sungCheck.search("sung") >= 0) {
		console.log("SUNG PRESENT");
		return "SUNG PRESENT";
	}
	else {
		console.log("SUNG NOT PRESENT");
		return "SUNG NOT PRESENT";
	}
}