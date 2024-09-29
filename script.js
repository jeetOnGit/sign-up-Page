
window.onload = function() {
  const main = document.getElementById('main');
  const logoBG = document.getElementById('logoBG');
  const house = document.getElementById('house');
  const company = document.getElementById('company');
  const userDetails = document.getElementById('userDetails');

  setTimeout(() => {
    main.classList.add("start")
    setTimeout(() => {
      logoBG.classList.add("logoStart")
    }, 1000);
    setTimeout(() => {
      company.classList.add("companyLogo")
    }, 1500);
    setTimeout(() => {
      logoBG.classList.add("moveLogoLeft")
      house.classList.add("moveHouseRight")
      setTimeout(() => {
        userDetails.style.visibility = 'visible'
      }, 1000);
      
    }, 2000);
    
  }, 200);

};

document.getElementById('loginBtn').addEventListener('click', function() {
  const btn = this

  btn.innerHTML ="<div class='spinner'></div>"
  btn.style.padding = "20px 0px"

  setTimeout(() => {
    btn.innerHTML ="Login"
  btn.style.padding = "10px 0px"

    }, 2000)
});

const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const passwordHolder = document.getElementById('passwordHolder');


togglePassword.addEventListener('click', function () {
  
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  this.textContent = type === 'password' ? 'Show' : 'Hide';
});

const onlineId = document.getElementById('idInput');
const topID = document.getElementById('topID');


onlineId.addEventListener('blur', (e) => {
  if(e.target.value){
    topID.classList.add('top')
  }else{
    topID.classList.remove('top')
  }
})

passwordInput.addEventListener('blur', (e) => {
  if(e.target.value){
    passwordHolder.classList.add('top')
  }else{
    passwordHolder.classList.remove('top')
  }
})
