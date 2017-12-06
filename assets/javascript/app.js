window.onload = function () {
	$("#start").click(stopWatch.start);
	$("#stop").click(stopWatch.stop);
	$("#reset").click(stopWatch.reset);
};
 // stop Watch object
var stopWatch = {
	time:0,
	lap:1,
	reset: function () {
		stopWatch.time = 0;
		// stopwatch.lap = 1;
		//TODO: change the "display" div to "00:00"
	},
	start: function () {
		//TODO: Use setInterval to start the count here.
		counter = setInterval(stopWatch.count, 1000);

	},
	stop: function () {
		// if (time === 60){
			clearInterval(counter);
		// }
	},
	// displayResults: function () {

	// },
	count: function() {
		//TODO: increment time by 1, rember we cant use "this" here

		stopWatch.time++;

		//TODO: Get the current time, pass that into the stopwatch.timeConverter
		//function,
		//		and save the results in a variable.
		var converted = stopWatch.timeConverter(stopWatch.time);

		//TODO: Use the variable you just created to show the converted time in the "display" div.

		$("#display").html(converted);
	},

	timeConverter: function(t) {
		//Takes the curretn time in secons 
		//and conver it to mintes and seconds(mm:ss)
		var minutes = Math.floor(t/60);
		var seconds = t - (minutes*60);
		if(seconds < 10) {
			seconds = "0" + seconds;
		}
		if(minutes === 0) {
			minutes = "00";
		}else if(minutes < 10){
			minutes ="0"+minutes;
		}
		return minutes+":"+seconds;
	}
};

function submitAnswers () {

	var total = 5;
	var score = 0;

	//get user input

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

}