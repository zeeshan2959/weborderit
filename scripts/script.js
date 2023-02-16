const hideSec = () =>{
  let x = document.getElementById("historyTable");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

//Icon password open close

const loginpassword = document.getElementById('loginpassword');
const passwordIconBtn = document.getElementById('passwordIcon');
const passwordIconBtnOld = document.getElementById('passwordIconold');
const confirmPasswordIconBtn = document.getElementById('confirmPasswordIcon');
const closeIcon = document.querySelector('.absolute-position-icon-close');
let fPassword = document.getElementById('f-password');
let nPassword = document.querySelector('.n-password');
let oPassword = document.querySelector('.o-password');
let cPassword = document.querySelector('.c-password');
let isPass = true
let isToast = false;

// console.log(typeof(fPassword.type))

const typeChangePasswordHandler = (field) => {
  var x = field
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
};

// const typeChangePasswordHandlerLogin = (field) => {
//   var x = field
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// };

passwordIconBtn?.addEventListener('click', () => typeChangePasswordHandler(nPassword));
confirmPasswordIconBtn?.addEventListener('click', () => typeChangePasswordHandler(cPassword));
passwordIconBtnOld?.addEventListener('click', () => typeChangePasswordHandler(oPassword));
loginpassword?.addEventListener('click', () => typeChangePasswordHandler(fPassword));

function alertHide(){
  document.getElementById('alert-hide').style.display = "none";
  isToast = false;
}

function alertshow(){
  isToast = true;
  document.getElementById('alert-hide').style.display = "block";
  console.log('hello')
  if (isToast) setTimeout(alertHide, 2000);
}


// 
function myFunction(id,secId) {
  var checkBox = document.getElementById(id);
  var text = document.getElementById(secId);
  if (checkBox.checked == false){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
function toggleSec() {
  var checkBox = document.getElementById("toggle-button");
  var text = document.getElementById("ship-sec");
  var text1 = document.getElementById("address-sec");
  if (checkBox.checked == true){
    text.style.display = "block";
    text1.style.display = "none";
  } else {
     text.style.display = "none";
     text1.style.display = "block";
  }
}


function showDiv (){
  document.getElementById('hide-default').style.visibility="visible";
}