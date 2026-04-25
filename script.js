function filterProjects(type) {
  let projects = document.querySelectorAll(".project");

  projects.forEach(p => {
    if (type === "all") {
      p.style.display = "block";
    } else if (p.classList.contains(type)) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}
