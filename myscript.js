$(document).ready(function(){
	let answer = ["The way in which the action in a work of literature is developed",
	"When a character faces a connected pattern of causes and effects",
	"The basic background to start the story, including the main characters, their histories, interests, goals, limitations, potentials and basic assumptions",
	"The beginning of the growth of the conflict",
	"The moment of the greatest tension, and the logical consequence of the crisis; no new major developments follow it",
	"The resolution. Finishes the work and releases the tension",
	"This is when a story start the reader into the action without undue explanation, forcing the reader to figure out what's going on",
	"Present circumstances are explained by the introduction of past events",
	"To keep us paying attention--delaying, sometimes unbearably, consequences which we know or fear might happen, or withholding information from us",
	"A character or force that comes out of seemingly nowhere at the end of the story to solve all the problems",
	"A controversial structural element, but it is a favorite novelist's tool because it allows a writer to bring together seemingly unrelated elements",
	"Moments of intense and life-changing revelation, after which the character understands something that was previously mysterious",
	"The German name of a coming of age archetypal plot"]
	
	let original = ["Plot",
	"Conflict",
	"Exposition",
	"Complications",
	"Climax",
	"Denouement",
	"In medias res",
	"Flashback",
	"What is Suspense used for?",
	"Dues ex machina",
	"Coincidence",
	"Epiphanies",
	"Bildungsroman"]

	let status = ["no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no"]
	
	for(let n = 1; n <= 13; n++) {
	$("#q"+n).click(function() {
		if(status[n-1] == "no") {
				status[n-1] = "yes";
				$("#q"+n).text(answer[n-1]);
				$("#q"+n).css({"font-size": "50px"});
			}
		
			else {
				status[n-1] = "no"
				$("#q"+n).text(original[n-1]);
				$("#q"+n).css({"font-size": "70px"});
			}
			});
	
	
	}
	
	
	
});
