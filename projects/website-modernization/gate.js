(function () {
  var PASSWORD = "ckportfolio-unlock";
  var KEY = "study-website-modernization";
  var gate = document.getElementById("study-gate");
  var study = document.getElementById("study-body");
  var form = document.getElementById("study-gate-form");
  var input = document.getElementById("study-password");
  var error = document.getElementById("study-password-error");
  if (!gate || !study || !form || !input || !error) return;

  function remember(open) {
    try {
      if (open) sessionStorage.setItem(KEY, "open");
    } catch (err) {}
    document.documentElement.dataset.studyLock = open ? "open" : "locked";
  }

  function showError() {
    input.classList.add("is-error");
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", "study-password-error");
    error.hidden = false;
    input.focus();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (input.value === PASSWORD) {
      input.classList.remove("is-error");
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
      error.hidden = true;
      remember(true);
      var title = study.querySelector("h1");
      if (title) title.focus();
      return;
    }
    showError();
  });
})();
