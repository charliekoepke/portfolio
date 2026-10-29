(function () {
  var projects = window.PROJECTS || [];
  var list = document.getElementById("project-list") || document.getElementById("project-preview");
  if (!list) return;

  var base = list.getAttribute("data-base") || "";
  var limit = Number(list.getAttribute("data-limit")) || 0;
  if (projects.length === 0) return;

  var emptyBox = document.getElementById("project-empty");

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  function card(project) {
    var media = project.image
      ? '<img class="project-card-media" src="' + encodeURI(base + project.slug + "/" + project.image) + '" alt="">'
      : '<div class="project-card-media" aria-hidden="true"><span>Image</span></div>';
    var heading = list.id === "project-preview" || limit ? "h3" : "h2";
    var title = escapeHtml(project.title);
    var href = encodeURI(base + project.slug + "/index.html");
    return '<li class="project-card">' +
      '<div class="project-card-body">' +
      "<" + heading + ">" + title + "</" + heading + ">" +
      "<p>" + escapeHtml(project.summary) + "</p>" +
      '<a class="btn btn-primary" href="' + href + '">See More<span class="visually-hidden"> about ' + title + "</span></a>" +
      "</div>" +
      media +
      "</li>";
  }

  var slugList = (list.getAttribute("data-slugs") || "")
    .split(",")
    .map(function (slug) { return slug.trim(); })
    .filter(Boolean);
  var shown = slugList.length
    ? slugList.map(function (slug) {
        for (var i = 0; i < projects.length; i++) {
          if (projects[i].slug === slug) return projects[i];
        }
        return null;
      }).filter(Boolean)
    : (limit ? projects.slice(0, limit) : projects);
  list.classList.remove("is-empty");
  list.removeAttribute("aria-hidden");
  if (emptyBox) emptyBox.hidden = true;
  list.innerHTML = shown.map(card).join("");
})();
