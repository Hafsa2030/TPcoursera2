document.addEventListener("DOMContentLoaded", () => {
    const largeImage = document.querySelector("#large-image");
    const thumbnails = document.querySelectorAll("#thumbnails figure img");
  
    thumbnails.forEach((thumbnail, index) => {
      // Ajoute tabindex dynamiquement
      thumbnail.parentElement.setAttribute("tabindex", index + 1);
  
      // Événement pour la souris
      thumbnail.addEventListener("mouseover", () => updateLargeImage(thumbnail));
      thumbnail.addEventListener("mouseleave", resetLargeImage);
  
      // Événement pour le clavier
      thumbnail.parentElement.addEventListener("focus", () => updateLargeImage(thumbnail));
      thumbnail.parentElement.addEventListener("blur", resetLargeImage);
    });
  
    // Met à jour l'image principale et le texte alternatif
    function updateLargeImage(thumbnail) {
      largeImage.setAttribute("src", thumbnail.src);
      largeImage.setAttribute("alt", thumbnail.alt);
    }
  
    // Réinitialise l'image principale
    function resetLargeImage() {
      largeImage.setAttribute("src", "images/default.jpg");
      largeImage.setAttribute("alt", "Grande image par défaut");
    }
  
    // Ajout d'un message console.log pour vérifier les événements
    console.log("Galerie interactive chargée avec succès.");
  });
  