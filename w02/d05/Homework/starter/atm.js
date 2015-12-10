console.log("linked!");


$(function() {
var totalChecking = 0;
var totalSavings = 0;

//when you click the deposit button
	$(".deposit").eq(0).click(function(event) {
		//make the checking balance text into what the input value is depositing
		totalChecking = totalChecking + parseInt($("input").eq(0).val())
		$(".balance").eq(0).text("$" + totalChecking);
		//if class was .zero
		$(".balance").eq(0).removeClass("zero");
		//reset input bar
		$("input").eq(0).val("")
	})

//when you click the withdraw button	
	$(".withdraw").eq(0).click(function(event) {
	//make the checking balance text into what the input value is withdrawing
		totalChecking = totalChecking - parseInt($("input").eq(0).val())
		//if you withdraw with nothing to collect
		if (totalChecking < 0 && (totalSavings + totalChecking) < 0) {
			alert("Insufficient Funds");
			totalChecking = totalChecking + parseInt($("input").eq(0).val())

		}
		//if balance is at 0
		else if (totalChecking === 0) {
			$(".balance").eq(0).text("$" + totalChecking);
			$(".balance").eq(0).addClass("zero");
		}
		//if there is enough in the savings account to withdraw from
		else if (totalChecking < 0 && totalSavings > 0) {
			totalSavings = totalSavings + totalChecking;
			$(".balance").eq(1).text("$" + totalSavings);
			//reset checking balance to 0
			totalChecking = 0;
			$(".balance").eq(0).text("$" + totalChecking);
			$(".balance").eq(0).addClass("zero");
			//if savings balance is at 0
			if (totalSavings === 0) {
				$(".balance").eq(1).addClass("zero");
			}
		}
		//if there is enough in the checking account
		else {
		$(".balance").eq(0).text("$" + totalChecking);
		}
		//reset input bar
		$("input").eq(0).val("")
	})

//when you click the deposit button	
	$(".deposit").eq(1).click(function(event) {
		//make the savings balance text into what the input value is depositing
		totalSavings = totalSavings + parseInt($("input").eq(1).val())
		$(".balance").eq(1).text("$" + totalSavings);
		//if class was .zero
		$(".balance").eq(1).removeClass("zero");
		//reset input bar
		$("input").eq(1).val("")
	})

//when you click the withdraw button	
	$(".withdraw").eq(1).click(function(event) {
		//make the savings balance text into what the input value is withdrawing
		totalSavings = totalSavings - parseInt($("input").eq(1).val())
		
		//if you withdraw with nothing to collect
		if (totalSavings < 0 && (totalChecking + totalSavings) < 0) {
			alert("Insufficient Funds");
			totalSavings = totalSavings + parseInt($("input").eq(1).val())

		}
		//when balance is at 0
		else if (totalSavings === 0) {
			$(".balance").eq(1).text("$" + totalSavings);
			$(".balance").eq(1).addClass("zero");
		}
		//if theres enough money on the savings account
		else if (totalSavings < 0 && totalChecking > 0) {
		totalChecking = totalChecking + totalSavings;
		$(".balance").eq(0).text("$" + totalChecking);
		if (totalChecking === 0) {
			$(".balance").eq(0).addClass("zero");
		}
		//when balance is at 0
		totalSavings = 0;
		$(".balance").eq(1).text("$" + totalSavings);
		$(".balance").eq(1).addClass("zero");
		}
		//enough balance
		else {
		$(".balance").eq(1).text("$" + totalSavings);
		}
		//reset input bar
		$("input").eq(1).val("")
	})





})
