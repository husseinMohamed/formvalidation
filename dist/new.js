"use strict";

var input = document.querySelectorAll(".form-input");
var submitBtn = document.querySelector(".submitBtn");
var input_wrapper = document.querySelectorAll(".input-wrapper");
var thisObj;
var inputAttr;

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
    inputAttr = this.getAttribute("data-validate");
    // console.log(inputAttr);

    checkIfInputempty(inputAttr);
    checkEmail();
}

function checkInputsOnSubmit() {

    var emptyForms = input_wrapper;

    for (var i = 0; i < emptyForms.length; i++) {

        //addRedBorderOnSubmit(emptyForms[i]);

    }
    console.log(i);

    // if (i === 0) {
    //     console.log("submit success");
    // } else {
    //     console.log("please fix errors");
    // }
}

function addRedBorderOnSubmit(elem) {

    if (elem.classList.contains("valid")) {
        elem.style.border = "0px solid transparent";
    } else {
        elem.style.border = "2px solid red";
    }
}

var contstraints;
var pattern;

var self;
var val;
var len;

function checkContstraints(x) {
    self = x;
    val = x.value;
    len = x.value.length;

    contstraints = {
        // self: x,
        // val: x.value,
        // len: x.value.length,

        name: {
            conditional: x.value.length > 3
        },
        email: {
            conditional: val.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
        }
    };
}

//Input validation for fname, lname
function checkIfInputempty(y) {

    checkContstraints(thisObj);

    // var str = thisObj.value;
    // var len = thisobj.value.length;
    // pattern = contstraints[y]['pattern'];
    //console.log(pattern);


    // console.log(contstraints[y]['conditional']);

    // if (contstraints[y]['conditional']) {

    //     console.log("good");
    //     thisObj.style.border = "2px solid black";
    //     thisObj.classList.remove("emptyForm");
    //     thisObj.parentNode.classList.remove("unvalid");
    //     thisObj.parentNode.classList.add("valid");

    // } else {
    //     console.log("bad");
    //     thisObj.style.border = "2px solid red";
    //     thisObj.classList.add("emptyForm");
    //     thisObj.parentNode.classList.remove("valid");
    //     thisObj.parentNode.classList.add("unvalid");

    // }
}
//}


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