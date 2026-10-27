(function () {
  var projects = window.PROJECTS || [];
  var list = document.getElementById("project-list") || document.getElementById("project-preview");
  var filters = document.getElementById("project-filters");
  if (!list) return;

  var base = list.getAttribute("data-base") || "";
  var limit = Number(list.getAttribute("data-limit")) || 0;
  if (limit && projects.length === 0) return;

  var active = "all";

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  function topicsOf(project) {
    return project.topics || [];
  }

  function card(project) {
    var topics = topicsOf(project);
    var tags = topics.map(function (topic) {
      return '<span class="tag">' + escapeHtml(topic) + "</span>";
    }).join("");
    var media = project.image
      ? '<img class="project-card-media" src="' + encodeURI(base + project.slug + "/" + project.image) + '" alt="">'
      : '<div class="project-card-media" aria-hidden="true"></div>';
    return '<a class="project-card" href="' + encodeURI(base + project.slug + "/index.html") + '">' +
      media +
      "<h2>" + escapeHtml(project.title) + "</h2>" +
      "<p>" + escapeHtml(project.summary) + "</p>" +
      (tags ? '<div class="project-card-tags">' + tags + "</div>" : "") +
      "</a>";
  }

  function empty(title, text, action) {
    return '<div class="empty"><h2>' + title + "</h2><p>" + text + "</p>" + (action || "") + "</div>";
  }

  function renderFilters() {
    if (!filters) return;
    var seen = [];
    projects.forEach(function (project) {
      topicsOf(project).forEach(function (topic) {
        if (seen.indexOf(topic) === -1) seen.push(topic);
      });
    });
    var keepFocus = filters.contains(document.activeElement);
    filters.innerHTML = ["All"].concat(seen).map(function (name) {
      var value = name === "All" ? "all" : name;
      var pressed = value === active ? "true" : "false";
      return '<button type="button" class="filter-btn" data-filter="' + escapeHtml(value) + '" aria-pressed="' + pressed + '">' + escapeHtml(name) + "</button>";
    }).join("");
    if (keepFocus && window.CSS && CSS.escape) {
      var next = filters.querySelector('[data-filter="' + CSS.escape(active) + '"]');
      if (next) next.focus();
    }
  }

  function renderList() {
    var visible = projects.filter(function (project) {
      return active === "all" || topicsOf(project).indexOf(active) !== -1;
    });
    var shown = limit ? visible.slice(0, limit) : visible;
    if (shown.length === 0) {
      list.classList.add("is-empty");
      list.innerHTML = active === "all"
        ? empty("No projects yet.", "Project write-ups will be listed here.")
        : empty("No projects match.", "Clear the filter to see every project.", '<button type="button" class="btn btn-primary" data-clear>Clear filters</button>');
      return;
    }
    list.classList.remove("is-empty");
    list.removeAttribute("aria-hidden");
    list.innerHTML = shown.map(card).join("");
  }

  function setActive(value) {
    active = value;
    renderFilters();
    renderList();
  }

  if (filters) {
    filters.addEventListener("click", function (event) {
      var button = event.target.closest("button");
      if (!button || !button.hasAttribute("data-filter")) return;
      setActive(button.getAttribute("data-filter"));
    });
  }

  list.addEventListener("click", function (event) {
    var clear = event.target.closest("[data-clear]");
    if (!clear) return;
    setActive("all");
    var all = filters && filters.querySelector('[data-filter="all"]');
    if (all) all.focus();
  });

  renderFilters();
  renderList();
})();
