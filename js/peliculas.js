function crearTarjetaPelicula(pelicula) {
    
    const card = document.createElement('a');
    const cardInner = document.createElement('div');
    cardInner.classList.add('live');
    // creo la imagen 
    const cardImg = document.createElement('img');
    cardImg.classList.add('imglive');
    cardImg.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
    cardImg.alt = pelicula.title;
    cardImg.loading = 'lazy';
//div para el título de película
    const cardBody = document.createElement('div');
    cardBody.classList.add('TitPelicula');
    const cardTitle = document.createElement('h4');
    cardTitle.textContent = pelicula.title;
    //Cargo los datos a la película texot e imagen al cuerpo
    cardBody.appendChild(cardTitle);
    cardInner.appendChild(cardImg);
    cardInner.appendChild(cardBody);
    card.appendChild(cardInner);
    // Crear elementos de la tarjeta de película
    // creamos la columna de bootstrap 
  /*  const card = document.createElement('div');
    card.classList.add('col-12','col-md-3', 'pelicula-card');
    // estamos creando la tarjeta
    const cardInner = document.createElement('div');
    cardInner.classList.add('card');
    // creo la imagen de la tarjeta
    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top');

    cardImg.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
    cardImg.alt = pelicula.title;
    cardImg.loading = 'lazy';
   

    // creamos el cuerpo de la tarjeta
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = pelicula.title;

     // Añadir elementos a la tarjeta de película
    cardBody.appendChild(cardTitle);
    cardInner.appendChild(cardImg);
    cardInner.appendChild(cardBody);
    // agrego la tarejta a la columna de bootstrap
    card.appendChild(cardInner);
*/
    return card;
}

// datos de la api
const API_SERVER = 'https://api.themoviedb.org/3';
const options = {
    method: 'GET', // Método de la petición (GET)
    headers: {
        accept: 'application/json', // Tipo de respuesta esperada (JSON)
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
        
    }
};
// Función para cargar películas en la seccion del index
const cargarPeliculas = async (page = 1) => {
    try{
        // Realizamos una petición fetch a la API para obtener las películas populares
        const response = await fetch(`${API_SERVER}/movie/popular?page=${page}`, options);
        console.log(response);
        const data = await response.json(); // Convertimos la respuesta a JSON
        console.log(data);
        const movies = data.results;// Extraemos las películas de la respuesta, array de objetos de peliculas
        console.log(movies);
        const peliculasSection = document.getElementById('peliculasLive');
        peliculasSection.innerHTML = '';// Limpiamos el contenido previo del contenedor
        movies.forEach(movie => {
            const peliculaCard = crearTarjetaPelicula(movie);// Iteramos sobre las películas
            peliculasSection.appendChild(peliculaCard);// Añadimos la tarjeta de película al contenedor
        });// Iteramos sobre las películas
    }catch(error){
        console.error(error);
    }
 

};

 // Llamar a la función para agregar las tarjetas de películas cuando el DOM esté cargado
 // document.addEventListener("DOMContentLoaded", agregarTarjetasPeliculas);
 // agregarTarjetasPeliculas();
 document.addEventListener("DOMContentLoaded", () => { cargarPeliculas(1)});