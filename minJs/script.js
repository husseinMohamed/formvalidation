"use strict";var thisObj,inputAttr,validation,strThree,input=document.querySelectorAll(".form-input"),validate_input=document.querySelectorAll(".validate-input"),submitBtn=document.querySelector(".submitBtn"),submitBtn_wrapper=document.querySelector(".submit-btn-wrapper"),submitBtn_overlay=document.querySelector(".submitbuttonOverlay"),input_wrapper=document.querySelectorAll(".input-wrapper");$(".inputMask :input").inputmask(),input.forEach(function(e){return e.addEventListener("blur",inputOnBlur)}),submitBtn_wrapper.addEventListener("click",function(e){e.preventDefault(),checkInputsOnSubmit(),checkIfInputsAllFilled()}),document.querySelector("#zip").addEventListener("keyup",function(){zipCode(thisObj=this)});for(var i=0;i<validate_input.length;i++)validate_input[i].addEventListener("click",function(t){return function(){for(var e=0;e<t;e++){addRedBorderOnSubmit(input_wrapper[e])}}}(i));function checkIfInputsAllFilled(){for(var e=document.querySelectorAll(".unvalid"),t=0;t<e.length;t++);0===t?(submitBtn.style.backgroundColor="#5bc2e7",submitBtn_overlay.style.display="none"):(submitBtn_overlay.style.display="block",submitBtn.style.backgroundColor="#999")}function addErrorStates(e){e.classList.add("errorState")}function removeErrorStates(e){e.classList.remove("errorState")}function inputOnBlur(){checkIfInputempty(inputAttr=(thisObj=this).getAttribute("data-validate")),checkIfInputsAllFilled()}function checkInputsOnSubmit(){document.querySelectorAll(".unvalid");for(var e=input_wrapper,t=0;t<e.length;t++)addRedBorderOnSubmit(e[t])}function addRedBorderOnSubmit(e){e.classList.contains("valid")?removeErrorStates(e):addErrorStates(e)}function getLengthOfMaskedInputs(e,t){var r=e.value.replace(/-/g,"").replace(/"/g,"").replace(/'/g,"").replace(/\(|\)/g,"");strThree=r.replace(" ",""),validation={isNumber:function(e){return t.test(e)}}}function phoneNumber(e){return getLengthOfMaskedInputs(e,pattern=/^\d+$/),!!function(e){return pattern.test(e)}(strThree)}var contstraints,pattern,self,val,len,zipBool=!0;function zipCode(e){if(getLengthOfMaskedInputs(e,pattern=/^(?:\d{5})?$/),4<strThree.length&&$.ajax({url:"https://api.zippopotam.us/us/"+e.value,cache:!1,dataType:"json",type:"GET",success:function(){zipBool=!0},error:function(){zipBool=!1,$.ajax({url:"https://api.zippopotam.us/pr/"+e.value,cache:!1,dataType:"json",type:"GET",success:function(){zipBool=!0},error:function(){zipBool=!1}})}}),5===strThree.length&&1==zipBool)return!0}function dobCheck(e){getLengthOfMaskedInputs(e,pattern=/^\d{2}\/\d{2}\/\d{4}$/);e.value.length;var t,r,n,i,a,o=e.value;o.trim();return!!(18<=(t=o,r=new Date,n=new Date(t),i=r.getFullYear()-n.getFullYear(),((a=r.getMonth()-n.getMonth())<0||0==a&&r.getDate()<n.getDate())&&i--,i)&&validation.isNumber(strThree))}function removeErrorClasses(e){e.classList.remove("emptyForm"),e.closest(".input-wrapper").classList.remove("unvalid"),e.closest(".input-wrapper").classList.add("valid"),removeErrorStates(e.closest(".input-wrapper"))}function addErrorClasses(e){e.classList.add("emptyForm"),e.closest(".input-wrapper").classList.remove("valid"),e.closest(".input-wrapper").classList.add("unvalid"),addErrorStates(e.closest(".input-wrapper"))}function checkContstraints(e){val=(self=e).value,len=e.value.length;var t=document.querySelector("#zip");contstraints={name:{conditional:1<e.value.length},email:{conditional:val.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},phone:{conditional:phoneNumber(e)},zip:{conditional:zipCode(t)},dob:{conditional:dobCheck(e)}}}function checkIfInputempty(e){checkContstraints(thisObj),contstraints[e].conditional?removeErrorClasses(thisObj):addErrorClasses(thisObj)}var value,radios=document.querySelectorAll(".radio-input");function checkRadioVal(){thisObj=this;for(var e=0;e<radios.length;e++)"radio"===radios[e].type&&radios[e].checked&&(value=radios[e].value,removeErrorClasses(thisObj));checkIfInputsAllFilled()}radios.forEach(function(e){return e.addEventListener("click",checkRadioVal)});var checkboxes=document.querySelectorAll(".checkbox-check");function checkIfCheckboxesChecked(){"checkbox"===(thisObj=this).type&&thisObj.checked?removeErrorClasses(thisObj):addErrorClasses(thisObj),checkIfInputsAllFilled()}checkboxes.forEach(function(e){return e.addEventListener("click",checkIfCheckboxesChecked)});