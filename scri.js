const themeSwitch = document.getElementById("theme-switch");

const toggleTheme = () => {
  document.body.classList.toggle("dark-mode");
};

themeSwitch.addEventListener("change", toggleTheme);
