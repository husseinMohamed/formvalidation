"use strict";

var input = document.querySelectorAll(".form-input");
var submitBtn = document.querySelector(".submitBtn");
var input_wrapper = document.querySelectorAll(".input-wrapper");
var thisObj;

//EVENTS
input.forEach(function (i) {
    return i.addEventListener("blur", doIt);
});
//input.forEach(f => f.addEventListener("click", checkAll));
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    checkInputsOnSubmit();
});

//Add error states for all empty required inputs before the active one
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function (j) {
        return function () {
            for (var k = 0; k < j; k++) {
                var emptyForms = input_wrapper;
                addRedBorderOnSubmit(emptyForms[k]);
            }
        };
    }(i));
}

//submitBtn.addEventListener("click", checkInputsOnSubmit);


function doIt() {
    thisObj = this;

    checkIfInputempty(this.value.length);
    checkEmail();
}

function checkInputsOnSubmit() {

    var emptyForms = input_wrapper;

    for (var i = 0; i < emptyForms.length; i++) {
        addRedBorderOnSubmit(emptyForms[i]);
    }

    if (i === 0) {
        console.log("submit success");
    } else {
        console.log("please fix errors");
    }
}

function addRedBorderOnSubmit(elem) {

    if (elem.classList.contains("valid")) {
        elem.style.border = "0px solid transparent";
    } else {
        elem.style.border = "2px solid red";
    }
}

//Input validation for fname, lname
function checkIfInputempty(y) {
    if (thisObj.classList.contains("validateName")) {
        if (y < 3) {
            thisObj.style.border = "2px solid red";
            thisObj.classList.add("emptyForm");
            thisObj.parentNode.classList.remove("valid");
            thisObj.parentNode.classList.add("unvalid");
        } else {
            thisObj.style.border = "2px solid black";
            thisObj.classList.remove("emptyForm");
            thisObj.parentNode.classList.remove("unvalid");
            thisObj.parentNode.classList.add("valid");
        }
    }
}

//Input validation for email
function checkEmail() {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var str = thisObj.value;

    if (thisObj.classList.contains("validateEmail")) {
        if (str.match(pattern)) {
            thisObj.style.border = "2px solid black";
            thisObj.classList.remove("emptyForm");
            thisObj.parentNode.classList.remove("unvalid");
            thisObj.parentNode.classList.add("valid");
        } else {
            thisObj.style.border = "2px solid red";
            thisObj.classList.add("emptyForm");
            thisObj.parentNode.classList.remove("valid");
            thisObj.parentNode.classList.add("unvalid");
        }
    }
}