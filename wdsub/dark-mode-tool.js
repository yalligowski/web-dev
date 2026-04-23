let buttonDiv = document.getElementById("button-div");

let mode = document.getElementById("mode");

let isDark = false;

function darkOnOff(event) {
  //Change background color
  if (isDark) document.body.style.backgroundColor = "#fff";
   else document.body.style.backgroundColor = "#000";
  
  //Chnage text color
  if (isDark)
    document.body.style.color = "#000";
 else document.body.style.color = "#fff";
  
  //Change mode text
    if (isDark) mode.innerHTML = "<p> Dark Mode off</p>"
  else mode.innerHTML = "<p> Dark Mode on</p>"
  
  
    isDark = !isDark;
}    
