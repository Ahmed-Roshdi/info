(function () {
  "use strict";
  var D = window.SITE;
  if (!D) return;
  var VIS = { "public": "Public", "private-profile": "Private profile", archived: "Archived", operational: "Operational", "maintenance-paused": "Maintenance paused" };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function anchor(url, text) {
    var a = el("a", null, text);
    a.href = url;
    a.rel = "noopener noreferrer";
    return a;
  }
  function badge(label, key) {
    var b = el("span", "badge", label);
    b.setAttribute("data-s", (key || label).toLowerCase());
    return b;
  }
  function badges(vis) {
    var row = el("div", "badges");
    [].concat(vis || []).forEach(function (v) { row.appendChild(badge(VIS[v] || v, v)); });
    return row;
  }
  function chips(list) {
    var ul = el("ul", "chips");
    list.forEach(function (t) { ul.appendChild(el("li", "chip", t)); });
    return ul;
  }
  function put(id, nodes) {
    var root = document.getElementById(id);
    if (root) [].concat(nodes).forEach(function (n) { root.appendChild(n); });
  }
  function repoLink(p) {
    var line = el("p");
    if (p.url) line.appendChild(anchor(p.url, "View " + p.name + " on " + p.platform));
    else line.textContent = "Repository URL not set yet.";
    return line;
  }

  // Learning path stages
  put("stages", D.stages.map(function (s) {
    var key = s.status.toLowerCase(), later = key === "later";
    var box = el("div", "stage " + key), head = el("div", "row");
    head.appendChild(el("h3", null, s.title));
    head.appendChild(badge(s.status));
    box.appendChild(head);
    box.appendChild(el("p", "muted", s.intro));
    var ul = el("ul", later ? "later" : "grid");
    s.items.forEach(function (i) {
      var li = el("li", later ? "later-item" : "card" + (i.foundation ? " foundation" : ""));
      var row = el("div", "row");
      row.appendChild(el("h4", null, i.name));
      row.appendChild(badge(s.status));
      li.appendChild(row);
      if (i.desc) li.appendChild(el("p", null, i.desc));
      ul.appendChild(li);
    });
    box.appendChild(ul);
    return box;
  }));

  // Featured project
  var feat = D.projects.filter(function (p) { return p.featured; })[0];
  if (feat) {
    var f = el("article", "feature");
    f.appendChild(el("div", "bar", feat.name));
    var body = el("div", "feature-body");
    body.appendChild(el("p", "muted", feat.category));
    body.appendChild(badges(feat.visibility));
    body.appendChild(el("p", null, feat.description));
    if (feat.context) body.appendChild(el("p", null, feat.context));
    if (feat.sequence) {
      body.appendChild(el("p", "muted", (feat.sequenceLabel || "Sequence") + ":"));
      var ol = el("ol", "seq");
      feat.sequence.forEach(function (x) { ol.appendChild(el("li", null, x)); });
      body.appendChild(ol);
    }
    if (feat.scope) body.appendChild(el("p", "note", feat.scope));
    if (feat.technologies) body.appendChild(chips(feat.technologies));
    if (feat.status) body.appendChild(el("p", "muted", "Status: " + feat.status));
    if (feat.learningOutcome) body.appendChild(el("p", null, "Learning outcome: " + feat.learningOutcome));
    body.appendChild(repoLink(feat));
    f.appendChild(body);
    put("featured-project", f);
  }

  // Public GitHub projects (featured project is shown above)
  var gh = D.profiles.github;
  put("github-intro", document.createTextNode(gh.summary));
  var others = D.projects.filter(function (p) { return p.platform === "GitHub" && !p.featured; });
  put("github-projects", others.map(function (p) {
    var li = el("li", "card"), row = el("div", "row");
    row.appendChild(el("h3", null, p.name));
    row.appendChild(badges(p.visibility));
    li.appendChild(row);
    li.appendChild(el("p", "meta", p.category));
    li.appendChild(el("p", null, p.description));
    if (p.technologies) li.appendChild(chips(p.technologies));
    if (p.status) li.appendChild(el("p", "meta", "Status: " + p.status));
    if (p.learningOutcome) li.appendChild(el("p", null, "Learning outcome: " + p.learningOutcome));
    li.appendChild(repoLink(p));
    return li;
  }));

  // GitLab: private profile, no project cards
  var gl = D.profiles.gitlab, panel = el("div", "panel");
  panel.appendChild(badges(gl.visibility));
  panel.appendChild(el("p", null, gl.summary));
  panel.appendChild(el("p", "muted", gl.note));
  var glLine = el("p");
  if (gl.url) glLine.appendChild(anchor(gl.url, "GitLab profile (private)"));
  else glLine.textContent = "GitLab profile URL not set yet.";
  panel.appendChild(glLine);
  put("gitlab-panel", panel);

  // Principles
  put("principle-list", D.principles.map(function (p) {
    var d = el("div");
    d.appendChild(el("dt", null, p.name));
    d.appendChild(el("dd", null, p.desc));
    return d;
  }));

  // Links
  var links = [{ label: "GitHub (public projects)", url: gh.url }, { label: "GitLab (private profile)", url: gl.url }].concat(D.otherLinks || []);
  put("link-list", links.map(function (l) {
    var li = el("li");
    if (l.url) li.appendChild(anchor(l.url, l.label));
    else { li.className = "muted"; li.textContent = l.label + ": URL not set yet"; }
    return li;
  }));
})();
