// var formValidation = {

//     init: function () {
//         this.cacheDom();
//         this.bindEvents();
//         this.render();

//     },
//     cacheDom: function () {
//         this.input = document.querySelectorAll(".form-input");
//          this.submitBtn = document.querySelector(".submitBtn");
//         this.input_wrapper = document.querySelectorAll(".input-wrapper");
//         this.thisObj;


//     },
//     bindEvents: function () {
//         // this.submitBtn.on('click', this.addPerson);
//        // document.querySelector(".submitBtn").addEventListener("click", addPerson);
//         // this.input.forEach(i =>
//         //      i.addEventListener("blur", doIt)
//         //  );

//      //   submitBtn.on('click', this.addPerson.bind(this));

//      this.submitBtn.addEventListener('click', function (e) {
//             e.preventDefault();
//             this.addPerson();
//         });


//     },
//     addPerson: function() {
//      console.log("hi");
//     },
//     render: function () {
//         //console.log(this.input);
//         // this.input.addEventListener("blur", addPerson);
//     },

//     // checkIfInputempty: function (y) {
//     //     if (thisObj.classList.contains("validateName")) {
//     //         if (y < 3) {
//     //             this.thisObj.style.border = "2px solid red";
//     //             this.thisObj.classList.add("emptyForm");
//     //             this.thisObj.parentNode.classList.remove("valid");
//     //             this.thisObj.parentNode.classList.add("unvalid");


//     //         } else {
//     //             this.thisObj.style.border = "2px solid black";
//     //             this.thisObj.classList.remove("emptyForm");
//     //             this.thisObj.parentNode.classList.remove("unvalid");
//     //             this.thisObj.parentNode.classList.add("valid");

//     //         }
//     //     }

//     // }

// };

// formValidation.init();


// var people = {
//     people: ['Will', 'Steve'],
//     init: function() {
//         this.cacheDom();
//         this.bindEvents();
//         this.render();
//     },
//     cacheDom: function() {

//         this.$el = $('.container');
//         this.$button = this.$el.find('.submitBtn');

//     },
//     bindEvents: function() {
//         this.$button.on('click', this.addPerson.bind(this));

//     },
//     render: function() {
//        var data = {
//            people: this.people,
//        };

//     },
//     addPerson: function(e) {
//         e.preventDefault();
//        console.log("ok");
//     }

// };

// people.init();
"use strict";