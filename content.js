var nuevoEstilo = document.createElement("style");

nuevoEstilo.innerHTML = `
  :root {
    --bg: #252525;
    --bg-alt: #1c1c1c;
    --border-color: #333;
    --text-color: #fff;
    --link-color: #4e2cf7;
    --link-visited-color: #7012ce;
    --blue-color: #0461e2;
  }

  hr {
    border-color: var(--border-color) !important;
  }

  a:link {
    color: var(--link-color);
  }

  a:visited {
    color: var(--link-visited-color);
  }

  body {
    background: var(--bg);
    color: var(--text-color) !important;
  }

  .menu-list li a {
    color: var(--text-color) !important;
  }

  .roundbox {
    background-color: var(--bg-alt);
    border-color: var(--border-color);
  }

  .roundbox .titled {
    border-color: var(--border-color);
  }

  .roundbox .bottom-links {
    background-color: var(--bg);
    border-color: var(--border-color);
  }

  .ttypography {
    color: var(--text-color) !important;
  }

  .verdict-rejected {
    color: var(--blue-color);
  }

  .rated-user {
    display: inline !important;
  }

  .user-black,
  .user-admin {
    color: var(--text-color) !important;
    font-weight: bold !important;
  }

  .legendary-user-first-letter {
    color: var(--text-color) !important;
  }


  .menu-list li a {
    color: var(--text-color);
  }

  div.ttypography .MathJax,
  .info {
    color: var(--text-color) !important;
  }

  .info a:link {
    color: var(--text-color) !important;
  }

  html body div.datatable {
    background-color: var(--bg-alt) !important;
    border-radius: 3px !important;
  }

  .roundbox .rtable td, .roundbox .rtable th,
  .datatable td, .datatable th {
    border-color: var(--border-color) !important;
  }

  .rtable .dark,
  .datatable {
    background-color: var(--bg) !important;
  }

  .datatable div:last-child,
  .datatable table,
  .datatable .dark {
    background-color: var(--bg) !important;
  }

  .datatable .lt,
  .datatable .rb,
  .datatable .lb,
  .datatable .ilt,
  .datatable .irt,
  .datatable .rb {
    background: transparent !important;
  }


  input,
  select,
  .SumoSelect>.CaptionCont,
  .SumoSelect>.optWrapper {
    background-color: var(--bg) !important;
    border: 1px solid var(--border-color) !important;
    color: var(--text-color) !important;
    border-radius: 3px;
  }

  .SumoSelect>.optWrapper>.options li.opt {
    border-color: var(--border-color) !important;
  }

  .SumoSelect .select-all>span i, .SumoSelect>.optWrapper.multiple>.options li.opt span i {
    background-color: var(--bg-alt) !important;
    border-color: var(--border-color) !important;
  }

  input[type="submit"] {
    color: var(--text-color) !important;
    cursor: pointer;
  }

  html body #pageContent h3 a {
    color: var(--text-color) !important;
  }

  .backLava {
    border: 1px solid var(--border-color);
    border-radius: 3px;
  }

  .backLava,
  .second-level-menu-list li.backLava .leftLava {
    background: var(--bg-alt) !important;
  }

  .second-level-menu-list li a {
    color: var(--text-color) !important;
  }

  .pagination a {
    color: var(--text-color) !important;
  }

  .pagination .page-index.active {
    background: var(--bg-alt) !important;
    color: var(--bg) !important;
  }


  #tooltip {
    background: var(--bg) !important;
    border-color: var(--border-color) !important;
  }

  #userActivityGraph svg rect[fill="#EBEDF0"] {
    fill: var(--bg);
  }


  #sidebar-settings-form label {
    color: var(--text-color) !important;
  }

  .problem-statement .sample-tests pre {
    background: var(--bg) !important;
  }

  .problem-statement .test-example-line-even {
    background: var(--bg-alt) !important;
  }

  .problem-statement .test-example-line:hover {
    background: #333333 !important;
  }

  div.ttypography pre, div.ttypography code {
    color: #fc3c3c !important;
  }

  .tag-box {
    background: var(--bg) !important;
  }

  .sidebar-menu ul li {
    background: var(--bg) !important;
    border-color: var(--border-color) !important;
    border-radius: 3px;
  }

  .sidebar-menu ul a {
    color: var(--text-color) !important;
  }

  #editor {
    border-color: var(--border-color) !important;
  }

  .ace_gutter {
    background: var(--bg) !important;
  }

  .ace-chrome {
    background: var(--bg-alt) !important;
    color: var(--text-color) !important;
  }

  .ace_gutter-cell  {
    background: #333 !important;
    color: var(--text-color) !important;
  }

  #facebox .content {
    background: var(--bg-alt) !important;
  }

  .test-for-popup pre {
    background: var(--bg-alt) !important;
    border-color: var(--border-color) !important;
    border-radius: 3px;
  }

  pre[style="background-color: #eff0f1;"] {
    background: var(--bg-alt) !important;
    color: var(--text-color) !important;
    border: 1px solid var(--border-color) !important;
    border-radius: 3px;
  }

  .prettyprint .pln {
    color: var(--text-color) !important;
  }

  #footer {
    border-color: var(--border-color);
    color: var(--text-color) !important;
  }
`;

document.head.appendChild(nuevoEstilo);


// TAGS

const tags = document.querySelectorAll(".tag-box");

tags.forEach(tag => {
  const parent = tag.parentNode;
  parent.style.backgroundColor = "#252525";
});


