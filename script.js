window.onload = function() {
  document.addEventListener("DOMContentLoaded", function(event) { 
    console.log("Script loaded and DOM ready");
  });

  const toggleBtn = document.querySelector('.toggle-btn')
  const dropMenu = document.querySelector('.dropdown-menu')
  const btnIcon = document.querySelector('.toggle-btn i')
  const buttons = document.querySelectorAll('.project-btn a');

  toggleBtn.addEventListener('click', () => {
    dropMenu.classList.toggle('open');
    const isOpen = dropMenu.classList.contains('open')

    btnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
  });

  buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
  });

  function handleClick(event) {
    event.preventDefault();
    console.log("handleClick")
    const link = event.target.parentElement.querySelector('a');
    const href = link.getAttribute('href');
  
    if (href === '#') {
      const warning = document.createElement('div');
      warning.classList.add('warning');
      warning.innerText = 'Sorry boss... this app is not deployed yet :(';
      document.body.appendChild(warning);
  
      setTimeout(() => {
        warning.remove();
      }, 6000);
    }
  }

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