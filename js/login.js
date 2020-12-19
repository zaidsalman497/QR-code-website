firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });

function onLoginButtonClicked() {
  getElement('btnLogin').disabled = true;
    var userEmail = getElement("inputEmail").value
    var userPass = getElement("inputPassword").value

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((user) => {
    window.location.href = "loggedin.html"
    getElement('btnLogin').disabled = false;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    setMessage(errorMessage);
    getElement('btnLogin').disabled = false;
  });
}

function setMessage(message) {
  document.getElementById('status').textContent = message;
}

function getElement(id) {
  return document.getElementById(id);
}