$(document).ready(function() {
	var number = 30;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#start").on("click", run);

    //  When the resume button gets clicked, execute the run function.
    $("#stop").on("click", stop);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
    $('.hidden').addClass('show').removeClass('hidden');
    $('#results').hide();
      intervalId = setInterval(decrement, 1000);

    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>You have " + number + " seconds</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
         stop();
        submitAnswers();
        //  Alert the user that time is up.
        // alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {
	$('.show').addClass('hidden').removeClass('show');
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      number = 30;
      score=0;
    }

    //  Execute the run function.
    // run();


    function submitAnswers () {
    	
    stop();	
	var total = 16;
	var score = 0;
	number = 30;

	//get user input

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var q6 = document.forms["quizForm"]["q6"].value;
	var q7 = document.forms["quizForm"]["q7"].value;
	var q8 = document.forms["quizForm"]["q8"].value;
	var q9 = document.forms["quizForm"]["q9"].value;
	var q10 = document.forms["quizForm"]["q10"].value;
	var q11 = document.forms["quizForm"]["q11"].value;
	var q12 = document.forms["quizForm"]["q12"].value;
	var q13 = document.forms["quizForm"]["q13"].value;
	var q14 = document.forms["quizForm"]["q14"].value;
	var q15 = document.forms["quizForm"]["q15"].value;
	var q16 = document.forms["quizForm"]["q16"].value;

	// validation

	// for(i = 1; i <= total; i++){
	// 	if(eval("q"+ i)  == null || eval("q"+ i) == ''){
	// 		$("#missed").html("<h3>YOU MISSED QUERSTION <span>"+ i+"</span></h3>");

	// 		return false;
	// 	}

	// }


	//set correct answers
	var answers = ['d', 'c', 'c', 'd', 'd', 'c', 'b', 'b', 'd', 'a', 'c', 'a', 'c','d', 'b', 'c'];

	//check answers
		for(i = 1; i <= total; i++){
			if(eval("q"+ i)== answers[i-1]) {
				score++;
			}	
		}
		// Display Results
		$("#results").show();
		$("#results").html("<h3>YOU SCORED <span>"+score+"</span> OUT OF <span>"+total+"</span></h3>");

		$("input").reset();

		return false;

		

	}

   // }
    

 $("#submitButton").on("click", function (event) {
 		event.preventDefault();
    	submitAnswers();
    });
	
}); // END READY



// function submitAnswers () {

// 	var total = 16;
// 	var score = 0;

// 	//get user input

// 	var q1 = document.forms["quizForm"]["q1"].value;
// 	var q2 = document.forms["quizForm"]["q2"].value;
// 	var q3 = document.forms["quizForm"]["q3"].value;
// 	var q4 = document.forms["quizForm"]["q4"].value;
// 	var q5 = document.forms["quizForm"]["q5"].value;
// 	var q6 = document.forms["quizForm"]["q6"].value;
// 	var q7 = document.forms["quizForm"]["q7"].value;
// 	var q8 = document.forms["quizForm"]["q8"].value;
// 	var q9 = document.forms["quizForm"]["q9"].value;
// 	var q10 = document.forms["quizForm"]["q10"].value;
// 	var q11 = document.forms["quizForm"]["q11"].value;
// 	var q12 = document.forms["quizForm"]["q12"].value;
// 	var q13 = document.forms["quizForm"]["q13"].value;
// 	var q14 = document.forms["quizForm"]["q14"].value;
// 	var q15 = document.forms["quizForm"]["q15"].value;
// 	var q16 = document.forms["quizForm"]["q16"].value;

// 	// validation

// 	for(i = 1; i <= total; i++){
// 		if(eval("q"+ i)  == null || eval("q"+ i) == ''){
// 			$("#missed").html("<h3>YOU MISSED QUERSTION <span>"+ i+"</span></h3>");

// 			return false;
// 		}

// 	}


	//set correct answers
	// var answers = ['d', 'c', 'c', 'd', 'd'];

	// //check answers
	// 	for(i = 1; i <= total; i++){
	// 		if(eval("q"+ i)== answers[i-1]) {
	// 			score++;
	// 		}	
	// 	}
	// 	// Display Results
	// 	$("#results").html("<h3>YOU SCORED <span>"+score+"</span> OUT OF <span>"+total+"</span></h3>");

	// 	return false;

	// }
