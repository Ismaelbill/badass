const icon = document.querySelector("nav .fa-bars");

icon.addEventListener("click", () => {
    icon.classList.toggle("active");
});


const allButtonCards = document.querySelectorAll(".works .cards .card button");
const work = document.querySelector(".works")

allButtonCards.forEach(btn => {
    btn.addEventListener("click", (ev) => {
        window.location.href = "#works";
        
        const newWindow = document.createElement("div");
        newWindow.className = "background";

        const xMark = document.createElement("i");
        xMark.className = "fa-solid fa-xmark";
        newWindow.appendChild(xMark);

        const design = document.createElement("div");
        design.className = "design";
        newWindow.appendChild(design);

       const classImg = ev.target.parentElement.parentElement.lastElementChild.cloneNode(true);
       if (ev.target.parentElement.parentElement.classList.contains(classImg.className)) {
           classImg.style.display = "block";
            design.append(classImg)
       }

        work.append(newWindow);
        document.body.style.overflowY = "hidden";


        
        xMark.addEventListener("click", (ev) => {
            ev.target.parentElement.remove();
            document.body.style.overflowY = "scroll";
        });
    });



});
