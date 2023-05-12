window.onload = function() {
  document.addEventListener("DOMContentLoaded", function(event) { 
    console.log("Script loaded and DOM ready");
  });

  const toggleBtn = document.querySelector('.toggle-btn')
  const dropMenu = document.querySelector('.dropdown-menu')
  const btnIcon = document.querySelector('.toggle-btn i')

  toggleBtn.addEventListener('click', () => {
    dropMenu.classList.toggle('open');
    const isOpen = dropMenu.classList.contains('open')

    btnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
  });
 

  const infoButtons = document.querySelectorAll(".info-button");
  infoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent == "?"){
        button.textContent = "X";
        button.style.zIndex = 1000;
        const imageContainer = button.parentElement;
        const imageDescription = imageContainer.querySelector(".description");
        imageDescription.style.display = "flex";
        imageDescription.style.zIndex = 999;
      }
      else if (button.textContent == "X"){
        button.textContent = "?";
        button.style.zIndex = 1000;
        const imageContainer = button.parentElement;
        const imageDescription = imageContainer.querySelector(".description");
        imageDescription.style.display = "none";
      }
    });
  });
}