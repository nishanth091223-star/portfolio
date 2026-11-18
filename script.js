
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile Navigation
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

// Close menu after navigation
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    });
});

// Changing professional roles
const roles = [
    "B.Tech IT Student",
    "Web Developer",
    "Full Stack Developer",
    "AI Enthusiast",
    "Software Developer"
];

let roleIndex = 0;

function changeRole() {
    const typing = document.querySelector(".typing");

    typing.textContent = roles[roleIndex];

    roleIndex = (roleIndex + 1) % roles.length;
}

changeRole();
setInterval(changeRole, 2000);

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const yourEmail = "YOUR_EMAIL@gmail.com";

    const mailBody =
        `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const mailLink =
        `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailLink;
});
