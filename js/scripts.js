document.addEventListener("DOMContentLoaded", function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    // Function to handle click events for each nav link
    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        // Prevent default behavior if the link is broken
        const target = link.getAttribute("href");
  
        // Check if the target page exists
        fetch(target, { method: 'HEAD' })
          .then(response => {
            if (!response.ok) {
              // Log an error if the page does not exist
              console.error(`Error: ${target} not found`);
              alert(`The page ${target} could not be found.`);
              event.preventDefault(); // Prevent navigation if the page is missing
            }
          })
          .catch(error => {
            console.error(`Error fetching ${target}:`, error);
            event.preventDefault(); // Prevent navigation if there's an error
          });
      });
    });
  });
  