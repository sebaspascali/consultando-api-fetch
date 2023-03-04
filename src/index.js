/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "http://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');


//web api
// Conectarnos al servidor
window
.fetch(`${baseUrl}/api/avo`)
// Procesar la respuesta y convertirla en JSON
.then(respuesta=> respuesta.json())
//JSON --> Data --> Renderizar info browser
.then((responseJson) => {
    const todosLosItems = [];

    responseJson.data.forEach(item => {
        // Crear imagen
        const imagen = document.createElement('img');
         // Url de la imagen
        imagen.src = `${baseUrl}${item.image}`;
        
        //Crear titulo
        const titulo = document.createElement ('h2');
        titulo.textContent = item.name;
        titulo.className ="titulo";

        // Crear precio
        const precio = document.createElement ('div');
        precio.textContent = "€" + item.price;
        

        const container = document.createElement('div')
        container.append(imagen, titulo, precio);
        container.className = "container";

        todosLosItems.push(container);

       
    });

    appNode.append(...todosLosItems);
});


