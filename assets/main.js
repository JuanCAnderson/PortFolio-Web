document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    
    scrollNav();
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navbar a')
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {

            e.preventDefault();
            
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"});

        });
    });
}


function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
      };

    function myfunction2(valor){
      document.getElementById("text-acercade").innerText = valor;
    };

    function logMessage(message){
      console.log(message + "<br>");
    }

    let textTarea = document.getElementById("edit-acercade")
    textTarea.addEventListener('keyup',(e) => {
      logMessage(`Key "${e.key}" released [event: keyup]`);
      if (e.key =="Enter") {
        document.getElementById("edit-acercade").style.display ="none";
      }
    });

    // Carga el contenido del Archivo de texto y lo muestra.

    function showFile(input){
      let file = input.files[0];
      alert(`File name: $(file.name)`);
      alert(`Last modified: ${file.lastModified}`);

      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(){
        console.log(reader.result);
        document.getElementById("text-acercade").innerText = reader.result;
      };

      reader.onerror = function(){
        console.log(reader.error);
      };
    }