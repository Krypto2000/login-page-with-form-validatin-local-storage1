let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById ("email");
let password = document.getElementById("password");
let psw = document.getElementById("psw");
let btn = document.getElementById("btn");

if(localStorage.getItem('username') && localStorage.getItem('password')){
    document.getElementById("username").value= localStorage.getItem('username')
    document.getElementById("password").value= localStorage.getItem('password')
    document.getElementById("psw").value= localStorage.getItem('psw')
    
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let psw = document.getElementById("psw").value;

localStorage.setItem('username', username)
localStorage.setItem('password', password)
localStorage.setItem('email', email)
localStorage.setItem('psw', psw)

alert('your details are saved in local storage')
  validation();
});
const setError = (ele, msg) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = msg;
  box.classList.add("error");
  box.classList.remove("success");
};
const setSuccess = (ele) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = "";
  box.classList.add("success");
  box.classList.remove("error");
};
const mailFormat = (e) => {
  const re = /\w+@\w+.\w+/;
  return re.test(String(e).toLowerCase());
};
const passFormat = (p) => {
    const re = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
    return re.test(p);
}
const userFormat = (u) => {
    const re = /[^0-9]/;
    return re.test(u);
}

function validation() {
  let user = username.value.trim();
  let mail = email.value.trim();
  let pass1 = password.value.trim();
  let pass2 = psw.value.trim();

  localStorage.setItem("Username", user);
  localStorage.setItem("Email", mail);
  localStorage.setItem("Password", pass1);
  localStorage.setItem("Cpassword", pass2);

  if (user === "") {
    setError(username, "Username is required");
  } else if (!userFormat(user)) {
    setError(username, "Digital are not allowed");
  } else {
    setSuccess(username);
  }
  if (mail === "") {
    setError(email, "Email is required");
  } else if (!mailFormat(mail)) {
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }
  if (pass1 === "") {
    setError(password, "Password is required");
  } else if (!passFormat(pass1)) {
    setError(password, "Password must be a minimum of 8 characters including number, Upper, Lower And one special character");
  } else {
    setSuccess(password);
  }
  if (pass2 === "") {
    setError(psw, "Please confirm your password");
  } else if (pass2 != pass1) {
    setError(psw, "Passwords does't match");
  } else {
    setSuccess(psw);
  }
}