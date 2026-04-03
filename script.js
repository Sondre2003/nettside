const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

// finn ALLE bilder i cards
const images = document.querySelectorAll(".card img");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// lukk når du klikker
modal.addEventListener("click", () => {
    modal.style.display = "none";
});