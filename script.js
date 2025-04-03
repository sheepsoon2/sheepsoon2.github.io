document.addEventListener("DOMContentLoaded", function() {
  let sections = document.querySelectorAll(".section");
  let currentIndex = 0;
  
  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: "smooth"});
      currentIndex = index;
    }
  }
  
  document.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
      scrollToSection(currentIndex + 1);
    } else {
      scrollToSection(currentIndex - 1);
    }
  });
});

function showDetails(id) {
  let details = document.getElementById(id);
  if (details.style.display === "block") {
    details.style.display = "none";
  } else {
    document.querySelectorAll('.portfolio-details').forEach(div => div.style.display = 'none');
    details.style.display = "block";
  }
}
