document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
  
        // Close the mobile menu after clicking a link (if open)
        document.querySelector(".nav-links").classList.remove("show");
      });
    });
  
    // Toggle mobile nav
    const navToggle = document.querySelector(".nav-toggle");
    const navLinksContainer = document.querySelector(".nav-links");
  
    navToggle.addEventListener("click", () => {
      navLinksContainer.classList.toggle("show");
    });
  });
  