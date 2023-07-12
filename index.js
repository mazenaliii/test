const extraContent = document.querySelector('.extra-services')
const loadBtn = document.querySelector('.load-btn button')
const toggleBtn = document.querySelector(".bars")
const toggleBtnIcon = document.querySelector(".bars i")
const dropDownMenu = document.querySelector(".dropdown_menu")

shown = false
loadBtn.addEventListener('click' , () => {
    if(shown === false) {
        extraContent.style.display = 'flex'
        loadBtn.innerHTML = 'Load less'
        shown = true
    } else {
        extraContent.style.display = 'none'
        loadBtn.innerHTML = 'Load more'
        shown = false
    }
})


toggleBtn.addEventListener ('click' , () => {
    dropDownMenu.classList.toggle("open")
  const isOpen = dropDownMenu.classList.contains("open")

  toggleBtnIcon.classList = isOpen 
    ? "fa-solid fa-xmark" : 
  "fa-solid fa-bars";
}) 
  
