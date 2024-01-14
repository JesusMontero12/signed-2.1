const searchInput = document.getElementById('search');
const resultList = document.getElementById('result-list');
const mapContainer = document.getElementById('map-container');
const currentMarkers = [];

const map = L.map(mapContainer).setView([-33.4482920, -70.6559841], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
 
        
document.getElementById("BtnSearch").addEventListener('click', (event) => {
      getData();
});


function getData(){
  //reajuste de clases para mostrar y ocultar caja de resultados
  resultList.classList.remove('displayNone');
  resultList.classList.add('displayContent');
  const query = searchInput.value;
  fetch('https://nominatim.openstreetmap.org/search?format=json&polygon=1&addressdetails=1&q=' + query)
    .then(result => result.json())
    .then(parsedResult => {
      setResultList(parsedResult);
    });
}



function setResultList(parsedResult) {
  resultList.innerHTML = "";
  for (const marker of currentMarkers) {
    map.removeLayer(marker);
  }
  map.flyTo(new L.LatLng(-33.4482920, -70.6559841), 8);
  for (const result of parsedResult) {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'list-group-item-action');
    li.innerHTML = JSON.stringify({
      displayName: result.display_name,
      lat: result.lat,
      lon: result.lon
    }, undefined, 2);
    //aqui
    li.addEventListener('click', (event) => {
      for (const child of resultList.children) {
        child.classList.remove('active');
      }
      event.target.classList.add('active');
      const clickedData = JSON.parse(event.target.innerHTML);
      const position = new L.LatLng(clickedData.lat, clickedData.lon);
      map.flyTo(position, 18);


      //reajuste de clases para mostrar y ocultar caja de resultados
      resultList.classList.remove('displayContent');
      resultList.classList.add('displayNone');

      //AQUI VARIABLES DE LATITUD Y LOGITUD


      direccion_db = searchInput.value;
      let operadorRango = new Decimal(0.00001000); 
      //VARIABLES DE RANDO LATITUD
      let lat1 = operadorRango.minus(clickedData.lat).toNumber(); 
      let lat2 = operadorRango.plus(clickedData.lat).toNumber();
      //VARIABLES DE RANDO LONGITUD
      let lon1 = operadorRango.minus(clickedData.lon).toNumber();
      let lon2 = operadorRango.plus(clickedData.lon).toNumber();

      
      let latUbiActual = new Decimal(-33.5426532);
      let zLat;
      let xLat;
      let yLat;

      let lonUbiActual = new Decimal(-70.6519958);
      zLon = -(lonUbiActual);
      xLon = (lon1);
      yLon = -(lon2);

      if(latUbiActual < 0.0){
        latUbiActual = -(latUbiActual);
      } else{
        latUbiActual = (latUbiActual);
      }
      
      if(zLat < 0.0){
        zLat = -(latUbiActual);
      } else{
        zLat = (latUbiActual);
      }
      
      if(xLat < 0.0){
        xLat = -(lat1);
      } else{
        xLat = (lat1);
      }

      if (yLat < 0.0){
        yLat = -(lat2);
      } else{
        yLat = (lat2);
      }
     

      if (zLat < xLat && zLat > yLat){
        if (zLon < xLon && zLon > yLon){
          //console.log(`El número dado ${zLat} se encuentra entre ${xLat} y ${yLat}`);
          console.log("longitud true.  aqui va funcion que guardara datos de la firma");
        } else {
          console.log('revisa tu ubicacion actual, estas fuera del rango para firmar:longitud');
        } 
        //console.log(`El número dado ${zLat} se encuentra entre ${xLat} y ${yLat}`);
        console.log("latitud true");
      } else {
        console.log('revisa tu ubicacion actual, estas fuera del rango para firmar: latitud');
      }   

      console.log(zLat, yLat, zLat);
    })
    const position = new L.LatLng(result.lat, result.lon);
    currentMarkers.push(new L.marker(position).addTo(map));
    resultList.appendChild(li);
  }
}

function habilitarInputs(cant, monto, btns){
  let input = document.getElementById(monto);
  let cantidad = document.getElementById(cant);
  let btn = document.getElementById(btns);

  if(input.disabled == false){
      input.disabled = true;
      input.classList.remove('inputSelect');
      cantidad.disabled = true;
      cantidad.classList.remove('inputSelect');
      btn.value = "Modificar";
  } else {
      input.disabled = false;
      input.classList.add('inputSelect');
      cantidad.disabled = false;
      cantidad.classList.add('inputSelect');
      btn.value = "Listo";
  }
}

//nav del tab informes desplega sub menus
let elementLists = document.querySelectorAll('.btnDesplegar');

elementLists.forEach(elementList => {
  elementList.addEventListener('click', () => {
    let height = 0;
    let menu = elementList.nextElementSibling;
    if(menu.clientHeight == "0"){
      height = menu.scrollHeight;
    }

    menu.style.height = `${height}px`;
  })
});


//tabconfiguracion desplega sub menus
let elementConfigs = document.querySelectorAll('.btnDesplegarConfig');

elementConfigs.forEach(elementConfig => {
  elementConfig.addEventListener('click', () =>{

    elementConfig.classList.toggle('arrow');

    let height = 0;
    let menu = elementConfig.nextElementSibling;
    if(menu.clientHeight == "0"){
      height = menu.scrollHeight;
    }
    menu.style.height = `${height}px`;
  })
});