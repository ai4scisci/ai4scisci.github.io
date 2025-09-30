class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    const yearDisplay = startYear === currentYear ? `${startYear}` : `${startYear}–${currentYear}`;
    this.innerHTML = `
    <div class="footer-lemos mt-5">
    <div class="py-3 px-md-5 container">
  
 
      <!-- Contacts row -->
      <div class="row mt-3">
        <div class="col-12 col-md-6">
          <h2 class="mb-1 fw-bold">Contact</h2>
          <p class="mb-0">Jian Wu, Ph.D.<br>
            Associate Professor<br>
            Department of Computer Science<br>
            Old Dominion University<br>
            3202 ECS Building, Norfolk, VA, 23529<br>
            Tel: 757-683-7753<br>
            E-mail: <a href="mailto:jwu@cs.odu.edu">jwu@cs.odu.edu</a><br>
          </p>
        </div>

      </div>
  
      <!-- Email/social row (existing) -->
      <div class="row mt-3">
        <div class="col-auto col-6 align-middle pr-0">
          <p class="my-0 pt-0"><a href="mailto:"></a></p>
        </div>
        <div class="col-auto col-6 text-right pl-0">
          <!-- social icons or other links -->
        </div>
      </div>

      <div class="row">
      <div class="col-auto col-md-5 align-middle">
        <p class="mb-0">© ${yearDisplay} AI4SciSci</p>
      </div>
    </div>
  
    </div>
  </div>
  
    `;
  }
}

customElements.define('footer-component', Footer);


{/* <div class="col-12 col-md-6 mt-3 mt-md-0">
<p class="mb-1 fw-bold">Contacts</p>
<p class="mb-0">Yi He, Ph.D.<br>
  Assistant Professor<br>
  Department of Computer Science<br>
  Old Dominion University<br>
  3108 ECS Building, Norfolk, VA 23529<br>
  Tel: 757-683-7821<br>
  E-mail: <a href="mailto:yihe@cs.odu.edu">yihe@cs.odu.edu</a><br>
  Webpage: <a href="#">Homepage</a>
</p>
</div> */}