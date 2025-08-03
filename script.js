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
// count characters
const textarea = document.querySelector("textarea");
const value = document.querySelector("#value");

function counter() {
    const textLength = textarea.value.length;
    value.innerText = `${textLength}`;
}

textarea.addEventListener("input", counter);
// ====================================
// const textarea = document.getElementById("secretMessage");
// const value = document.getElementById("value");

// function counter() {
//   const textLength = textarea.value.length;
//   value.innerText = textLength;
// }

// textarea.addEventListener("input", counter);
// ===========================================

// function counter(){
//     let charCount ={};
//     for (let char of str){
//         if (charCount[char])
//             charCount[char]++;
//         else {
//             charCount[char]=1;
//         }
//         for(let char in charCount){
            
//         }
//     }
// }
// ==========================================
// const textarea = document.getElementById("secret-message");
// const counter = document.getElementById("value");

// textarea.addEventListener("input", function(){
//     const length = textarea.value.length;
//     counter.textContent = length;
// });
// ==============================================



// change color
// function changeColor(){
//     document.getElementById("encode-btn").style.backgroundColor = "aquamarine";
// }


//   function setActiveTheme(clickedLink, color) {
//     const allLinks = document.querySelectorAll(".btn-div a");
    
//     allLinks.forEach(link => {
//       link.classList.remove("active");
//     });

//     clickedLink.classList.add("active");
//   }

// function setActiveTheme(buttonId) {
//     localStorage.setItem("activeButton", buttonId);
// }

// window.onload = function () {
//     const active = localStorage.getItem("activeButton");
//     if (active) {
//         const btn = document.getElementById(active);
//         if (btn) {
//             btn.style.backgroundColor = "aquamarine";
//         }
//     }
// };








// password encryption 
// function showContent() {
//   document.getElementById("encryption").style.display = "block";
// }

// var div = document.getElementById("encryption");
// var display = 0;
// function showContent() {
//     if (display== 1)
//     {
//         div.style.display = "block";
//         display = 0;
//     }
//     else {
//         div.style.display = "none";
//         display = 1;
//     }
// }

let passwordSection = document.querySelector("#encryption");

function showContent(){
    passwordSection.computedStyleMap.display = "none";
}



