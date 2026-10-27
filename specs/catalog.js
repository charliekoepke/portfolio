(function () {
  const paths = {
    search: '<circle cx="11" cy="11" r="6"></circle><path d="M16 16 L20 20"></path>',
    menu: '<path d="M4 7 h16 M4 12 h16 M4 17 h16"></path>',
    close: '<path d="M6 6 L18 18 M18 6 L6 18"></path>',
    download: '<path d="M12 4 v10 M8 10 l4 4 4-4 M5 19 h14"></path>',
    account: '<circle cx="12" cy="9" r="3"></circle><path d="M6 19 c1.5-3 3.5-4.5 6-4.5 s4.5 1.5 6 4.5"></path>',
    document: '<path d="M7 3 h7 l4 4 v14 H7 z M14 3 v4 h4"></path>',
    chevron: '<path d="M6 9 l6 6 6-6"></path>',
    chevronRight: '<path d="M9 6 l6 6 -6 6"></path>',
    external: '<path d="M7 17 L17 7 M9 7 h8 v8"></path>',
    linkedin: '<rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M8 11 v5"></path><path d="M8 8 h0.01"></path><path d="M12 16 v-3.5 a2.5 2.5 0 0 1 5 0 V16"></path>',
    mail: '<rect x="3" y="6" width="18" height="12" rx="2"></rect><path d="M3 7 l9 6 9-6"></path>'
  };

  const linkedinSrc = new URL("../images/linkedin.webp", document.currentScript.src).href;

  function icon(name, size) {
    const small = size && size !== 24;
    return '<svg class="icon' + (small ? " icon-sm" : "") + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + paths[name] + "</svg>";
  }

  function state(label, html, wide) {
    return '<figure class="state' + (wide ? " state-wide" : "") + '"><figcaption>' + label + '</figcaption><div class="state-body">' + html + "</div></figure>";
  }

  function specimen(id, title, body, level) {
    const tag = level === 2 ? "h2" : "h3";
    return '<section class="specimen" id="' + id + '"><' + tag + ">" + title + "</" + tag + '><div class="states">' + body + "</div></section>";
  }

  function group(id, title, body, single) {
    if (single) return body;
    return '<section class="group" id="group-' + id + '"><h2>' + title + "</h2>" + body + "</section>";
  }

  function button(variant, label, mode) {
    const classes = ["btn", "btn-" + variant];
    let extra = "";
    if (mode === "hover") classes.push("is-hover");
    if (mode === "pressed") classes.push("is-pressed");
    if (mode === "focus") classes.push("is-focus");
    if (mode === "disabled") extra = " disabled";
    else if (mode) extra = ' tabindex="-1"';
    return '<button type="button" class="' + classes.join(" ") + '"' + extra + ">" + label + "</button>";
  }

  function iconButton(variant, name, label, mode) {
    const classes = ["icon-btn", "icon-btn-" + variant];
    let extra = ' aria-label="' + label + '"';
    if (mode === "hover") classes.push("is-hover");
    if (mode === "pressed") classes.push("is-pressed");
    if (mode === "focus") classes.push("is-focus");
    if (mode === "disabled") extra += " disabled";
    else if (mode) extra += ' tabindex="-1"';
    return '<button type="button" class="' + classes.join(" ") + '"' + extra + ">" + icon(name) + "</button>";
  }

  function lozenge(kind, text) {
    return '<span class="lozenge lozenge-' + kind + '">' + text + "</span>";
  }

  function field(id, label, control, help) {
    return '<div class="field-block"><label class="field-label" for="' + id + '">' + label + "</label>" + control + (help || "") + "</div>";
  }

  function input(id, attrs) {
    return '<input class="field" id="' + id + '" ' + attrs + ">";
  }

  const groups = {
    atoms: function (level) {
      const buttonModes = ["", "hover", "pressed", "focus", "disabled"];
      const buttonNames = ["Resting", "Hover", "Pressed", "Focus", "Disabled"];
      let buttons = "";
      ["primary", "secondary"].forEach(function (variant) {
        const word = variant === "primary" ? "Primary" : "Secondary";
        const label = variant === "primary" ? "Save" : "Cancel";
        buttonModes.forEach(function (mode, index) {
          const sample = button(variant, label, mode);
          buttons += state(word + ", " + buttonNames[index].toLowerCase(), mode === "focus" ? '<div class="on-page">' + sample + "</div>" : sample);
        });
      });
      buttons += state("Primary and secondary", '<div class="pair">' + button("primary", "Save") + button("secondary", "Cancel") + "</div>", true);

      let icons = "";
      [
        ["primary", "Primary"],
        ["secondary", "Secondary"],
        ["quiet", "Quiet"]
      ].forEach(function (item) {
        const modes = item[0] === "quiet" ? ["", "hover", "focus", "disabled"] : buttonModes;
        const names = item[0] === "quiet" ? ["Resting", "Hover", "Focus", "Disabled"] : buttonNames;
        modes.forEach(function (mode, index) {
          icons += state(item[1] + ", " + names[index].toLowerCase(), iconButton(item[0], "search", "Search", mode));
        });
      });
      icons += state("Starting set", '<div class="row">' + ["search", "menu", "close", "download", "account", "document"].map(function (name) {
        const label = name.charAt(0).toUpperCase() + name.slice(1);
        return iconButton("quiet", name, label);
      }).join("") + "</div>", true);

      const checks = [
        state("Unchecked", '<label class="check"><input type="checkbox"> <span class="check-box"></span> Subscribe to updates</label>'),
        state("Hover, unchecked", '<label class="check is-hover"><input type="checkbox" tabindex="-1"> <span class="check-box"></span> Subscribe to updates</label>'),
        state("Checked", '<label class="check"><input type="checkbox" checked> <span class="check-box"></span> Subscribe to updates</label>'),
        state("Indeterminate", '<label class="check"><input type="checkbox" data-indeterminate tabindex="-1"> <span class="check-box"></span> Select all projects</label>'),
        state("Hover, checked", '<label class="check is-hover"><input type="checkbox" checked tabindex="-1"> <span class="check-box"></span> Subscribe to updates</label>'),
        state("Focus", '<label class="check is-focus"><input type="checkbox" checked tabindex="-1"> <span class="check-box"></span> Subscribe to updates</label>'),
        state("Disabled, unchecked", '<label class="check"><input type="checkbox" disabled> <span class="check-box"></span> Subscribe to updates</label>'),
        state("Disabled, checked", '<label class="check"><input type="checkbox" checked disabled> <span class="check-box"></span> Subscribe to updates</label>')
      ].join("");

      const radios = state("Default, Standard selected", '<fieldset class="fieldset"><legend>Case study length</legend><label class="radio"><input type="radio" name="length" value="short"> <span class="radio-mark"></span> Short</label><label class="radio"><input type="radio" name="length" value="standard" checked> <span class="radio-mark"></span> Standard</label><label class="radio"><input type="radio" name="length" value="deep"> <span class="radio-mark"></span> In depth</label></fieldset>');
      const radiosDisabled = state("Disabled", '<fieldset class="fieldset"><legend>Case study length</legend><label class="radio"><input type="radio" name="length-off" disabled> <span class="radio-mark"></span> Short</label><label class="radio"><input type="radio" name="length-off" checked disabled> <span class="radio-mark"></span> Standard</label></fieldset>');

      const toggles = [
        state("Off", '<label class="toggle"><input type="checkbox" role="switch"> <span class="toggle-track"></span> Show draft projects</label>'),
        state("On", '<label class="toggle"><input type="checkbox" role="switch" checked> <span class="toggle-track"></span> Show draft projects</label>'),
        state("Focus", '<label class="toggle is-focus"><input type="checkbox" role="switch" checked tabindex="-1"> <span class="toggle-track"></span> Show draft projects</label>'),
        state("Disabled, off", '<label class="toggle"><input type="checkbox" role="switch" disabled> <span class="toggle-track"></span> Show draft projects</label>'),
        state("Disabled, on", '<label class="toggle"><input type="checkbox" role="switch" checked disabled> <span class="toggle-track"></span> Show draft projects</label>')
      ].join("");

      const email = field("email", "Email address (required)", input("email", 'type="email" placeholder="name@domain.com" autocomplete="email"'), '<p class="help" id="email-help">Used for project inquiries.</p>');
      const emailHover = field("email-hover", "Email address (required)", input("email-hover", 'type="email" class="field is-hover" placeholder="name@domain.com" tabindex="-1"'), '<p class="help">Used for project inquiries.</p>');
      const emailFocus = field("email-focus", "Email address (required)", input("email-focus", 'type="email" value="ada@agency.com" tabindex="-1"'), "");
      const emailError = field("email-error", "Email address (required)", input("email-error", 'type="email" class="field is-error" value="ada@agency" aria-invalid="true" aria-describedby="email-error-text"'), '<p class="error-text" id="email-error-text">Enter an email address with an @ and a domain.</p>');
      const emailDisabled = field("email-disabled", "Email address (required)", input("email-disabled", 'type="email" value="ada@agency.com" disabled'), '<p class="help">Used for project inquiries.</p>');

      const area = field("summary", "Project summary", '<textarea class="field" id="summary" placeholder="What changed for the care team"></textarea>', "");
      const areaError = field("summary-error", "Project summary", '<textarea class="field is-error" id="summary-error" aria-invalid="true" aria-describedby="summary-error-text">What changed</textarea>', '<p class="error-text" id="summary-error-text">Add the outcome for the care team.</p>');
      const areaDisabled = field("summary-off", "Project summary", '<textarea class="field" id="summary-off" disabled>What changed for the care team</textarea>', "");

      return [
        specimen("button", "Button", buttons, level),
        specimen("badge", "Badge", [
          state("Neutral", '<span class="count-line">Comments <span class="badge badge-neutral">3</span></span>'),
          state("Navy", '<span class="count-line">Notes <span class="badge badge-navy">3</span></span>'),
          state("Important", '<span class="count-line">Comments <span class="badge badge-important">3</span></span>'),
          state("Over 99", '<span class="count-line">Comments <span class="badge badge-neutral">99+</span></span>')
        ].join(""), level),
        specimen("checkbox", "Checkbox", checks, level),
        specimen("icon-button", "Icon button", icons, level),
        specimen("input", "Input", [
          state("Resting", email),
          state("Hover", emailHover.replace('class="field"', 'class="field is-hover"')),
          state("Focus", '<div class="on-page">' + field("email-focus", "Email address (required)", '<input class="field is-focus" id="email-focus" type="email" value="ada@agency.com" tabindex="-1">', "") + "</div>"),
          state("Error", emailError),
          state("Disabled", emailDisabled)
        ].join(""), level),
        specimen("textarea", "Textarea", [
          state("Resting", area),
          state("Error", areaError),
          state("Disabled", areaDisabled)
        ].join(""), level),
        specimen("radio", "Radio", radios + radiosDisabled, level),
        specimen("toggle", "Toggle", toggles, level),
        specimen("avatar", "Avatar", [
          state("Small, 24px", '<span class="avatar avatar-sm" role="img" aria-label="John Doe">JD</span>'),
          state("Medium, 32px", '<span class="avatar avatar-md" role="img" aria-label="John Doe">JD</span>'),
          state("Large, 40px", '<span class="avatar avatar-lg" role="img" aria-label="John Doe">JD</span>')
        ].join(""), level),
        specimen("lozenge", "Lozenge", [
          state("Neutral", lozenge("neutral", "Not started")),
          state("Success", lozenge("success", "Complete")),
          state("Warning", lozenge("warning", "At risk")),
          state("Danger", lozenge("danger", "Blocked")),
          state("Info", lozenge("info", "In progress"))
        ].join(""), level),
        specimen("tag", "Tag", state("Removable", '<div class="row row-tight"><span class="tag">Research <button type="button" class="tag-remove" aria-label="Remove Research">' + icon("close", 16) + '</button></span><span class="tag">Clinical <button type="button" class="tag-remove" aria-label="Remove Clinical">' + icon("close", 16) + "</button></span></div>") + state("Link", '<a class="tag tag-link" href="#tag">Clinical</a>'), level),
        specimen("spinner", "Spinner", [
          state("16px", '<span class="spinner-line" role="status"><span class="spinner spinner-sm"></span> Loading</span>'),
          state("24px", '<span class="spinner-line" role="status"><span class="spinner spinner-md"></span> Loading</span>'),
          state("Inside a busy button", '<button type="button" class="btn btn-primary" aria-busy="true">' + '<span class="spinner-line"><span class="spinner spinner-sm"></span> Loading</span></button>')
        ].join(""), level),
        specimen("link", "Link", [
          state("Resting", '<p class="type-body">A care team reads results without the noise. <a class="text-link" href="#link">Read the case study</a></p>'),
          state("Hover", '<a class="text-link is-hover" href="#link" tabindex="-1">Read the case study</a>'),
          state("Focus", '<div class="on-page"><a class="text-link is-focus" href="#link" tabindex="-1">Read the case study</a></div>'),
          state("Opens in a new tab", '<a class="text-link with-icon" href="#link">Design notes ' + icon("external", 16) + '<span class="visually-hidden">, opens in a new tab</span></a>')
        ].join(""), level)
      ].join("");
    },
    molecules: function (level) {
      return [
        specimen("tabs", "Tabs", state("Overview selected", '<div class="tabset"><div class="tabs" role="tablist" aria-label="Case study"><button type="button" class="tab" role="tab" id="tab-overview" aria-selected="true" aria-controls="panel-overview">Overview</button><button type="button" class="tab" role="tab" id="tab-process" aria-selected="false" aria-controls="panel-process" tabindex="-1">Process</button><button type="button" class="tab" role="tab" id="tab-outcome" aria-selected="false" aria-controls="panel-outcome" tabindex="-1">Outcome</button></div><div class="tab-panel" role="tabpanel" id="panel-overview" aria-labelledby="tab-overview"><p>How a care team reads results without the noise.</p></div><div class="tab-panel" role="tabpanel" id="panel-process" aria-labelledby="tab-process" hidden><p>The steps from intake to the published case study.</p></div><div class="tab-panel" role="tabpanel" id="panel-outcome" aria-labelledby="tab-outcome" hidden><p>Fewer handoffs for the care team.</p></div></div>', true), level),
        specimen("breadcrumbs", "Breadcrumbs", state("Current page", '<nav class="crumbs" aria-label="Breadcrumbs"><a class="text-link" href="#breadcrumbs">Work</a><span class="sep" aria-hidden="true">/</span><a class="text-link" href="#breadcrumbs">Clinical</a><span class="sep" aria-hidden="true">/</span><span aria-current="page">Intake redesign</span></nav>'), level),
        specimen("card", "Card", [
          state("Horizontal, media on the left", '<ul class="project-list"><li class="project-card"><div class="project-card-body"><h3>Project name</h3><p>A short description of the project.</p><a class="btn btn-primary" href="#card">See More<span class="visually-hidden"> about Project name</span></a></div><div class="project-card-media" aria-hidden="true"><span>Image</span></div></li></ul>', true),
          state("Stacked, media on top", '<ul class="preview-row"><li class="project-card"><div class="project-card-body"><h3>Project name</h3><p>A short description of the project.</p><a class="btn btn-primary" href="#card">See More<span class="visually-hidden"> about Project name</span></a></div><div class="project-card-media" aria-hidden="true"><span>Image</span></div></li></ul>')
        ].join(""), level),
        specimen("dropdown-menu", "Dropdown menu", state("Closed", iconButton("quiet", "menu", "Project actions")) + state("Open", '<div><button type="button" class="icon-btn icon-btn-quiet" aria-expanded="true" tabindex="-1" aria-label="Project actions">' + icon("menu") + '</button><div class="menu" role="menu"><button type="button" class="menu-item" role="menuitem">Edit</button><button type="button" class="menu-item is-focus" role="menuitem" tabindex="-1">Duplicate</button><button type="button" class="menu-item danger" role="menuitem">Archive</button></div></div>'), level),
        specimen("modal-dialog", "Modal dialog", state("Open", '<div class="stage"><div class="blanket"></div><div class="dialog" role="dialog" aria-modal="true" aria-labelledby="delete-title"><div class="dialog-top"><button type="button" class="icon-btn icon-btn-quiet" aria-label="Close">' + icon("close") + '</button></div><p class="type-title" id="delete-title">Delete this project?</p><p>Intake redesign will be removed from the site.</p><div class="dialog-actions">' + button("secondary", "Cancel") + button("primary", "Delete") + "</div></div></div>", true) + state("Live dialog", '<button type="button" class="btn btn-primary" data-open-dialog="live-dialog">Delete</button><dialog id="live-dialog" aria-labelledby="live-delete-title"><div class="dialog-top"><button type="button" class="icon-btn icon-btn-quiet" data-close-dialog aria-label="Close">' + icon("close") + '</button></div><p class="type-title" id="live-delete-title">Delete this project?</p><p>Intake redesign will be removed from the site.</p><div class="dialog-actions"><button type="button" class="btn btn-secondary" data-close-dialog>Cancel</button><button type="button" class="btn btn-primary" data-close-dialog>Delete</button></div></dialog>'), level),
        specimen("alert", "Alert", [
          state("Success, dismissible", '<div class="alert alert-success" role="status"><div class="alert-row"><div><p class="alert-title">Sent Successfully</p><p>Thank you for reaching out! I will get back to you as soon as I am able.</p></div><button type="button" class="icon-btn icon-btn-quiet" aria-label="Dismiss">' + icon("close") + "</button></div></div>", true),
          state("Error, dismissible", '<div class="alert alert-error" role="alert"><div class="alert-row"><div><p class="alert-title">An Error Occurred</p><p>Please try again in a moment</p></div><button type="button" class="icon-btn icon-btn-quiet" aria-label="Dismiss">' + icon("close") + "</button></div></div>", true),
          state("Warning, stays open", '<div class="alert alert-warning" role="region" aria-label="Warning"><p class="alert-title">Warning</p><p>This draft is unpublished.</p></div>', true)
        ].join(""), level),
        specimen("banner", "Banner", [
          state("Warning", '<div class="banner banner-warning" role="status"><span aria-hidden="true">' + icon("document") + '</span><p>Warning. We\'ve lost the connection. Your edits are saved on this device. <a class="text-link" href="#banner">Check status</a></p></div>', true),
          state("Error", '<div class="banner banner-error" role="alert"><span aria-hidden="true">' + icon("document") + '</span><p>Error. The site can\'t load projects right now.</p></div>', true)
        ].join(""), level),
        specimen("flag", "Flag", [
          state("Success", '<div class="flag" role="status"><div class="flag-row"><p class="flag-title flag-success">Project saved.</p><button type="button" class="icon-btn icon-btn-quiet" aria-label="Dismiss">' + icon("close") + "</button></div></div>"),
          state("Warning", '<div class="flag" role="alert"><div class="flag-row"><p class="flag-title flag-warning">Warning. This draft is unpublished.</p><button type="button" class="icon-btn icon-btn-quiet" aria-label="Dismiss">' + icon("close") + "</button></div></div>"),
          state("Error", '<div class="flag" role="alert"><div class="flag-row"><p class="flag-title flag-error">Error. The project was not saved.</p><button type="button" class="icon-btn icon-btn-quiet" aria-label="Dismiss">' + icon("close") + "</button></div></div>")
        ].join(""), level),
        specimen("inline-message", "Inline message", [
          state("Info", '<div class="message message-info"><span aria-hidden="true">' + icon("document") + '</span><div><p class="flag-title">This case study is still a draft.</p><p>Publish it when the outcome section is ready.</p><p><a class="text-link" href="#inline-message">Edit the draft</a></p></div></div>', true),
          state("Warning", '<div class="message message-warning"><span aria-hidden="true">' + icon("document") + '</span><div><p class="flag-title">Warning. The outcome section is empty.</p><p>Add what changed for the care team.</p></div></div>', true),
          state("Error", '<div class="message message-error"><span aria-hidden="true">' + icon("document") + '</span><div><p class="flag-title">Error. Fix 2 fields before sending.</p><p><a class="text-link" href="#email-error">Email address</a></p></div></div>', true)
        ].join(""), level),
        specimen("tooltip", "Tooltip", state("Hover and focus", '<div class="tooltip-demo">' + iconButton("quiet", "search", "Search") + '<span class="tooltip" role="tooltip">Search</span></div>'), level),
        specimen("form", "Form", state("Default", '<form class="form"><div class="field-block"><label class="field-label" for="form-email">Email address (required)</label><input class="field" id="form-email" type="email" placeholder="name@domain.com" autocomplete="email"></div><div class="field-block"><label class="field-label" for="form-message">Message</label><textarea class="field" id="form-message"></textarea></div><div class="form-actions">' + button("primary", "Send message") + "</div></form>", true), level),
        specimen("select", "Select", state("Closed", field("role", "Role", '<div class="control"><select class="field" id="role"><option>Design</option><option>Research</option><option>Engineering</option></select><span class="field-chevron">' + icon("chevron", 16) + "</span></div>", "")) + state("Open", '<div class="menu" role="listbox" aria-label="Role"><button type="button" class="menu-item is-focus" role="option" aria-selected="true">Design</button><button type="button" class="menu-item" role="option" aria-selected="false">Research</button><button type="button" class="menu-item" role="option" aria-selected="false">Engineering</button></div>'), level),
        specimen("date-picker", "Date picker", state("Closed", field("published", "Published on", '<div class="control"><input class="field" id="published" value="2026-04-12"><button type="button" class="icon-btn icon-btn-quiet field-end" aria-label="Choose a date">' + icon("document") + "</button></div>", '<p class="help">Use YYYY-MM-DD.</p>')) + state("Open, 12 April selected", '<div class="calendar"><div class="calendar-title"><button type="button" class="icon-btn icon-btn-quiet" aria-label="Previous month"><span style="display:inline-flex;transform:rotate(90deg)">' + icon("chevron", 16) + '</span></button><span>April 2026</span><button type="button" class="icon-btn icon-btn-quiet" aria-label="Next month"><span style="display:inline-flex;transform:rotate(-90deg)">' + icon("chevron", 16) + '</span></button></div><div class="calendar-head"><span class="dow">Su</span><span class="dow">Mo</span><span class="dow">Tu</span><span class="dow">We</span><span class="dow">Th</span><span class="dow">Fr</span><span class="dow">Sa</span></div><div class="calendar-grid" id="april-2026"></div></div>'), level),
        specimen("pagination", "Pagination", state("First page", '<nav class="pages" aria-label="Pagination"><span class="page-btn circle page-btn-current" aria-current="page">1</span><a class="page-btn circle" href="#pagination">2</a><a class="page-btn circle" href="#pagination">3</a><a class="page-btn circle" href="#pagination">4</a><a class="page-btn circle" href="#pagination">5</a><a class="page-btn" href="#pagination">Next</a></nav>') + state("Middle page", '<nav class="pages" aria-label="Pagination example"><a class="page-btn" href="#pagination">Previous</a><a class="page-btn circle" href="#pagination">1</a><a class="page-btn circle" href="#pagination">2</a><span class="page-btn circle page-btn-current" aria-current="page">3</span><a class="page-btn circle" href="#pagination">4</a><a class="page-btn circle" href="#pagination">5</a><a class="page-btn" href="#pagination">Next</a></nav>'), level),
        specimen("inline-edit", "Inline edit", state("Read", '<button type="button" class="edit-read" data-edit-open aria-label="Edit project title">Intake redesign</button>') + state("Editing", '<div class="row"><input class="field" value="Intake redesign" aria-label="Project title" style="width:240px"><div class="row row-tight">' + button("primary", "Save") + button("secondary", "Cancel") + "</div></div>", true), level),
        specimen("search", "Search", state("Empty", field("search-projects", "Search projects", '<div class="control has-start"><span class="field-icon">' + icon("search") + '</span><input class="field" id="search-projects" type="search" placeholder="Project or client"></div>', "")) + state("With a clear control", field("search-filled", "Search projects", '<div class="control has-start"><span class="field-icon">' + icon("search") + '</span><input class="field" id="search-filled" type="search" value="Clinical"><button type="button" class="icon-btn icon-btn-quiet field-end" aria-label="Clear search">' + icon("close") + "</button></div>", "")), level),
        specimen("popup", "Popup", state("Open", '<div><button type="button" class="btn btn-secondary" aria-expanded="true">Filters</button><div class="popup"><div class="field-block"><label class="field-label" for="popup-role">Role</label><select class="field" id="popup-role"><option>Design</option><option>Research</option><option>Engineering</option></select></div><div class="form-actions">' + button("primary", "Apply") + "</div></div></div>"), level),
        specimen("progress-bar", "Progress bar", state("40 percent", '<div><div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-label="Uploading images"><div class="progress-fill"></div></div><div class="progress-meta"><span>Uploading images</span><span>40 percent</span></div></div>', true), level),
        specimen("side-navigation", "Side navigation", state("Work current", '<nav class="side-nav" aria-label="Sections"><a class="side-link" href="#side-navigation" aria-current="page">Work</a><a class="side-link is-hover" href="#side-navigation" tabindex="-1">About</a><a class="side-link" href="#side-navigation">Notes</a></nav>') + state("Narrow, menu closed", iconButton("quiet", "menu", "Open menu")), level),
        specimen("empty-state", "Empty state", state("No projects", '<div class="empty"><span aria-hidden="true">' + icon("document") + '</span><p class="type-title">No projects yet.</p><p>Add a case study to show it here.</p>' + button("primary", "Add a project") + "</div>") + state("No filter matches", '<div class="empty"><p class="type-title">No projects match.</p><p>Clear the filters to see every project.</p>' + button("primary", "Clear filters") + "</div>"), level)
      ].join("");
    },
    organisms: function (level) {
      return [
        specimen("table", "Table", state("Default", '<table class="data-table"><caption>Projects</caption><thead><tr><th scope="col">Project</th><th scope="col"><button type="button" class="edit-read" aria-label="Year, sorted descending">Year</button></th><th scope="col">Status</th></tr></thead><tbody><tr><td>Intake redesign</td><td>2026</td><td>' + lozenge("info", "In progress") + '</td></tr><tr><td>Results view</td><td>2025</td><td>' + lozenge("success", "Complete") + '</td></tr><tr><td>Handoff notes</td><td>2024</td><td>' + lozenge("danger", "Blocked") + "</td></tr></tbody></table>", true), level),
        specimen("navigation", "Navigation", state("Work current", '<header class="top-nav"><a class="site-name" href="#navigation">Portfolio</a><nav aria-label="Primary" class="row"><a class="nav-link" href="#navigation" aria-current="page">Work</a><a class="nav-link" href="#navigation">About</a><a class="nav-link" href="#navigation">Notes</a></nav></header>', true) + state("Narrow", '<header class="top-nav"><a class="site-name" href="#navigation">Portfolio</a>' + iconButton("quiet", "menu", "Open menu") + "</header>", true), level),
        specimen("page-header", "Page header", state("With actions", '<header class="page-header"><nav class="crumbs" aria-label="Breadcrumbs"><a class="text-link" href="#page-header">Work</a><span class="sep">/</span><a class="text-link" href="#page-header">Clinical</a></nav><p class="type-page">Intake redesign</p><p class="desc">How a care team reads results without the noise.</p><div class="actions">' + button("primary", "View project") + button("secondary", "Contact") + "</div></header>", true), level),
        specimen("content-panel", "Content panel", state("With a link", '<section class="panel"><p class="type-title">Role</p><p>Product design for clinical tools. <a class="text-link" href="#content-panel">Read the bio</a></p></section>'), level),
        specimen("chat-panel", "Chat panel", state("Comments", '<div aria-label="Comments"><article class="comment"><span class="avatar avatar-md" aria-hidden="true">CK</span><div><p class="comment-name">CK <time datetime="2026-04-02">2 Apr 2026</time></p><p>The intake flow needs a quieter confirmation.</p></div></article><article class="comment"><span class="avatar avatar-md" aria-hidden="true">JD</span><div><p class="comment-name">John Doe <time datetime="2026-04-03">3 Apr 2026</time></p><p>The confirmation can stay on this page.</p></div></article>' + field("comment", "Comment", '<textarea class="field" id="comment"></textarea>', "") + '<div class="form-actions">' + button("primary", "Add comment") + "</div></div>", true), level),
        specimen("dashboard-card", "Dashboard card", state("With a lozenge", '<article class="card"><p class="card-label">Projects</p><p class="card-value">6</p>' + lozenge("info", "In progress") + "</article>") + state("With a badge", '<article class="card"><p class="card-label">Projects</p><p class="card-value count-line">6 <span class="badge badge-neutral">+2</span></p></article>'), level),
        specimen("work-item-header", "Work item header", state("With status and notes", '<header class="work-head"><div><p class="work-key">CLIN-12</p><p class="work-title"><a class="text-link" href="#work-item-header">Intake redesign</a> ' + lozenge("info", "In progress") + ' <span class="count-line">Notes <span class="badge badge-navy">3</span></span></p></div>' + button("primary", "View project") + "</header>", true), level),
        specimen("footer", "Footer", state("Name, contact icons, and site links", '<footer class="site-footer"><div class="footer-bar"><div class="footer-identity"><p class="footer-name">Charlie Koepke</p><nav class="footer-links" aria-label="Contact"><a class="icon-link" href="https://www.linkedin.com/in/charliejunkoepke/"><img src="' + linkedinSrc + '" alt="LinkedIn"></a><a class="icon-link" href="mailto:charliejunkoepke@gmail.com">' + icon("mail") + '<span class="visually-hidden">Email</span></a></nav></div><nav class="footer-nav" aria-label="Site"><a href="#footer" aria-current="page">Home</a><a href="#footer">Projects</a><a href="#footer">About</a></nav></div></footer>', true), level)
      ].join("");
    },
    patterns: function (level) {
      const card = '<article class="card"><p class="card-label">Projects</p><p class="card-value">6</p></article>';
      return [
        specimen("canvas-content-flow", "Canvas content flow", state("Stacked regions, 32px apart", '<div class="stack"><header class="top-nav"><a class="site-name" href="#canvas-content-flow">Portfolio</a><a class="nav-link" href="#canvas-content-flow" aria-current="page">Work</a></header><header class="page-header"><p class="type-page">Work</p></header><div class="cards">' + card + card + '</div><p class="type-body">Projects table</p></div>', true), level),
        specimen("three-column-layout", "Three column layout", state("Side navigation, main, aside", '<div class="layout layout-3"><nav class="layout-col" aria-label="Sections"><a class="side-link" href="#three-column-layout" aria-current="page">Work</a><a class="side-link" href="#three-column-layout">About</a></nav><div class="layout-col"><p class="type-title">Intake redesign</p><p>The case study stays in the main column.</p></div><aside class="panel" aria-label="Role"><p class="type-title">Role</p><p>Product design for clinical tools.</p></aside></div>', true), level),
        specimen("responsive-grid", "Responsive grid", [
          state("Narrow, 4 columns, cards stack", '<div class="cards" style="grid-template-columns:1fr">' + card + card + card + card + "</div>", true),
          state("Medium, 8 columns, two cards per row", '<div class="cards" style="grid-template-columns:1fr 1fr">' + card + card + card + card + "</div>", true),
          state("Wide, 12 columns, four cards", '<div class="cards">' + card + card + card + card + "</div>", true)
        ].join(""), level),
        specimen("panel-expand-collapse", "Panel expand collapse", state("Collapsed", '<div class="expand"><button type="button" class="expand-btn" aria-expanded="false">Methods ' + icon("chevronRight", 16) + "</button></div>") + state("Expanded", '<div class="expand"><button type="button" class="expand-btn" data-expand aria-expanded="true" aria-controls="methods-body">Methods ' + icon("chevron", 16) + '</button><div class="expand-body" id="methods-body"><p>Interviews with the care team, then a prototype of the results view.</p></div></div>', true), level),
        specimen("form-layout", "Form layout", state("Full page, primary first", '<form class="form"><div class="field-block"><label class="field-label" for="name">Name</label><input class="field" id="name" autocomplete="name"></div><div class="field-block"><label class="field-label" for="layout-email">Email address (required)</label><input class="field" id="layout-email" type="email" autocomplete="email"></div><div class="field-block"><label class="field-label" for="layout-message">Message</label><textarea class="field" id="layout-message"></textarea></div><div class="form-actions">' + button("primary", "Send message") + button("secondary", "Cancel") + "</div></form>", true) + state("Modal actions, primary at the right", '<div class="form-actions right">' + button("secondary", "Cancel") + button("primary", "Save") + "</div>"), level),
        specimen("list-detail", "List detail", state("Intake redesign selected", '<div class="layout layout-list"><nav class="layout-col" aria-label="Projects"><a class="list-link" href="#list-detail" aria-current="true">Intake redesign</a><a class="list-link" href="#list-detail">Results view</a></nav><div class="layout-col"><p class="type-title">Intake redesign</p><p>How a care team reads results without the noise.</p></div></div>', true) + state("Nothing selected", '<div class="empty"><p class="type-title">Select a project.</p><p>Choose a project from the list to read it here.</p></div>'), level),
        specimen("error-handling", "Error handling", state("Field error, submit stays available", field("error-email", "Email address (required)", '<input class="field is-error" id="error-email" type="email" value="ada@agency" aria-invalid="true" aria-describedby="error-email-text">', '<p class="error-text" id="error-email-text">Enter an email address with an @ and a domain.</p>') + '<div class="form-actions">' + button("primary", "Send message") + "</div>") + state("Several fields", '<div class="message message-error"><div><p class="flag-title">Fix 2 fields before sending.</p><p><a class="text-link" href="#error-email">Email address</a></p></div></div>', true) + state("Saved", '<div class="flag" role="status"><p class="flag-title flag-success">Project saved.</p></div>') + state("Lost connection", '<div class="banner banner-warning" role="alert"><p>Warning. We\'ve lost the connection. Your edits are saved on this device.</p></div>', true), level)
      ].join("");
    },
    foundations: function (level) {
      const colors = [
        ["Page", "--color-surface-page"],
        ["Surface", "--color-surface-default"],
        ["Sunken", "--color-surface-sunken"],
        ["Line", "--color-border-default"],
        ["Primary text", "--color-text-primary"],
        ["Secondary text", "--color-text-secondary"],
        ["Muted text", "--color-text-muted"],
        ["Inverse text", "--color-text-inverse"],
        ["Brand", "--color-brand-navy"],
        ["Action", "--color-action-primary"],
        ["Action hover", "--color-action-primary-hover"],
        ["Action pressed", "--color-action-primary-pressed"],
        ["Link", "--color-link"],
        ["Link hover", "--color-link-hover"],
        ["Focus", "--color-focus"],
        ["Disabled fill", "--color-disabled-fill"],
        ["Disabled text", "--color-disabled-text"],
        ["Success", "--color-success"],
        ["Warning", "--color-warning"],
        ["Danger", "--color-danger"],
        ["Info", "--color-info"]
      ];
      const swatches = colors.map(function (item) {
        return '<div class="swatch"><div class="swatch-chip" style="background:var(' + item[1] + ')"></div><p>' + item[0] + "<br>" + item[1] + "</p></div>";
      }).join("");
      const spaces = [8, 16, 24, 32, 40, 48, 64, 80, 96].map(function (step) {
        return '<div class="space-row"><div class="space-bar" style="width:var(--space-' + step + ')"></div><span>--space-' + step + " · " + step + "px</span></div>";
      }).join("");
      return [
        specimen("color", "Color", state("Palette", '<div class="swatches">' + swatches + "</div>", true), level),
        specimen("typography", "Typography", [
          state("Page title, 32px", '<p class="type-page">Intake redesign</p>'),
          state("Section title, 20px", '<p class="type-title">Role</p>'),
          state("Body, 16px", '<p class="type-body">How a care team reads results without the noise.</p>'),
          state("Button label, 14px", button("primary", "Save")),
          state("Badge label, 12px", '<span class="badge badge-neutral">3</span>')
        ].join(""), level),
        specimen("spacing", "Spacing", state("8px scale", '<div class="stack" style="gap:var(--space-16)">' + spaces + "</div>", true), level),
        specimen("radius", "Radius", [
          state("Button, 50px", button("primary", "Save")),
          state("Checkbox, 4px", '<span class="check-box" style="position:static"></span>'),
          state("Field, 4px", '<input class="field" value="name@domain.com" tabindex="-1" aria-label="Radius sample">')
        ].join(""), level),
        specimen("elevation", "Elevation", [
          state("Surface", '<div class="panel"><p>Content panel</p></div>'),
          state("Raised", '<div class="panel shadow-raised"><p>Raised card</p></div>'),
          state("Overlay", '<div class="panel shadow-overlay"><p>Dropdown, popup, flag, or modal</p></div>')
        ].join(""), level),
        specimen("motion", "Motion", state("Durations", '<div class="row"><button type="button" class="btn btn-secondary" data-motion="var(--motion-duration-small)">Play 100ms</button><button type="button" class="btn btn-secondary" data-motion="var(--motion-duration-medium)">Play 350ms</button><button type="button" class="btn btn-secondary" data-motion="var(--motion-duration-large)">Play 700ms</button><span class="motion-dot" id="motion-dot"></span></div>', true), level),
        specimen("opacity", "Opacity", state("Modal blanket, 40 percent", '<div class="stage"><div class="blanket"></div><div class="dialog"><p>The dialog on the blanket is fully opaque.</p></div></div>', true), level),
        specimen("z-index", "Z-index", state("Layer scale", '<ol class="type-body"><li>100 Card</li><li>200 Navigation</li><li>300 Dialog</li><li>400 Modal</li><li>500 Flag</li><li>600 Spotlight</li><li>700 Tooltip</li></ol>'), level),
        specimen("iconography", "Iconography", state("Starting set, action navy", '<div class="row" style="color:var(--color-action-primary)">' + ["search", "menu", "close", "download", "account", "document"].map(function (name) { return icon(name); }).join("") + "</div>") + state("On navy", '<div class="row" style="background:var(--color-action-primary);color:var(--color-text-inverse);padding:var(--space-16)">' + icon("search") + "</div>") + state("Disabled", '<div class="row" style="color:var(--color-disabled-text)">' + icon("search") + "</div>"), level),
        specimen("borders", "Borders", [
          state("Divider", '<div style="width:240px;border-bottom:1px solid var(--color-border-default)"></div>'),
          state("Control border", '<input class="field" aria-label="Border sample" tabindex="-1">'),
          state("Error border", '<input class="field is-error" aria-label="Error border sample" tabindex="-1">')
        ].join(""), level),
        specimen("breakpoints", "Breakpoints", state("Widths", '<ul class="type-body"><li>Narrow, from 0, 4 columns, 16px margin</li><li>Medium, from 48rem, 8 columns, 24px margin</li><li>Wide, from 64rem, 12 columns, 32px margin</li></ul>'), level),
        specimen("grid", "Grid", state("Wide, 12 columns", '<div class="cards" style="grid-template-columns:repeat(12,minmax(0,1fr))">' + Array.from({ length: 12 }, function (_, index) { return '<div class="swatch-chip" style="background:var(--color-surface-sunken)"></div>'; }).join("") + "</div>", true), level)
      ].join("");
    },
    tokens: function (level) {
      const colors = ["--color-surface-page", "--color-surface-default", "--color-surface-sunken", "--color-border-default", "--color-text-primary", "--color-text-secondary", "--color-text-muted", "--color-text-inverse", "--color-brand-navy", "--color-action-primary", "--color-action-primary-hover", "--color-action-primary-pressed", "--color-link", "--color-link-hover", "--color-focus", "--color-disabled-fill", "--color-disabled-text", "--color-success", "--color-success-surface", "--color-warning", "--color-warning-surface", "--color-danger", "--color-danger-surface", "--color-info", "--color-info-surface"];
      const spaces = [8, 16, 24, 32, 40, 48, 64, 80, 96];
      const colorHtml = colors.map(function (name) {
        return '<div class="swatch"><div class="swatch-chip" style="background:var(' + name + ')"></div><p>' + name + "</p></div>";
      }).join("");
      const spaceHtml = spaces.map(function (step) {
        return '<div class="space-row"><div class="space-bar" style="width:var(--space-' + step + ')"></div><span>--space-' + step + "</span></div>";
      }).join("");
      return [
        specimen("color-tokens", "Color tokens", state("Each chip uses its token", '<div class="swatches">' + colorHtml + "</div>", true), level),
        specimen("spacing-tokens", "Spacing tokens", state("Width equals the token", '<div class="stack" style="gap:var(--space-16)">' + spaceHtml + "</div>", true), level),
        specimen("type-tokens", "Type tokens", state("Gafata", '<p class="type-page">Page title</p><p class="type-title">Section title</p><p class="type-body">Body</p>', true), level),
        specimen("other-tokens", "Radius, elevation, motion, layers", state("Named values", '<ul class="type-body"><li>--radius-button 50px, --radius-checkbox 4px, --radius-field 4px</li><li>--elevation-shadow-raised and --elevation-shadow-overlay</li><li>--motion-duration-small 100ms, medium 350ms, large 700ms</li><li>--opacity-blanket 0.4</li><li>--z-card 100 through --z-tooltip 700</li></ul>'), level)
      ].join("");
    }
  };

  function fillCalendar() {
    const grid = document.getElementById("april-2026");
    if (!grid) return;
    let html = "";
    for (let i = 0; i < 3; i += 1) html += '<span class="day"></span>';
    for (let day = 1; day <= 30; day += 1) {
      const selected = day === 12;
      html += '<button type="button" class="day' + (selected ? " day-selected" : "") + '"' + (selected ? ' aria-current="date"' : "") + ">" + day + "</button>";
    }
    grid.innerHTML = html;
  }

  function render() {
    const root = document.getElementById("catalog");
    if (!root) return;
    const names = (document.body.dataset.groups || "").split(",").filter(Boolean);
    const single = names.length === 1;
    const level = single ? 2 : 3;
    root.innerHTML = names.map(function (name) {
      const build = groups[name];
      if (!build) return "";
      const title = name.charAt(0).toUpperCase() + name.slice(1);
      return group(name, title, build(level), single);
    }).join("");
    fillCalendar();
    document.querySelectorAll("input[data-indeterminate]").forEach(function (input) {
      input.indeterminate = true;
    });
    const jump = document.getElementById("jump");
    if (jump) {
      jump.innerHTML = Array.from(root.querySelectorAll(".specimen")).map(function (section) {
        const heading = section.querySelector("h2, h3");
        return '<a href="#' + section.id + '">' + heading.textContent + "</a>";
      }).join("");
    }
  }

  document.addEventListener("click", function (event) {
    const open = event.target.closest("[data-open-dialog]");
    if (open) {
      const dialog = document.getElementById(open.getAttribute("data-open-dialog"));
      if (dialog && dialog.showModal) dialog.showModal();
    }
    const close = event.target.closest("[data-close-dialog]");
    if (close) {
      const dialog = close.closest("dialog");
      if (dialog) dialog.close();
    }
    const tab = event.target.closest('[role="tab"]');
    if (tab) {
      const list = tab.parentElement;
      list.querySelectorAll('[role="tab"]').forEach(function (item) {
        const selected = item === tab;
        item.setAttribute("aria-selected", selected ? "true" : "false");
        item.tabIndex = selected ? 0 : -1;
        if (!selected) item.classList.remove("is-hover");
      });
      const set = list.parentElement;
      set.querySelectorAll('[role="tabpanel"]').forEach(function (panel) {
        panel.hidden = panel.id !== tab.getAttribute("aria-controls");
      });
    }
    const expand = event.target.closest("[data-expand]");
    if (expand) {
      const panel = document.getElementById(expand.getAttribute("aria-controls"));
      const next = expand.getAttribute("aria-expanded") !== "true";
      expand.setAttribute("aria-expanded", next ? "true" : "false");
      if (panel) panel.hidden = !next;
    }
    const motion = event.target.closest("[data-motion]");
    if (motion) {
      const dot = document.getElementById("motion-dot");
      if (!dot) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      dot.style.transition = reduce ? "none" : "transform " + motion.getAttribute("data-motion") + " var(--motion-easing-out)";
      const moved = dot.classList.contains("is-moved");
      dot.classList.toggle("is-moved", !moved);
    }
  });

  document.addEventListener("submit", function (event) {
    if (event.target.closest("#catalog")) event.preventDefault();
  });

  document.addEventListener("keydown", function (event) {
    const tab = event.target.closest && event.target.closest('[role="tab"]');
    if (!tab) return;
    const tabs = Array.from(tab.parentElement.querySelectorAll('[role="tab"]'));
    const index = tabs.indexOf(tab);
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    tabs[next].click();
    tabs[next].focus();
  });

  render();
})();
