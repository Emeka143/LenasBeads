document.addEventListener("DOMContentLoaded", function () {
    // Select all product items
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        // Flipping effect on hover
        product.addEventListener("mouseover", () => {
            product.style.transform = "rotateY(180deg)";
        });
        product.addEventListener("mouseout", () => {
            product.style.transform = "rotateY(0deg)";
        });

        // Vanishing effect on click
        product.addEventListener("click", () => {
            product.style.opacity = "0";
            setTimeout(() => {
                product.style.display = "none";
            }, 500);
        });
    });
});

windows.addEventListener("load", function() {
    let preloader =
    document.getElementById("preloader");
    if (preloader) {
        preloader.classList.add("hidden");
    }
});
   