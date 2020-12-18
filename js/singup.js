
function onSignUpButtonClicked() {
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    createUser(email, password)
}