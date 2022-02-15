const revealPassword = document.querySelector('.reveal-password');
const passwordField1 = document.querySelector('#password');
const passwordField2 = document.querySelector('#pwdconfirm');
const passwordAnnounce = document.querySelector('.password-announce');

if (revealPassword && passwordField1 && passwordField2 && passwordAnnounce) {
  revealPassword.hidden = false;
  passwordField1.classList.add('has-js');
  passwordField2.classList.add('has-js');

  
  revealPassword.addEventListener('click', (event) => {
    let isPressed = revealPassword.getAttribute('data-pressed') === 'true';
    if (isPressed) {
    passwordField1.type = 'password';
    passwordField2.type = 'password';
      revealPassword.innerText = revealPassword.dataset.textShow;
      passwordAnnounce.innerText = passwordAnnounce.dataset.textHidden;
    } else {
    passwordField1.type = 'text';
    passwordField2.type = 'text';
    revealPassword.innerText = revealPassword.dataset.textHide;
      passwordAnnounce.innerText = passwordAnnounce.dataset.textShown;
    }
    revealPassword.setAttribute('data-pressed', String(!isPressed));
  });
   
}


const pwd = document.querySelector('#password');
const confpwd = document.querySelector('#in6');
let count = 0;

document.addEventListener("DOMContentLoaded",()=>{

     check = function(e){
        if(this.password.value == this.pwdconfirm.value){
            count = 0;
            return ;
        }
        else{
            if(count == 3)
            alert("Error: Please check that you've entered and confirmed your password!");
        count++;    
        }
    };
    var myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", check, true);
});

