function showAlert(message) {
  const alertBox = document.getElementById("alertBox");
  if (!alertBox) return;

  alertBox.innerText = message;
  alertBox.style.display = "block";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 2500);
}

/* Register */
function register() {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  if (username === "" || password === "") {
    showAlert("Please fill all fields");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  showAlert("Registration successful");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}

/* Login */
function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  if (username === "" || password === "") {
    showAlert("Please fill all fields");
    return;
  }

  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    showAlert("Invalid username or password");
  }
}

/* Dashboard protection */
function checkAuth() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

/* Logout */
function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.setItem("logoutMsg", "You have logged out successfully");
  window.location.href = "index.html";
}

/* Show logout alert on login page */
function showLogoutAlert() {
  const msg = localStorage.getItem("logoutMsg");
  if (msg) {
    showAlert(msg);
    localStorage.removeItem("logoutMsg");
  }
}

/* Greeting */
function showGreeting() {
  const username = localStorage.getItem("username") || "User";
  const hour = new Date().getHours();

  let greeting = "Welcome";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  document.getElementById("greeting").innerText =
    greeting + ", " + username;
}
