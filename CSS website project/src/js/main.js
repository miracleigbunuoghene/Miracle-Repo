var hambuger = document.getElementById("hambuger");
var links = document.getElementById("links");

hambuger.addEventListener("click", () => {
    links.classList.toggle("active");
});


// 1. Select the hambuger icon
// 2. selete the links container
// 3. Add click event to hambuger
// 4. Onclick of the hambuger toogle the class of active on the links container