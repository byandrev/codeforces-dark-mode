var nuevoEstilo = document.createElement("style");

nuevoEstilo.innerHTML = `
  :root {
    --bg: #1f1f1f;
    --bg-alt: #1c1c1c;
    --border-color: #333;
    --text-color: #fff;
    --link-color: #4646c4;
  }

  a:link {
    color: var(--link-color);
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


  input {
    background-color: var(--bg) !important;
    border-color: transparent;
  }

  input[type="submit"] {
    color: var(--text-color) !important;
    cursor: pointer;
  }

  html body #pageContent h3 a {
    color: var(--text-color) !important;
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

  #footer {
    border-color: var(--border-color);
    color: var(--text-color) !important;
  }
`;

document.head.appendChild(nuevoEstilo);

