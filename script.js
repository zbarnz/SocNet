async function ipGrab() {
  const response = await fetch("https://api.ipify.org/?format=json")
    .then((results) => results.json())
    .then((data) => {
      console.log(data);
      alert("Password incorrect, IP has been logged: " + data.ip);
    });
}

function goToMyGit() {
  var pass = document.getElementById("password");
  if (pass.value == "SocNet") {
    window.open("https://dahvd.github.io/Group17/homepage");
  } else {
    ipGrab();
    $("#pass")[0].reset();
  }

  return false;
}
