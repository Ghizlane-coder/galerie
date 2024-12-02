document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner toutes les images
    const images = document.querySelectorAll("img");

    // Ajouter un écouteur d'événements pour chaque image
    images.forEach(function(image) {
        // Événement onfocus
        image.addEventListener("focus", function() {
            console.log("Focus sur l'image: " + image.alt);
            image.style.border = "2px solid blue";  // Changer le style pour indiquer focus
        });

        // Événement onblur
        image.addEventListener("blur", function() {
            console.log("Perte de focus sur l'image: " + image.alt);
            image.style.border = "";  // Retirer le style une fois l'élément perd son focus
        });

        // Conserver les événements onmouseover et onmouseleave
        image.addEventListener("mouseover", function() {
            image.style.transform = "scale(1.1)";
        });

        image.addEventListener("mouseleave", function() {
            image.style.transform = "scale(1)";
        });
    });

    // Ajouter l'événement onload
    window.addEventListener("load", function() {
        console.log("La page a été chargée");
    });

    // Ajouter un attribut tabfocus à chaque image (tabindex)
    images.forEach(function(image, index) {
        image.setAttribute("tabindex", index + 1);
    });
});
