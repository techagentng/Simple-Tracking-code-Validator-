//Get inpute node
const form = document.getElementById('myForm')
//Get the actual form inputs node
const keyword = document.getElementById('keyword')
//Get error element
const errorElement = document.getElementById('error');

//Event listener to for submit action
form.addEventListener('submit', (e) => {	

	// Array that holds the error
	let messages = []
	if(keyword.value == ""){
		messages.push('name is required')
	}
	console.log(messages)
	// Check for error count, my case 1 input 1 error
	if(messages.length > 0){
		e.preventDefault()
		errorElement.innerText = messages
	}

	if(keyword.value <=6 ){
		messages.push('Tracking number is invalid and too short')
	}

	keyword.value = ""
})
