const api_key='da2055a1cb4e7e09582dd43230564398';
let city='chennai';

let city_dname=document.getElementById('city');
const temp=document.getElementById('temp');
const humidity=document.getElementById('humidity');
let appearance=document.getElementById('appearance');
let icons=document.getElementById('icon');
let err=document.getElementById('issue');

function submit(){
    const city_name=document.getElementById('input').value;
    city=city_name;
    getWeather()
}

async function getWeather(){
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
        console.log(response)

        let list=document.querySelectorAll('.weather-report');
        let temperature;
        let icon_id;

        if(!response.ok){
            let list=document.querySelectorAll('.weather-report');
            console.log(list)
            list.forEach(element => {
                element.style.display='none'
            });
            err.style.display='block'
            err.textContent='Enter the Valid City'
            throw new Error("There is a Bug");
           
        }
        err.style.display='none'
        list.forEach(element => {
            element.style.display='block'
        });
        const data=await response.json();

        city_dname.textContent=data.name;
        temperature=(data.main.temp-32)*5/9;
        temp.textContent=`Temperature : ${temperature.toFixed(2)}℃`;
        humidity.textContent=`Humidity : ${data.main.humidity}%`;
        appearance.textContent=data.weather[0].description;
        icon_id = data.weather[0].id;
        console.log(icon_id);
        
        switch (true) {
            case (icon_id >=200 && icon_id< 300):
                icons.textContent = '⛈';
                console.log("yesss");
                break;
            case (icon_id >= 300 && icon_id < 500):
                icons.textContent = '☔️';
                break;
            case (icon_id >= 500 && icon_id < 600):
                icons.textContent = '🌧';
                break;
            case (icon_id >= 600 && icon_id < 700):
                icons.textContent = '❄';
                break;
            case (icon_id >= 700 && icon_id < 800):
                icons.textContent = '🌫';
                break;
            case (icon_id == 800):
                icons.textContent = '🌞';
                break;
            case (icon_id > 800):
                icons.textContent = '⛅';
                break;
        }
      
    }
    catch(error){
        console.log(error)
    }
}

getWeather()