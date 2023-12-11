let tabs = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {

        tabs.forEach((tab) => {
            tab.classList.remove("active")
        })

        tab.classList.add("active");

        tabContent.forEach((content) => {
            content.classList.remove("active");
        })

        tabContent[index].classList.add("active");

        let line = document.querySelector(".line")
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
    })
})