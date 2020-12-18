
function onSignUpButtonClicked() {
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;

    setMessage('Calling create user...');
    createUser(email, password);
    
}


function createUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      document.getElementById('status').value = 'Sucessful signin :)';
      // Signed in 
      // ...
      setMessage('Sucessful signin :)');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      setMessage('Failure signin :( ');
    });
}

function setMessage(message) {
    document.getElementById('status').textContent = message;
}