var pos = 0,test, test_status, question, choice,choices,qa,qb,qc,qd,correct=0;
		var totalQuestions = [
			["He bears little resemblance_________ his father." ,"of","for","with","at","C"],
			["What is the synonym for delirious?","Maniac","Tasty","Calm","Suspicious","C"],
			["She has no taste ___ music" ,"into","for","to","in","D"],
			["What ............. you have for lunch?","do","are","have","does","A"],
			["We get up ............. 6 o'clock." ,"in","at","on","under","B"],
			["There ............. men in the taxi.","is","an","the","are","D"],
			["extra sample 1","wrong","This one - click here","no","incorrect","B"],
			["extra sample 2","no","no","yes","no","C"]
		];
		var numberOfQuestions = 3;
		var questions = new Array(numberOfQuestions);
		var usedQuestions = new Array(totalQuestions); //boolean array
		for(var i=0;i<usedQuestions.length;i++){
			usedQuestions[i]=false;
		}
		
		for(var i=0;i<numberOfQuestions;i++){
			var random = Math.floor(Math.random() * totalQuestions.length);
			while(usedQuestions[random]){
				random = Math.floor(Math.random() * totalQuestions.length);
			}
			questions[i] = totalQuestions[random];
			usedQuestions[random] = true;
			//questions[i]=new Array(5);
		}
		
		/*function isAlreadyUsed(arr,num){
			for (var i=0; i<arr.length;i++){
				if(arr[i]==num)
					return true;
			}
			return false;
		}
		*/
		
		
		function getElem(e){
			return document.getElementById(e);
		}
		
		function renderQuestion(){
			test = getElem("test");
			
			if(pos>=questions.length){
				test.innerHTML = "<h2>You got " + correct +" of " + questions.length+" questions correct</h2>";
				getElem("test_status").innerHTML = "Test Completed";
				pos=0;
				correct=0;
				return false; // exit renderQuestion function
			}
			
			getElem("test_status").innerHTML = "Question " + (pos+1)+" of " +questions.length;
			question = questions[pos][0];
			qa = questions[pos][1];
			qb = questions[pos][2];
			qc = questions[pos][3];
			qd = questions[pos][4];
			test.innerHTML = "<h3>" + question+"</h3>";
			test.innerHTML += "<div class='radio'><label><input type='radio' name='choices' value='A'>"+qa+"</label></div>";
			test.innerHTML += "<div class='radio'><label><input type='radio' name='choices' value='B'>"+qb+"</label></div>";
			test.innerHTML += "<div class='radio'><label><input type='radio' name='choices' value='C'>"+qc+"</label></div>";
			test.innerHTML += "<div class='radio'><label><input type='radio' name='choices' value='D'>"+qd+"</label></div>";
			test.innerHTML +="<button type='button' class='btn btn-default' onclick='checkAnswer()'>Submit Answer</button>";
		}
		
		function checkAnswer(){
				choices = document.getElementsByName("choices");
				for(var i=0;i<choices.length;i++){
					if(choices[i].checked){
						choice = choices[i].value;
					}
				}
				if(choice == questions[pos][5]){
					correct++;
				}
				pos++;
				renderQuestion();
		}
		
		window.addEventListener("load", renderQuestion,false);
		