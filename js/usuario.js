const aplicacion = document.querySelector('.container');

//aquie esta la url con el id que viene desde main.js y de esta forma la url del fetch ya no es la misma que la anterior ya que contiene solo el id de la persona que se dio click por ejemplo. http://127.0.0.1:5500/usuario.html?id=1
const getUrl = new URLSearchParams(window.location.search);
// (getUrl.get('id')) devuelve el numero del id que viene en la direccion http
id = getUrl.get('id');
const url = 'https://jsonplaceholder.typicode.com/users'

// aqui paso la url + id para que traiga solo ese id desde la API
fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
        // se crean los elementos para mostrarlos en el HTML
        const name = document.createElement('p')
        const username = document.createElement('p')
        const email = document.createElement('p')
        const addressStreet = document.createElement('p')
        const addressCity = document.createElement('p')


        // aqui los asigno con un poco de html para que se vea un poco mejor
        name.innerHTML =
        `
        <div class="nn">
            <p>Nombre: </p>
            <h3>${data.name}</h3>
        </div> 
        `
        username.innerHTML = 
        `
        <div class="nn">
            <p>Apellido: </p>
            <h3>${data.username}</h3>
        </div> 
        `
        email.innerHTML = 
        `
        <div class="nn">
            <p>Email: </p>
            <h3>${data.email}</h3>
        </div> 
        `
        addressStreet.innerHTML = 
        `
        <div class="nn">
            <p>Calle: </p>
            <h3>${data.address.street}</h3>
        </div> 
        `
        
        addressCity.innerHTML = 
        `
        <div class="nn">
            <p>Ciudad: </p>
            <h3>${data.address.city}</h3>
        </div> 
        `
        // para mostrarlo en el html
        aplicacion.appendChild(name)
        aplicacion.appendChild(username)
        aplicacion.appendChild(email)
        aplicacion.appendChild(addressStreet)
        aplicacion.appendChild(addressCity)
})
.catch(err => console.error(err))
// console.log(id);