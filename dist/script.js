"use strict";

var input = document.querySelectorAll(".form-input");
var validate_input = document.querySelectorAll(".validate-input");

var submitBtn = document.querySelector(".submitBtn");
var submitBtn_wrapper = document.querySelector(".submit-btn-wrapper");
var submitBtn_overlay = document.querySelector(".submitbuttonOverlay");

var input_wrapper = document.querySelectorAll(".input-wrapper");

var thisObj;
var inputAttr;

$(".inputMask :input").inputmask();

/*EVENTS*/

//event for input on blur
input.forEach(function (i) {
  return i.addEventListener("blur", inputOnBlur);
});

//event for submit button on click
submitBtn_wrapper.addEventListener("click", function (e) {
  e.preventDefault();
  checkInputsOnSubmit();
  checkIfInputsAllFilled();
});

//check if zip code is valid on keyup
document.querySelector("#zip").addEventListener("keyup", function () {
  thisObj = this;
  zipCode(thisObj);
});

//Add error states for all empty required inputs before the active one
for (var i = 0; i < validate_input.length; i++) {
  validate_input[i].addEventListener("click", function (j) {
    return function () {
      for (var k = 0; k < j; k++) {
        var emptyForms = input_wrapper;
        addRedBorderOnSubmit(emptyForms[k]);
      }
    };
  }(i));
}

//Enable/disable button
function checkIfInputsAllFilled() {
  var valid_form = document.querySelectorAll(".unvalid");
  for (var i = 0; i < valid_form.length; i++) {}

  if (i === 0) {
    submitBtn.style.backgroundColor = "#5bc2e7";
    submitBtn_overlay.style.display = "none";
  } else {
    submitBtn_overlay.style.display = "block";
    submitBtn.style.backgroundColor = "#999";
  }
}

//Add Error State class
function addErrorStates(x) {
  x.classList.add("errorState");
}

//Remove Error State class
function removeErrorStates(x) {
  x.classList.remove("errorState");
}

//Check inputs on blur
function inputOnBlur() {
  thisObj = this;
  inputAttr = this.getAttribute("data-validate");
  // console.log(inputAttr);

  checkIfInputempty(inputAttr);
  checkIfInputsAllFilled();
}

//Check inputs on submit
function checkInputsOnSubmit() {
  var input_wrapper_unvalid = document.querySelectorAll(".unvalid");
  var emptyForms = input_wrapper;
  for (var i = 0; i < emptyForms.length; i++) {
    addRedBorderOnSubmit(emptyForms[i]);
  }
}

//Add error states on submit
function addRedBorderOnSubmit(elem) {
  if (elem.classList.contains("valid")) {
    removeErrorStates(elem);
  } else {
    addErrorStates(elem);
  }
}

//Get length of inputs using input-mask for placeholders
var validation;
var strThree;
var pattern;

function getLengthOfMaskedInputs(inputText, pattern) {
  var str = inputText.value;
  var strOne = str.replace(/-/g, "");
  var strTwo = strOne.replace(/"/g, "").replace(/'/g, "").replace(/\(|\)/g, "");
  strThree = strTwo.replace(" ", "");

  validation = {
    isNumber: function isNumber(str) {
      return pattern.test(str); // returns a boolean
    }
  };
}

//Check if phone number is filled out
function phoneNumber(phoneNumberInput) {
  pattern = /^\d+$/;
  getLengthOfMaskedInputs(phoneNumberInput, pattern);

  var validation = {
    isNumber: function isNumber(str) {
      return pattern.test(str); // returns a boolean
    }
  };

  if (validation.isNumber(strThree)) {
    return true;
  } else {
    return false;
  }
}

//Check if ZIP Code is valid
//var zipBool = true;

var zipBool = true;

function zipCode(zipInput) {
  pattern = /^(?:\d{5})?$/;
  getLengthOfMaskedInputs(zipInput, pattern);

  if (strThree.length > 4) {
    // HTTP Request to check US and Puerto Rico Zip Codes
    $.ajax({
      url: "https://api.zippopotam.us/us/" + zipInput.value,
      cache: false,
      dataType: "json",
      type: "GET",
      success: function success(data) {
        zipBool = true;
      },
      error: function error(jqXHR, textStatus) {
        zipBool = false;

        $.ajax({
          url: "https://api.zippopotam.us/pr/" + zipInput.value,
          cache: false,
          dataType: "json",
          type: "GET",
          success: function success(data) {
            zipBool = true;
          },
          error: function error(jqXHR, textStatus) {
            zipBool = false;
          }
        });
      }
    });
  }

  if (strThree.length === 5 && zipBool == true) {
    return true;
  }
}

//Check if dob is over 18
function dobCheck(dobInput) {
  pattern = /^\d{2}\/\d{2}\/\d{4}$/;
  getLengthOfMaskedInputs(dobInput, pattern);

  var getAge = function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    return age;
  };

  var dobError = dobInput.value.length;
  var dobTrim = dobInput.value;
  var trimmed = dobTrim.trim();

  var ageCheck = getAge(dobTrim);

  if (ageCheck >= 18 && validation.isNumber(strThree)) {
    return true;
  } else {
    return false;
  }
}

