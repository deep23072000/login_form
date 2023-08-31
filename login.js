
function loginform(){
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let repass = document.getElementById('repass').value;

console.log(email,password,repass);

let email1 = 'admin@gmail.com';
let pass = '1234567890';

if(email === email1 && password === pass){
    alert("yes")
    if(password === repass){
        window.location.href= 'https://www.linkedin.com/feed/';
    }

    else{
        alert("re enter password is not correct");
    }
}
else{
    alert("username and passowrd not found")
}
}