"use strict";var thisObj,inputAttr,contstraints,pattern,self,val,len,input=document.querySelectorAll(".form-input"),submitBtn=document.querySelector(".submitBtn"),input_wrapper=document.querySelectorAll(".input-wrapper");input.forEach(function(t){return t.addEventListener("blur",doIt)}),submitBtn.addEventListener("click",function(t){t.preventDefault(),checkInputsOnSubmit()});for(var i=0;i<input.length;i++)input[i].addEventListener("click",function(e){return function(){for(var t=0;t<e;t++){addRedBorderOnSubmit(input_wrapper[t])}}}(i));function doIt(){checkIfInputempty(inputAttr=(thisObj=this).getAttribute("data-validate")),checkEmail()}function checkInputsOnSubmit(){for(var t=input_wrapper,e=0;e<t.length;e++);console.log(e)}function addRedBorderOnSubmit(t){t.classList.contains("valid")?t.style.border="0px solid transparent":t.style.border="2px solid red"}function checkContstraints(t){val=(self=t).value,len=t.value.length,contstraints={name:{conditional:3<t.value.length},email:{conditional:val.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)}}}function checkIfInputempty(t){checkContstraints(thisObj)}function checkEmail(){var t=thisObj.value;thisObj.classList.contains("validateEmail")&&(t.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)?(thisObj.style.border="2px solid black",thisObj.classList.remove("emptyForm"),thisObj.parentNode.classList.remove("unvalid"),thisObj.parentNode.classList.add("valid")):(thisObj.style.border="2px solid red",thisObj.classList.add("emptyForm"),thisObj.parentNode.classList.remove("valid"),thisObj.parentNode.classList.add("unvalid")))}