//inputs on focusout
var contstraints;
var pattern;

var self;
var val;
var len;

function checkContstraints(x) {
  self = x;
  val = x.value;
  len = x.value.length;
  var zipVal = document.querySelector("#zip");

  contstraints = {
    name: {
      conditional: x.value.length > 1
    },
    email: {
      conditional: val.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    },
    phone: {
      conditional: phoneNumber(x)
    },
    zip: {
      conditional: zipCode(zipVal)
    },
    dob: {
      conditional: dobCheck(x)
    }
  };
}

//Validate inputs on blur
function checkIfInputempty(y) {
  checkContstraints(thisObj);

  var str = thisObj.value;
  var len = thisObj.value.length;
  // pattern = contstraints[y]['pattern'];
  // console.log(pattern);

  // console.log(contstraints[y]['conditional']);

  //console.log(thisObj);

  if (contstraints[y]["conditional"]) {
    thisObj.classList.remove("emptyForm");
    thisObj.parentNode.classList.remove("unvalid");
    thisObj.parentNode.classList.add("valid");
    removeErrorStates(thisObj.parentNode);
  } else {
    thisObj.classList.add("emptyForm");
    thisObj.parentNode.classList.remove("valid");
    thisObj.parentNode.classList.add("unvalid");
    addErrorStates(thisObj.parentNode);
  }
}
//
//
//
// Validate radio buttons on selection
var radios = document.querySelectorAll(".radio-input");

radios.forEach(function (i) {
  return i.addEventListener("click", checkRadioVal);
});

var value;

function checkRadioVal() {
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === "radio" && radios[i].checked) {
      // get value, set checked flag or do whatever you need to
      value = radios[i].value;

      this.classList.remove("emptyForm");
      this.parentNode.parentNode.parentNode.parentNode.classList.remove("unvalid");
      this.parentNode.parentNode.parentNode.parentNode.classList.add("valid");
      removeErrorStates(this.parentNode.parentNode.parentNode.parentNode);
    }
  }

  checkIfInputsAllFilled();
}
//

//

//
//Check if stand alone checkboxes are checked off
var checkboxes = document.querySelectorAll(".checkbox-check");

checkboxes.forEach(function (i) {
  return i.addEventListener("click", checkIfCheckboxesChecked);
});

function checkIfCheckboxesChecked() {
  if (this.type === "checkbox" && this.checked) {
    this.classList.remove("emptyForm");
    this.parentNode.parentNode.parentNode.parentNode.classList.remove("unvalid");
    this.parentNode.parentNode.parentNode.parentNode.classList.add("valid");
    removeErrorStates(this.parentNode.parentNode.parentNode.parentNode);
  } else {
    this.classList.add("emptyForm");
    this.parentNode.parentNode.parentNode.parentNode.classList.remove("valid");
    this.parentNode.parentNode.parentNode.parentNode.classList.add("unvalid");
    addErrorStates(this.parentNode.parentNode.parentNode.parentNode);
  }

  checkIfInputsAllFilled();
}