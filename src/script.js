var input = document.querySelectorAll('.form-input:not([style*="display:none"]):not([style*="display: none"])');
var validate_input = document.querySelectorAll('.validate-input');
var submitBtn = document.querySelector(".submitBtn");
var submitBtn_wrapper = document.querySelector(".submit-btn-wrapper");
var submitBtn_overlay = document.querySelector(".submitbuttonOverlay");
var input_wrapper = document.querySelectorAll('.input-wrapper:not([style*="display:none"]):not([style*="display: none"])');
var radios = document.querySelectorAll(".radio-input");
var checkboxes = document.querySelectorAll(".checkbox-check");
var thisObj;
var inputAttr;


$(".inputMask :input").inputmask();

/*EVENTS*/

//event for input on blur
input.forEach(i => i.addEventListener("blur", inputOnBlur));
//event to validate radio buttons
radios.forEach(i => i.addEventListener("click", checkRadioVal));
//event to validate checkboxes
checkboxes.forEach(i => i.addEventListener("click", checkIfCheckboxesChecked));

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
  validate_input[i].addEventListener(
    "click",
    (j => {
      return function () {
        for (var k = 0; k < j; k++) {
          var emptyForms = input_wrapper;
          addRedBorderOnSubmit(emptyForms[k]);
        }
      };
    })(i)
  );
}

//Enable/disable button
function checkIfInputsAllFilled() {
  var valid_form = document.querySelectorAll('.unvalid:not([style*="display:none"]):not([style*="display: none"])');
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
  var emptyForms = document.querySelectorAll('.input-wrapper:not([style*="display:none"]):not([style*="display: none"])');
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
  var strTwo = strOne
    .replace(/"/g, "")
    .replace(/'/g, "")
    .replace(/\(|\)/g, "");
  strThree = strTwo.replace(" ", "");

  validation = {
    isNumber: function (str) {
      return pattern.test(str); // returns a boolean
    }
  };
}

//Check if phone number is filled out
function phoneNumber(phoneNumberInput) {
  pattern = /^\d+$/;
  getLengthOfMaskedInputs(phoneNumberInput, pattern);

  var validation = {
    isNumber: function (str) {
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
      success: function (data) {
        zipBool = true;
      },
      error: function (jqXHR, textStatus) {
        zipBool = false;

        $.ajax({
          url: "https://api.zippopotam.us/pr/" + zipInput.value,
          cache: false,
          dataType: "json",
          type: "GET",
          success: function (data) {
            zipBool = true;
          },
          error: function (jqXHR, textStatus) {
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
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
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

//Remove and add valid/unvalid classes to inputs
function removeErrorClasses(x) {
  x.classList.remove("emptyForm");
  x.closest(".input-wrapper").classList.remove("unvalid");
  x.closest(".input-wrapper").classList.add("valid");
  removeErrorStates(x.closest(".input-wrapper"));
}

function addErrorClasses(x) {
  x.classList.add("emptyForm");
  x.closest(".input-wrapper").classList.remove("valid");
  x.closest(".input-wrapper").classList.add("unvalid");
  addErrorStates(x.closest(".input-wrapper"));
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
    },
    optional: {
      conditional: true
    }
  };
}

//Validate inputs on blur
function checkIfInputempty(y) {
  checkContstraints(thisObj);

  if (contstraints[y]["conditional"]) {
    removeErrorClasses(thisObj);
  } else {
    addErrorClasses(thisObj);
  }
}




// Validate radio buttons on selection
var value;

function checkRadioVal() {
  thisObj = this;
  var getRadioDataValidateType = thisObj.getAttribute("data-validate-type");


  for (var i = 0; i < radios.length; i++) {
    if (getRadioDataValidateType === "radio") {
      //   if (radios[i].type === "radio" && radios[i].checked) {
      if (radios[i].type === "radio" && radios[i].checked) {
        // get value, set checked flag or do whatever you need to
        value = radios[i].value;
        removeErrorClasses(thisObj)
      }
    }
  }
  checkIfInputsAllFilled();
}




//Check if stand alone checkboxes are checked off
function checkIfCheckboxesChecked() {
  thisObj = this;
  var getCheckboxDataValidateType = thisObj.getAttribute("data-validate-type");


  if (getCheckboxDataValidateType === "checkbox") {
    if (thisObj.checked) {
      removeErrorClasses(thisObj);
    } else {
      addErrorClasses(thisObj);
    }
  }


  checkIfInputsAllFilled();
}


//submit form
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("form sent");
});



//Show hidden form fields
var hiddenField = document.querySelector(".hiddenField");
var hiddenField_children = document.querySelector('.hiddenField').childNodes;

function addDisplayStyleToHiddenFields(x) {
  hiddenField.style.display = x;
  for (var i = 0; i < hiddenField_children.length; i++) {
    if (hiddenField_children[i].nodeName.toLowerCase() == 'div') {
      hiddenField_children[i].style.display = x;
    }
  }
}

addDisplayStyleToHiddenFields("none");

document.querySelector(".checkbox-progessive-reveal").addEventListener("click", function () {
  thisObj = this;


  if (thisObj.checked) {

    addDisplayStyleToHiddenFields("block");
  } else {
    addDisplayStyleToHiddenFields("none");
  }
  checkIfInputsAllFilled();
});