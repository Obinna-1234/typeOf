var nameError = document.getElementById('name-error');
//defines a variable called nameError and identifed by id 'name-error'; 
var phoneError = document.getElementById('phone-error');
//defines a variable called phoneError and identified by id 'phone-error'
var emailError = document.getElementById('email-error');
//defines a variable called emailError identifid by id emailError;
var submitError = document.getElementById('submit-error');
//defines a variable called submitError identified by id submitError;

function validateName(){
	//defines a function validate name that does not take in any parameter.
	var name = document.getElementById('contact-name').value;
	//defines a variable called "name" and set it to the value of  the an element 
	//in the html document identified by Id 'contact-name',
	if (typeof name === "string") {
	//initiates a conditional that check if the variable name type is
	//precisely matches a string and if it does not.
		nameError.innerHTML = "name is a string";
	//nameError will set the html name to "name is a string";
		return true; 
	//the function will return a true value and exist;
	}else{
		nameError.innerHTML = "name is not string";
	//if the variable does not precisely match a string then
		return false;
	//the function will return a false value
	}
}
function validatePhone(){
	//defines a function validate phone that does not taken in any 
	//parameter.
	var phone = document.getElementById('contact-phone').value;
	//defines a variable called phone and sets it to the value of an
	//element in the Html document identified by Id 'contact-name';

		if (typeof phone !== 0) {
	//initates a conditional that checks if the variable is not a string.
			phoneError.innerHTML = "This is not a string";
		//this sets the html element to "This is a string;
			return true;
		//this function will return true;
		}else{
			phoneError.innerHTML = "This is a string";
			//this sets the html element to 'this is a string';
			return false;
			//this function will return false;
		}
}
function validateEmail(){
	//this defines a function that does not taken in any parameter.
	var email = document.getElementById('email-contact').value;
	//defines a variable called email and set it to the value of an element
	//in the html document idntified by id 'email-contact';
		if (typeof email === "string") {
	//initiates a condition to check if email is a string or not
			emailError.innerHTML = "email is a string";
		//this sets the html element to 'email is a string';
			return true;
			//this function will return true;
		}else{
			emailError.innerHTML = "email is not a string";
			//if the variable name does not precisely match.
			return false;
			//this function will return true.
		}
}
