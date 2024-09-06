// Smooth scroll 
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('conoce-razas').scrollIntoView({ behavior: 'smooth' });
});

// imagen modal
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];

document.querySelectorAll('.breed img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

span.onclick = function() {
    modal.style.display = "none";
}

// dark/light mode toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

// Event listener para toggle
toggleSwitch.addEventListener('change', switchTheme, false);
