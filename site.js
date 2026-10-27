(function () {
  var contact = document.getElementById("contact-form");
  var formAlert = document.getElementById("form-alert");
  var formAlertTitle = document.getElementById("form-alert-title");
  var formAlertBody = document.getElementById("form-alert-body");

  function showFormAlert(success) {
    if (!formAlert || !formAlertTitle || !formAlertBody) return;
    formAlertTitle.textContent = success ? "Sent Successfully" : "An Error Occurred";
    formAlertBody.textContent = success
      ? "Thank you for reaching out! I will get back to you as soon as I am able."
      : "Please try again in a moment";
    formAlert.classList.toggle("alert-success", success);
    formAlert.classList.toggle("alert-error", !success);
    formAlert.setAttribute("role", success ? "status" : "alert");
    formAlert.hidden = false;
    formAlert.scrollIntoView({ block: "nearest" });
  }

  if (formAlert) {
    var dismissAlert = formAlert.querySelector("button");
    if (dismissAlert) {
      dismissAlert.addEventListener("click", function () {
        formAlert.hidden = true;
        var send = document.querySelector("#contact-form button");
        if (send) send.focus();
      });
    }
    if (new URLSearchParams(window.location.search).get("sent") === "1") {
      showFormAlert(true);
      var url = new URL(window.location.href);
      url.searchParams.delete("sent");
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    }
  }

  if (contact) {
    contact.addEventListener("submit", function (event) {
      event.preventDefault();
      var send = contact.querySelector('[type="submit"]');
      if (send) send.disabled = true;
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(contact)
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (!data || data.success !== true) throw new Error("send failed");
          contact.reset();
          showFormAlert(true);
        })
        .catch(function () {
          showFormAlert(false);
        })
        .then(function () {
          if (send) send.disabled = false;
        });
    });
  }

  var root = document.documentElement;
  var button = document.querySelector(".menu-button");
  var nav = document.getElementById("primary-nav");
  var label = button && button.querySelector(".menu-label");
  var wide = window.matchMedia("(min-width: 48rem)");

  if (!button || !nav || !label) return;

  root.classList.add("js");

  function setOpen(open) {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    label.textContent = open ? "Close menu" : "Open menu";
    nav.classList.toggle("is-open", open);
    root.classList.toggle("nav-open", open);
  }

  function sync() {
    if (wide.matches) setOpen(false);
  }

  button.addEventListener("click", function () {
    var open = button.getAttribute("aria-expanded") !== "true";
    setOpen(open);
    if (open) {
      var first = nav.querySelector("a");
      if (first) first.focus();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape" || button.getAttribute("aria-expanded") !== "true") return;
    setOpen(false);
    button.focus();
  });

  var blanket = document.querySelector(".nav-blanket");
  if (blanket) {
    blanket.addEventListener("click", function () {
      setOpen(false);
      button.focus();
    });
  }

  wide.addEventListener("change", sync);
  sync();
})();
