// change theme
function changeTheme(){
    if
    (document.body.classList.contains("dark-mode"))
     {
        document.body.classList.remove("dark-mode");
    }
    else {
        document.body.classList.add("dark-mode");
    }
}
// ========show/hide content
function showContent(){
    const toggle = document.getElementById("toggle-switch");
        const passwordSection = document.getElementById("encryption");

        if (toggle.checked){
            passwordSection.style.display = "block";
        }
        else {
            passwordSection.style.display = "none";
        }
}

// =====character counter=======
function countCharacters(){
    const textarea = document.getElementById("secretMessage");

    const counter = document.getElementById("value");

    textarea.addEventListener("input", () =>{
    counter.textContent = textarea.value.length;
});
}
// change button background color

function highlightActiveButton(clickedBtn) {
  const navButtons = document.querySelectorAll('.btn-div a');
  navButtons.forEach(btn => {
    btn.style.backgroundColor = ''; 
  });

  clickedBtn.style.backgroundColor = 'aquamarine'; 
  localStorage.setItem('activeBtnClass', clickedBtn.className);
}
window.onload = function () {
  const savedClass = localStorage.getItem('activeBtnClass');
  if (savedClass) {
    const targetBtn = document.querySelector(`.btn-div .${savedClass}`);
    if (targetBtn) {
      targetBtn.style.backgroundColor = 'aquamarine';
    }
  }
  const navButtons = document.querySelectorAll('.btn-div a');
  navButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      highlightActiveButton(this);
    });
  });
};
