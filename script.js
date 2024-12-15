document.getElementById("envelope").addEventListener("click", function () {
  this.classList.add("opening");
  setTimeout(() => {
    document.getElementById("flyer").style.display = "block"; // Show the flyer
  }, 1000); // Matches the animation duration
});
