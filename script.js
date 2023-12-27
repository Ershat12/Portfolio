const menuBtns = document.querySelectorAll(".menu-btn");

menuBtns.forEach((btn) => {
    let target = btn.getAttribute("data-target");
    let offsetFromTop = document.getElementById(target).offsetTop;
    btn.addEventListener("click", () => {
        window.scrollTo(0, offsetFromTop);
    });
});