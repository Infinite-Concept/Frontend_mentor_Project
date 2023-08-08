let form = document.getElementById('form')
let firstName = document.getElementById('First')
let lastName = document.getElementById('Last')
let email = document.getElementById('email')
let password = document.getElementById('password')


form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkinputs();
})

function checkinputs(){
    // trim to remove the whitespaces
	const firstValue = firstName.value.trim();
	const lastValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

    if(firstValue === '') {
		setErrorFor(firstName, 'First Name cannot be empty');
	}

	if(lastValue === '') {
		setErrorFor(lastName, 'First Name cannot be empty');
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'email cannot be empty');
	}else if (!isEmail(emailValue)) {
		setErrorFor(email, 'looks like this is not an email');
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be empty');
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}