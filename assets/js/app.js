const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//aguegue un punto ya que en html name es una clase
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');
//Use la función async (para ejecutar lo demás sin tener que espear)
async function displayUser(username) {
  //Use try para ejecutar bloque 
  try {
    //Cambio de letra c por mayuscula por estética 
  $n.textContent = 'Cargando...';
  
  const response = await fetch(`${usersEndpoint}/${username}`);
  

    //extraemos de la API con archivos json que acepte javascrip
  const data = await response.json();
  
  console.log(data);
  //Buena práctiva para evaluar la variable usamos las comillas invertidas
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
  //Use catch para manejar errores con catch (palabra reservada)
  
} catch (err) {
  //llame la funcio´n hadle
  handleError(err);
}
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //Buena practica aguegue punto y coma
  n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);

