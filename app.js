document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    document.getElementById("message").innerText = "Login successful!";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").innerText = "Invalid credentials!";
    document.getElementById("message").style.color = "red";
  }
});
