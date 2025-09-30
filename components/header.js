class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">

        <div class="container">
        <a class="navbar-brand" href="#">
        <img src="/assets/img/AI4SciSci_v2.png" width="" height="50" class="d-inline-block align-top" alt="">
        </a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse" style="">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-2">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Conferences
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/2025">AI4SciSci 2025</a>
                <a class="dropdown-item" href="/2023">AI4SciSci 2023</a>
              </div>
            </li>

            <li class="nav-item mr-2">
              <a class="nav-link" href="#upcoming">Upcoming Events</a>
            </li>
          </ul>
        </div>
        </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);