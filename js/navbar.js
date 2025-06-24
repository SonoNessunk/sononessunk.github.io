const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".theme-toggle");

let getMode = localStorage.getItem("mode");
if (getMode === "light-mode") {
  body.classList.add("light");
  modeToggle.classList.add("active");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("light");

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("light")) {
    localStorage.setItem("mode", "dark-mode");
  } else {
    localStorage.setItem("mode", "light-mode");
  }
});