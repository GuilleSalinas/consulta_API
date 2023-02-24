const aplicacion = document.querySelector('.container');

// guardo en una variable la url de la API
const url = 'https://jsonplaceholder.typicode.com/users'

// Con fetch() llamo a la API pasando la url
fetch(url)
// devuelve una promesa en formato json
.then(res => res.json())
// aqui esta el json con sus datos listo para ser usado, se puede hacer lo que quiera consultando a la API
// en este caso se recorre todo el JSON con el forEach y devuelve el nombre de cada uno. Se puede consultar por cualquiera de ellos.
.then(data => {
    data.forEach(usuario => {
        // creo un elemento p para pasar el id asi lo muestro en el proceso de usuario.js en otro HTML con los datos del mismo;
        const p = document.createElement('p');
        p.setAttribute('id', usuario.id);
        // con un poco de HTML para que se vea mejor
        p.innerHTML = 
        `
        <div class="cursor">
            <h3>${usuario.name}</h3>
        </div> 
        `
        // cuando se hace click en el nombre lleva a hacer otra consulta a la API y trae los datos consultados en usuario.js que son a gusto de c/u.
        // se pasa el id para modificar la direccion y asi pueda hacer la consulta nuevamente desde usuario.js
        p.addEventListener('click', ()=>{
            window.location.href = `./usuario.html?id=${usuario.id}`;
        })

        aplicacion.appendChild(p)
    });

})

.catch(err => console.error(err))


