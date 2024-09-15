document.addEventListener("readystatechange",
    (event) => {
        if(event.target.readyState == "complete"){
            console.log("Status: complete");
           loginvalidation();
        }
    });
const warnTxt=document.querySelector("#dummy");
function  loginvalidation(){
     const name=document.querySelector("#name");
     const email=document.querySelector("#email");
     const password=document.querySelector("#pass");
     const submit=document.querySelector("#submit");
     const popup=document.querySelector("#pop");
     submit.addEventListener("click",
     (event)=>{
      event.preventDefault();
      const gname=name.value;
      const mail=email.value;
      const passw=password.value;
      if(mail && passw && gname){
            popup.style.display="inline";
            setTimeout(function(){ 
               popup.style.display="none";
             }, 3000);
      }
      else{
         warnTxt.textContent="Fields can't be empty";
      }
     })
     name.addEventListener("blur",(event)=>{
        const gname=name.value;
        validatename(gname);
     })
     email.addEventListener("blur",
     (event)=>{
        const mail1=email.value;
        validateEmail(mail1)
     })
     password.addEventListener('blur',
     (event)=>{
        const passw=password.value;
        console.log(passw);
        validatepassword(passw);
     })
    
}
function validatename(gname){
    var letters = /^[A-Za-z]+$/;
    if(gname.match(letters))
    {
        warnTxt.textContent='';
         return true;
    }
    else
    {
        warnTxt.textContent='Enter valid name';
        return false;
    }
  }
function validateEmail(mail1) {
   var mailFormat =  /\S+@\S+\.\S+/;
   if (mail1.match(mailFormat)) {
     warnTxt.textContent="";
     return true;
   } else {
     warnTxt.textContent="Invalid email address!";
     return false;
   }
 }
 function validatepassword(passw) 
 { 
 var decimal=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;;
 if(passw.match(decimal)) 
 { 
 warnTxt.textContent="";
 return true;
 }
 else
 { 
 warnTxt.textContent="Enter valid password";
 return false;
 }
 }
 function reset(){
 document.getElementById("reset").reset();
 }
 document.addEventListener("mousemove",function(){
   document.getElementById("ok1").style.display="none";
 })
 document.addEventListener("mouseout",function(){
   document.getElementById("ok1").style.display="inline";
 })
 document.addEventListener("mousemove",function(){
   document.getElementById("ok2").style.display="inline";
 })
 document.addEventListener("mouseout",function(){
   document.getElementById("ok2").style.display="none";
 })

function func(){
  alert("Once upon a time")
  document.getElementById("luagh").style.display="inline";
  setTimeout(function(){
    document.getElementById("luagh").style.display="none";
  },5000) 
}
