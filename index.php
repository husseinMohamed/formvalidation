<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="alternate" href="" hreflang="en-us" />
    <link href="" rel="canonical" />
    <meta property="og:title" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />
    <meta name="description" content="" />

    <?php include 'includes/header-script.php'; ?>
    <title></title>


</head>

<body>
    <?php include 'includes/nav.php'; ?>
    <br><br>
    <div class="container">
        <form id="my_div">

            <div class="input-wrapper unvalid">
                <label for="fname"><span class="showIfErr">*</span>First name:</label><br>
                <input class="form-input validate-input emptyForm" data-validate="name" type="text" id="fname"
                    name="fname">
                <div class="errorMessage">
                    Please enter First Name
                </div>
            </div>

            <div class="input-wrapper valid">
                <label for="mname"><span class="showIfErr">*</span>Middle name (Optional):</label><br>
                <input class="form-input validate-input emptyForm" data-validate="optional" type="text" id="mname"
                    name="mname">
                <div class="errorMessage">
                    Please enter Last Name
                </div>

            </div>

            <div class="input-wrapper unvalid">
                <label for="lname"><span class="showIfErr">*</span>Last name:</label><br>
                <input class="form-input validate-input emptyForm" data-validate="name" type="text" id="lname"
                    name="lname">
                <div class="errorMessage">
                    Please enter Last Name
                </div>

            </div>

            <div class="input-wrapper unvalid">
                <label for="email"><span class="showIfErr">*</span>Email:</label><br>
                <input class="form-input validate-input emptyForm" data-validate="email" type="email" id="email"
                    name="email">
                <div class="errorMessage">
                    Please enter Email
                </div>
            </div>


            <div class="input-wrapper inputMask unvalid">
                <label for="phone"><span class="showIfErr">*</span>Phone Number:</label><br>
                <input class="form-input validate-input emptyForm" data-validate="phone" type="text" id="phone"
                    data-inputmask="'mask': '(999) 999-9999'" placeholder="(_ _ _)  _ _ _-_ _ _ _" name="phone">
                <div class="errorMessage">
                    Please enter Phone Number
                </div>
            </div>



            <div class="input-wrapper inputMask unvalid">
                <label for="dob"><span class="showIfErr">*</span>Date of Birth (MM/DD/YYYY):</label><br>
                <input class="form-input validate-input emptyForm" data-validate="dob" type="text" id="dob"
                    data-inputmask="'mask': '99/99/9999'" placeholder="_ _ /_ _/_ _ _ _" name="dob">
                <div class="errorMessage">
                    Please enter your birthday. You must be atleast 18 years old.
                </div>

            </div>


            <div class="input-wrapper inputMask unvalid">
                <label for="zip"><span class="showIfErr">*</span>ZIP Code:</label><br>
                <input class="form-input validate-input emptyForm" data-validate="zip" type="text" maxLength=5 id="zip"
                    data-inputmask="'mask': '99999'" placeholder="_ _ _ _ _" name="zip">
                <div class="errorMessage">
                    Please enter a valid ZIP Code
                </div>
            </div>






            <div class="input-wrapper unvalid ">


                <label for="exampleRadios"><span class="showIfErr">*</span>Radio Selection:</label><br>
                <div class="validate-input radioWrapper">
                    <div class="form-check form-check-radio">

                        <label class="form-check-label" for="exampleRadios1">
                            <input class="form-check-input radio-input emptyForm" type="radio" name="exampleRadios"
                                id="exampleRadios1" value="option1">
                            Option 1
                        </label>
                    </div>
                    <div class="form-check form-check-radio">

                        <label class="form-check-label" for="exampleRadios2">
                            <input class="form-check-input radio-input emptyForm" type="radio" name="exampleRadios"
                                id="exampleRadios2" value="option2">
                            Option 2
                        </label>
                    </div>
                </div>
                <div class="errorMessage">
                    Please select one
                </div>

            </div>






            <div class="input-wrapper unvalid">
                <div class="validate-input ">
                    <div class="form-check">

                        <label class="form-check-label checkbox-label" for="defaultCheck1">
                            <input class="form-check-input checkbox-check" data-validate-type="checkbox" type="checkbox"
                                value="" id="defaultCheck1">
                            <span class="box"></span>
                            <span class="showIfErr">*</span>
                            <p> Lorem Ipsum is simply dummy text of the printing and
                                typesetting
                                industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s.</p>
                        </label>
                    </div>
                </div>

            </div>



            <div class="input-wrapper valid">

                <div class="form-check">

                    <label class="form-check-label checkbox-label" for="hiddenFieldsCheckbox">
                        <input class="form-check-input checkbox-check checkbox-progessive-reveal" type="checkbox"
                            value="" id="hiddenFieldsCheckbox">
                        <span class="box"></span>

                        <p>Reveal Hidden Form (Optional)</p>
                    </label>
                </div>


            </div>


            <!-- hidden field -->
            <div class="hiddenField" style="display: none;">


                <div class="input-wrapper unvalid">
                    <label for="hiddenInput"><span class="showIfErr">*</span>Hidden Input:</label><br>
                    <input class="form-input validate-input emptyForm" data-validate="name" type="text" id="hiddenInput"
                        name="hiddenInput">
                    <div class="errorMessage">
                        Please enter some text
                    </div>
                </div>


                <div class="input-wrapper unvalid">

                    <label for="exampleRadios11"><span class="showIfErr">*</span>Hidden Radio Selection:</label><br>
                    <div class="validate-input radioWrapper">
                        <div class="form-check form-check-radio">

                            <label class="form-check-label" for="exampleRadios13">
                                <input class="form-check-input radio-input emptyForm" type="radio"
                                    name="exampleRadios11" id="exampleRadios13" value="option3">
                                Option 3
                            </label>
                        </div>
                        <div class="form-check form-check-radio">

                            <label class="form-check-label" for="exampleRadios21">
                                <input class="form-check-input radio-input emptyForm" type="radio"
                                    name="exampleRadios11" id="exampleRadios21" value="option4">
                                Option 4
                            </label>
                        </div>
                    </div>
                    <div class="errorMessage">
                        Please select one
                    </div>

                </div>



                <div class="input-wrapper unvalid">
                    <div class="validate-input ">
                        <div class="form-check">

                            <label class="form-check-label checkbox-label" for="defaultCheck2">
                                <input class="form-check-input checkbox-check" data-validate-type="checkbox"
                                    type="checkbox" value="" id="defaultCheck2">
                                <span class="box"></span>
                                <span class="showIfErr">*</span>
                                <p> Hidden checkbox</p>
                            </label>
                        </div>
                    </div>

                </div>


            </div>


            <div class="submit-btn-wrapper">
                <div class="submitbuttonOverlay"></div>
                <input class="submitBtn" type="submit" value="Submit">
            </div>

        </form>

    </div>


    <br><br><br><br>
    <br><br><br><br>


    <?php include 'includes/footer-script.php'; ?>

</body>

</html>