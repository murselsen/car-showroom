document.addEventListener("dblclick", function (event) {
  event.preventDefault(); // Varsayılan davranışı engeller (örneğin zoom gibi)
  event.stopPropagation(); // Olayın yukarıya (parent'lara) yayılmasını durdurur
});
