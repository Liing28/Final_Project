// Dark mode button
const darkModeButton = document.querySelector("#dark-mode-btn");

darkModeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkModeButton.textContent = "Light Mode";
  } else {
    darkModeButton.textContent = "Dark Mode";
  }
});

// Contact form message
const contactForm = document.querySelector("form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");
    contactForm.reset();
  });
}