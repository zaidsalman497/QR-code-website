function getElement(id) {
  return document.getElementById(id);
}

function setMessage(message) {
  document.getElementById('status').textContent = message;
}



function getCookieValue(name, value, expirydays) {
  return `${name}= ${escape(value)}; expires= ${getExpiryTime(expirydays)}`;
}

function getExpiryTime(number_of_days) {
  var today = new Date();
  var expire = new Date();
  expire.setTime(today.getTime() + 60 * 60 * 1000 * 24 * number_of_days);
  return expire.toGMTString();
}


function getCookieByName(name) {
  function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
  var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
  return match ? match[1] : null;
}

function checkUser() {
  if (!getCookieByName("loggedInUser")) {
      window.location.href = "login.html";
  } else {
      document.getElementById("loginUserEmail").textContent = getCookieByName("loggedInUser");
  }

}