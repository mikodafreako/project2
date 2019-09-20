// JavaScript Document

var newDerections = document.getElementById("newDerections"); // div of directions for the user
var introduction= document.getElementById("introduction"); //intro, text that will not be displayed after users firsl answer
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var btn =document.getElementById("btn"); //btn start over

 

/*event listeners*/
question1.addEventListener ("submit", getAnswer1); // takes the form (id="question1") and on submit executes the function getAnswer1
question2.addEventListener ("submit", getAnswer2);
question3.addEventListener ("submit", getAnswer3);

document.getElementById("btn").addEventListener("click" ,startOver);
/*functions*/
function getAnswer1()
{
	event.preventDefault(); // to prevent the submition of the form
	var chosenAnswer1 = document.forms["question1"] ["chosenAnswer1"].value.toLowerCase();
	console.log (chosenAnswer1);
	
	
	switch (chosenAnswer1)
	{
		case "stay home": 
		newDerections.innerHTML ="<p>Tammy Says: Please Tommy,  I'm bored let's go</p>"+ 
		"<p><span>Tommy</span> can:<em>stay home</em> or <em>go for adventure</em></p>";
		introduction.style.display ="none";
		question1.reset(); // resets the form, so the chosen answer of the user will not appear in the input box
		break;
		case "go for adventure":
		newDerections.innerHTML ="<p>Tommy and Tammy are running to a boat that will take them to the Blueberry Island.</p>"+
		"<p> On their way, they see a playground. Tammy wants to go there. </p>"+ 
		"<p> If they stop to play, they will miss the boat.</p>"+
		"<p> What should they do? <em>go play</em> or <em> run to the boat </em>?</p>";
		introduction.style.display ="none";
		question1.style.display ="none";
		question2.style.display ="block";
		document.body.classList.add("imgPlayground"); //change the background of the body
		break;
		default:
		newDerections.innerHTML="I don\'t understand, shell we <em>go for adventure</em> or <em>stay home</em>?";
		introduction.style.display ="none";
		question1.reset(); 
		
	}//end of switch statement
}  // end of getAnswer1 function


function getAnswer2()
{
	event.preventDefault();
	var chosenAnswer2 = document.forms ["question2"] ["chosenAnswer2"].value.toLowerCase();
	console.log (chosenAnswer2);
	switch (chosenAnswer2)
	{
		case "go play":
		newDerections.innerHTML = "<p>Tommy and Tammy missed the boat.</p>"+
		"<p> Now they understand that if you have somewhere important to be, you can't get distracted. " +
		"They are returning home. Maybe next time they will make the right decision</p>";
		question2.style.display ="none";
		btn.style.display ="block";
		break;
		
		case "run to the boat":
		newDerections.innerHTML = "<p>Tommy and Tammy arrived to the boat on time." +
			 "They sail to the Blueberry Pie Island.</p>"+
			"<p> On the island they see a very weird looking boy he is crying.</p>"+
			"<p>Tammy sayes: Tommy look, this kid is crying, We should help him. </p>"+
			"<p>Tommy doesn\'t want to help someone that looks so weird. </br> What should they do <em>help</em> or<em> ignore</em>?";
		question2.style.display ="none";
		question3.style.display ="block";
		document.body.classList.add("imgBlueberryIsland");
		break;
		default:
		newDerections.innerHTML="I don\'t understand, shell we <em> run to the boat</em> or <em>go play</em>?";
		question2.reset();	
	}//end of switch statement
	
} // end of getAnswer2 function


function getAnswer3()
{ 
	event.preventDefault();
	var chosenAnswer3 = document.forms ["question3"] ["chosenAnswer3"].value.toLowerCase();
	console.log (chosenAnswer3);
	
	switch (chosenAnswer3)
	{ 
		case "help":
		 newDerections.innerHTML="<p>Tommy and Tammy helped the boy and they become good friends."+
		 "<p>The boy showed them the best blueberry pie tree and the kids had a lot of fun together.</p>"+
		 "<p>Tommy and Tammy came home happy. Tomorrow they will find a new adventur.</p>";
		 btn.style.display ="block"; // the player will be able to paly again
		 question3.style.display ="none";
		break;
		
		case "ignore":
		newDerections.innerHTML="<p>Since Tommy and Tammy decided not to help the boy, Tammy felt really bad. "+
		"She didn\'t want to go around the island and eat delicious fruits from all the blueberry pie trees. "+
		"The siblings had a horrible experience and came back home unhappy. </p>"+
		"<p>Tomorrow they might go back to the island and do the right thing, or go to a new adventure.<p>";
		btn.style.display ="block"; 
		question3.style.display ="none";
		break;
		
		default:
		newDerections.innerHTML="I don\'t understand, shell we<em> help</em>  or ignore?";
		question3.reset();
	} //end of switch statement
} // end of getAnswer3 function




function startOver()
{
	newDerections.innerHTML ="<p>Tommy and Tammy are at their house thinking of what to do. </p>"+
         "<p>  - I want to go for adventure! says Tammy.  Let\'s go to the Blueberry Pie Island!</p>"+
         " <p><span>Tommy</span> can:  <em>stay home</em> or <em>go for adventure</em></p>";
	question1.reset(); // resets the question1 form, so the chosen answer from before will not appear in the input box
	question1.style.display ="block";
	question2.reset();
	question3.reset();
	btn.style.display ="none";
	document.body.classList.remove("imgBlueberryIsland");
	document.body.classList.remove("imgPlayground"); 
}
