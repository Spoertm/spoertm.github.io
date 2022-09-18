function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
  let isDarkMode = document.documentElement.classList.contains("dark");
  localStorage.setItem("darkmode", isDarkMode.toString());
}

function setDarkMode(isDarkMode) {
  if (isDarkMode === "true") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkmode", "true");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkmode", "false");
  }
}

function initPage() {
  let isDarkModePreference = localStorage.getItem("darkmode");
  if (isDarkModePreference === null) {
    localStorage.setItem("darkmode", "false");
    isDarkModePreference = false;
  }

  setDarkMode(isDarkModePreference);
}
