let more = document.querySelectorAll(".readmore-btn");

for (let i = 0; i < more.length; i++) {
    more[i].addEventListener("click", function() {
        more[i].parentNode.classList.toggle("active")
    })
}