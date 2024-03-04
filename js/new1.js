// Add an event listener to all anchor elements

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", function () {
    // Apply the active class when clicked
    this.classList.add("active");

    // Remove the active class after 2 seconds (adjust as needed)
    setTimeout(() => {
      this.classList.remove("active");
    }, 5000); // 2000 milliseconds = 2 seconds
  });
});
