//gets a user's username when they hit the login button
function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    //redirects them to review page when they login
    window.location.href = "review.html";
  }