function onSignUpButtonClicked() {
    getElement('btnSignUp').disabled = true;
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;

    setMessage('Calling create user...');
    createUser(email, password);

}


function createUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            getElement('btnSignUp').disabled = false;
            document.getElementById('status').value = 'Sucessful signin :)';
            // Signed in 
            // ...
            setMessage('Sucessful signin :)');
        })
        .catch((error) => {
            getElement('btnSignUp').disabled = false;
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            setMessage(errorMessage);
        });
}