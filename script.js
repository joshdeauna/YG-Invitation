document.getElementById("letter").addEventListener("click", function() {
  this.style.transform = "rotateX(90deg)"; // Simulate opening animation
  setTimeout(() => {
    document.getElementById("flyer").style.display = "block";
  }, 1000); // Wait for animation to finish
});
