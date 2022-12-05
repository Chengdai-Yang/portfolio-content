function form_input_func() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var form_button = document.getElementById("form_button");
    if (email != "" && message != "") {
        form_button.style.backgroundColor = "coral";
    }
    else {
        form_button.style.backgroundColor = "";
    }
}

function form_submit_func() {
    confirm("You have submitted the form")
    // setTimeout(hide, 10000);
}