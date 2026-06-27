// Get the button
let toTopBtn = document.getElementById("toTopBtn");

// Show button after scrolling down 100px
window.onscroll = function() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    toTopBtn.style.display = "block";
} else {
    toTopBtn.style.display = "none";
}
};

// Smooth scroll to top
function topFunction() {
window.scrollTo({ top: 0, behavior: 'smooth' });
}
