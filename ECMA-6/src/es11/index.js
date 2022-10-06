const boton = document.getElementById("btn");

boton.addEventListener("click", async function(){

    const module = await import("./file.js");
    module.hello();
})