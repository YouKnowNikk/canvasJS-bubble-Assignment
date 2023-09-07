
// function moveArrow(arrow) {
//     arrow.style.paddingRight = "635px";
//     const circleContainer = arrow.previousElementSibling;
//     const circle = circleContainer.querySelector('.circle');
//     circle.style.backgroundColor = "grey";
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const arrows = document.querySelectorAll(".arrow");
//     const circles = document.querySelectorAll(".circle");

//     const originalStyles = []; 
    
//     arrows.forEach(arrow => {
//         originalStyles.push({ paddingRight: arrow.style.paddingRight });
        
//         arrow.addEventListener("click", () => {
//             arrow.style.paddingRight = "635px";

//             const index = Array.from(arrows).indexOf(arrow);
//             circles[index].style.backgroundColor = "grey";
//         });
//     });

//     const resetButton = document.getElementById("resetButton");
//     resetButton.addEventListener("click", () => {
//         arrows.forEach((arrow, index) => {
//             arrow.style.paddingRight = originalStyles[index].paddingRight;
//             circles[index].style.backgroundColor = "";
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const arrows = document.querySelectorAll(".arrow");
    const circles = document.querySelectorAll(".circle");

    const originalStyles = [];
    
    arrows.forEach(arrow => {
        originalStyles.push({ paddingRight: arrow.style.paddingRight });
        
        arrow.addEventListener("click", () => {
            arrow.style.paddingRight = "658px";

            const index = Array.from(arrows).indexOf(arrow);
            const circle = circles[index];

            arrow.addEventListener("transitionend", () => {
                circle.style.backgroundColor = "grey"; 
            }, { once: true });
        });
    });

    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", () => {
        arrows.forEach((arrow, index) => {
            arrow.style.paddingRight = originalStyles[index].paddingRight;
            circles[index].style.backgroundColor = ""; 
        });
    });
});



