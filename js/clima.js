let long;
let lat;
let temperatura = document.getElementById("temperatura");
let sumary = document.getElementById("summary");
let lugar = document.getElementById("lugar");
let icono = document.getElementById("icono");
const kelvin = 273.15;

document.addEventListener('DOMContentLoaded',() => {
    if (navigator.geolocation) {
//determinao donde estoy
        navigator.geolocation.getCurrentPosition((position)=>{
            //tomo la longitud y latitud del objeto position que tiene el objeto coords
            long = position.coords.longitude;
            lat = position.coords.latitude;
            //mi clave API
            const api = "0cf5df1095c90ee7fe2f04b1fdc0ed43"
            //llamada
            const url_openW = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}`;
             //llamo a una promesa y si se cumple que me devuelva un jason
             fetch(url_openW).then((Response)=>{
                return Response.json();
              
             })   
             //esto es para ver si trae datos, si tiene datos que lo muestre en consola
             .then((data)=>{
                console.log(data);
                let codigoIcono = data.weather[0].icon;
               codigoTiempo = data.weather[0].description;
                    
                console.log(codigoIcono);
                //ahora cargo los valores en el HTML y formateo el valor como flotante Math
                //para pasar la termperatura a grados C
                temperatura.textContent = Math.floor(data.main.temp - kelvin)+ "°C";
               // sumary.textContent = data.weather[0].description;
                lugar.textContent = data.name + "," + data.sys.country;
                let urlIcono = "https://openweathermap.org/img/wn/" + codigoIcono + "@2x.png";
               //icono.setAttribute('crs',urlIcono);
                icono.src= urlIcono;
               //console.log(icono);
                traducir(codigoTiempo);
                console.log(codigoTiempo);
             }); 

             const traducir = (codigoTiempo)=>{
                if(codigoTiempo === "scattered clouds"){
                    sumary.textContent = "nubes dispersas";
                }
                if(codigoTiempo === "broken clouds"){
                    sumary.textContent = "nubes rotas";
                }

                if(codigoTiempo === "clear sky"){
                    sumary.textContent = "cielo despejado";
                }
                if(codigoTiempo === "few clouds"){
                    sumary.textContent = "pocas nubes";
                }
                if(codigoTiempo === "shower rain"){
                    sumary.textContent = "aguacero";
                }
                if(codigoTiempo === "rain"){
                    sumary.textContent = "lluvia";
                }
                if(codigoTiempo === "thunderstorm"){
                    sumary.textContent = "tormenta";
                }

                if(codigoTiempo === "snow"){
                    sumary.textContent = "nieve";
                }
                if(codigoTiempo === "mist"){
                    sumary.textContent = "neblina";
                }
                

             }

        });

    }

 });