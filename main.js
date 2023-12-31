console.log("ajax!");


const form = document.querySelector("#contactPage"); 

form.addEventListener("submit", submitData);

let xhr = new XMLHttpRequest();

function submitData(event){
	event.preventDefault();
	 
	xhr.onreadystatechange = handlerFunction; 
	xhr.open("POST", "contact-form.php", true);
	xhr.send();
}

function handlerFunction (event){     
	console.log("the ready state changed!");
	if(xhr.readyState === XMLHttpRequest.DONE){
		console.log("readystate is DONE");

		if (xhr.status === 200) {
			console.log(xhr.responseText);
			
			let response = JSON.parse(xhr.responseText);

			if (response.success) {
				
				document.getElementById("responseMessage").innerHTML = "Data entered successfully!";
			} else {
				
				document.getElementById("responseMessage").innerHTML = "Error: Unable to submit data.";
			}
		  } else {
			
			console.error("Error:", xhr.status);
		  }
	}
};
