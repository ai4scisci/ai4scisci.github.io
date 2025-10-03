class Footer2025 extends HTMLElement {
constructor() {
super();
}
connectedCallback() {
const startYear = 2025;
const currentYear = new Date().getFullYear();
const yearDisplay = startYear === currentYear ? `${startYear}` : `${startYear}–${currentYear}`;
this.innerHTML = `
<div class="footer-lemos mt-4 px-3">
    <div class="pt-2 pb-3 container">
        <!-- Contacts row -->
        <div class="row mt-3 px-md-3">
            <!-- First Contact -->
            <div class="col-12 col-md-4">
                <h4 class="mb-1 fw-bold">Contact</h4>
                <p class="mb-0"><b>Jian Wu, Ph.D.</b><br>
                    Old Dominion University<br>
                    Tel: 757-683-7753<br>
                    E-mail: <a href="mailto:jwu@cs.odu.edu">jwu@cs.odu.edu</a><br>
                </p>
            </div>
            <!-- Social + Links -->
            <div class="col-12 col-md-6 mt-4 mt-md-0">
                <h4 class="mb-1 fw-bold">Links</h4>
                <!-- Social Icons -->
                <!-- Flex container for icon + images -->
                <div class="d-flex align-items-center flex-wrap mt-2">
                    <!-- Twitter -->
                    <a href="https://x.com/Ai4SciSci" target="_blank" aria-label="Twitter" title="Twitter">
                    <i class="fab fa-twitter fa-3x"></i>
                    </a>
                    <!-- AI4SciCI -->
                    <a class="ml-5" href="https://ai4scisci.github.io/" target="_blank" title="AI4SciSci">
                    <img src="/assets/img/favicon/android-chrome-192x192.png"
                        alt="AI4SciCI Homepage"
                        style="height:50px;">
                    </a>
                    <!-- JCDL -->
                    <a class="ml-5" href="https://2025.jcdl.org/" target="_blank" title="JCDL 2025">
                    <img src="/2025/assets/img/jcdl2025.jpg"
                        alt="JCDL 2025 Homepage"
                        style="height:50px;">
                    </a>
                </div>
            </div>
        </div>
    <div class="row mt-4 px-md-3">
        <div class="col-auto col-md-5 align-middle">
            <p class="mb-0">© ${startYear} <b>AI4SciSci</b> <span style="color:#6c757d;">&mdash; designed by RochanaRO</span></p>
        </div>
    </div>
    </div>

</div>
</div>
`;
}
}
customElements.define('footer-component-2025', Footer2025);

// template

{/* 
<h4 class="mb-1 fw-bold">
Contact</h2>
<p class="mb-0"><b>Jian Wu, Ph.D.</b><br>
    Associate Professor<br>
    Department of Computer Science<br>
    Old Dominion University<br>
    3202 ECS Building, Norfolk, VA, 23529<br>
    Tel: 757-683-7753<br>
    E-mail: <a href="mailto:jwu@cs.odu.edu">jwu@cs.odu.edu</a><br>
</p>
*/}
{/* 
<div class="col-12 col-md-6 mt-3 mt-md-0">
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
</div>
*/}