const menu = document.getElementsByClassName("dropdown_menu")
const bars = document.getElementsByTagName("i")

for (let i = 0; i < bars.length; i++) {
    bars[i].addEventListener("click", function () {
        if (menu[0].style.display === "block") {
            menu[0].style.display = "none";
        } else {
            menu[0].style.display = "block";
        }
    });
}
