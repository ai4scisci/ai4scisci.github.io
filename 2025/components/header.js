class Header2025 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">

        <div class="container-fluid">
        <a class="navbar-brand" href="/2025/">
        <img src="/assets/img/AI4SciSci_v2.png" width="" height="50" class="d-inline-block align-top" alt="">
        </a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse" style="">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-2">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="#call-for-papers">Call for Papers</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="#submissions">Submissions</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="#key-dates">Key Dates</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="#program">Program</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="#keynote-speaker">Keynote Speaker</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="#program-committee">Program Committee</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="#program-committee">Contacts</a>
            </li>


          </ul>
        </div>
        </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component-2025', Header2025);

{/* <li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
  Previous Conferences
</a>
<div class="dropdown-menu">
  <a class="dropdown-item" href="/2023/">AI4SciSci 2023</a>
</div>
</li> */}