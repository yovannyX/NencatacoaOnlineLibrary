"use strict";

// FunciÃ³n que activa el overlay. Se pasa como parÃ¡metro el contenedor padre (#vintalight en el DOM)
var activeVintalight = function activeVintalight(container) {
    // DelegaciÃ³n de eventos para detectar click en los hijos
    container.addEventListener("click", function(e) {
        var element = e.target;
        // Validar que se haya dado click en el pseudoelemento before
        if (element.tagName == "DIV") {
            // Obtener direcciÃ³n y descripciÃ³n de la imagen que se dio click
            var src = element.querySelector("img").getAttribute("src"),
                descrip = element.querySelector("img").getAttribute("alt"),

                // Crear un nuevo div que se usarÃ¡ como overlay
                vintalightOverlay = document.createElement("div");
            // Agregar clase al div que creamos para poder darle estilos con CSS
            vintalightOverlay.classList.add("vintalight-overlay");
            // Agregar contenido al overlay 
            vintalightOverlay.innerHTML = "\n                <figure class=\"vintalight_container active\">\n                    <div class=\"vintalightcontainerphoto\">\n                        <img src=\"" + src + "\" alt=\"" + descrip + "\" class=\"vintalightcontainerphotoimg\"/>\n                    </div>\n                    <figcaption class=\"vintalightcontainercaption\">\n                        <h3 class=\"vintalightcontainercaptiontext\">" + descrip + "</h3>\n                    </figcaption>\n                    <a class=\"vintalight_button\" id=\"button-close\">x</a>\n                </figure>\n            ";
            // Meter el overlay en el DOM
            // console.log(vintalightOverlay);

            document.body.appendChild(vintalightOverlay);
            // AÃ±adimos la clase active para poder darle transiciÃ³n
            setTimeout(function() {
                vintalightOverlay.classList.add("active");
            }, 1);
            // Eliminar el scroll del body
            document.body.style.overflow = "hidden";
            // Evento para cerrar el overlay
            document.getElementById("button-close").addEventListener("click", function() {
                // Eliminar clase active
                vintalightOverlay.classList.remove("active");
                // Eliminar overlay del DOM
                setTimeout(function() {
                    document.body.removeChild(vintalightOverlay);
                }, 500);
                // Devolver scroll al body
                document.body.style.overflow = "auto";
            });
            // Evento para cerrar el overlay con la tecla ESC
            window.addEventListener("keyup", function(e) {
                if (e.key === "Escape") document.getElementById("button-close").click();
            });

window.addEventListener("click", function(e) {
                if(vintalightOverlay.classList.contains("active")){
                 document.getElementById("button-close").click();

                }
            });            
        }
    });
};

// Activamos la funciÃ³n
window.addEventListener("load", activeVintalight(document.getElementById("vintalight")));
window.addEventListener("load", activeVintalight(document.getElementById("vintalight2")));
window.addEventListener("load", activeVintalight(document.getElementById("vintalight3")));
window.addEventListener("load", activeVintalight(document.getElementById("vintalight4")));
window.addEventListener("load", activeVintalight(document.getElementById("vintalight5")));
window.addEventListener("load", activeVintalight(document.getElementById("vintalight6")));
window.addEventListener("load", activeVintalight(document.getElementById("vintalight7")));