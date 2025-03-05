document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-submenu").forEach(function (toggle) {
      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        let parent = this.parentElement;
        parent.classList.toggle("open");
      });
    });
  });
  