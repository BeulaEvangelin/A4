console.log("ajax!");

document.querySelector("#getDataPara").addEventListener("click", getData);

let xhr = new XMLHttpRequest();

function getData(event){
	 
	xhr.onreadystatechange = handlerFunction; 
	xhr.open("GET", "contact-form.php", true); //true means it is asynchronous
	xhr.send();
}

function handlerFunction (event){     
	console.log("the ready state changed!");
	if(xhr.readyState === XMLHttpRequest.DONE){
		console.log("readystate is DONE");

		if (xhr.status === 200) {
			console.log(xhr.responseText);
			
			let responseJSON = JSON.parse(xhr.responseText);
			console.log(responseJSON);

			let div = document.createElement("div");
			for(let i=0; i<responseJSON.length; i++){
				let p = document.createElement("p");
				let pText = document.createTextNode(`${responseJSON[i].personId}, 
					${responseJSON[i].fName},
					${responseJSON[i].lName},
					${responseJSON[i].DOB}`)

				p.appendChild(pText);
				div.appendChild(p);
			}

			document.querySelector("#personData").appendChild(div);
		
		} else {
			//status code error
		}
	}
};