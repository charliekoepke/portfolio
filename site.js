(function () {
  var contact = document.getElementById("contact-form");
  if (contact) {
    contact.addEventListener("submit", function (event) {
      event.preventDefault();
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
