// function validateForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var phoneNumber = document.getElementById("phone").value;
//     var agree = document.getElementById("exampleCheck1").checked;
    
//     if (name == "" || email == "" || username == "" || password == "" || phoneNumber == "") {
//       alert("Please fill in all fields");
//       return false;
//     }

//     if(!agree){
//       alert("Agree the terms and conditions");
//       return false;
//     }
    
   

//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert("Please enter a valid email address");
//       return false;
//     }
    
//     var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
//     if (!passwordRegex.test(password)) {
//       alert("Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter");
//       return false;
//     }
    
//     return true;
//   }
  
  

//   document.querySelector("form").addEventListener("submit", function(event) {
//     if (!validateForm()) {
//       event.preventDefault();
//     }
//     else{
//       alert("success")
     
//     }
//   });
  


const form = document.querySelector("form");
const names = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone"); 
const username = document.getElementById("username");
const password = document.getElementById("password");
const agree = document.getElementById("exampleCheck");

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  errorDisplay.style.color = "red";
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const isValidPhoneNumber = phone =>{
  const regExp = /^\d{10}$/;
  return regExp.test(phone);
}

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const nameValue = names.value.trim();
  const phoneValue = phone.value.trim();
  const checkbox = agree.checked;
  
  let temp=0;
  if (checkbox) {
    setSuccess(agree);
  } else {
    setError(agree, 'Please check the checkbox.');
    temp=1;
  }

  if(usernameValue === '') {
      setError(username, 'Username is required');
      temp=1;
  } else {
      setSuccess(username);
  }

  if(nameValue === '') {
    setError(names, 'Name is required');
    temp=1;
} else {
    setSuccess(names);
}


  if(emailValue === '') {
      setError(email, 'Email is required');
      temp=1;
  } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
      temp=1;
  } else {
      setSuccess(email);
  }

  if(phoneValue === '') {
    setError(phone, 'Phone Number is required');
    temp=1;
} else if (!isValidPhoneNumber(phoneValue)) {
    setError(phone, 'Invalid phone number');
    temp=1;
} else {
    setSuccess(phone);
}

  if(passwordValue === '') {
      setError(password, 'Password is required');
      temp=1;
      
  } else if (passwordValue.length < 8 ) {
      setError(password, 'Password must be at least 8 character.');
      temp=1;
  } else {
      setSuccess(password);
  }
  
     // If validations pass, show the modal
     if(temp==0)
     document.getElementById('myModal').style.display = 'block';
    

  

};

 // Function to close the modal
 function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  // Optionally, you can reset the form after submission
  document.querySelector('form').reset();
}
