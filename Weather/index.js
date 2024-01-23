const api_key='da2055a1cb4e7e09582dd43230564398';
let city='israel';

let city_dname=document.getElementById('city');
const temp=document.getElementById('temp');
const humidity=document.getElementById('humidity');
let appearance=document.getElementById('appearance');
let icons=document.getElementById('icon');
let err=document.getElementById('error');

function submit(){
    const inp=document.getElementById('input').value;

    city=inp;
    console.log(city)
}

async function getWeather(){
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
        console.log(response)

        if(!response.ok){
            throw new Error("There is a Bug")
        }

        const data=await response.json();

        city_dname.textContent=data.name;
        temp.textContent=`Temperature : ${data.main.temp}`;
        humidity.textContent=`Humidity : ${data.main.humidity}`;
        appearance.textContent=data.weather[0].description;
        let icon_id = data.weather[0].id;
        console.log(icon_id);
        
        switch (true) {
            case (icon_id >=211 && icon_id< 300):
                icons.textContent = '⛈';
                console.log("yesss");
                break;
            case (icon_id >= 300 && icon_id < 500):
                icons.textContent = '⛈';
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
        
     //   console.log(data)
        // appearance=data[main].humidity;
    }
    catch(error){
        console.log(error)
    }
}
getWeather()