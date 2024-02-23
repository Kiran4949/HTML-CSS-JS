const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9a7c4765a8msh2369cf7e03f5f5fp12899ajsna820a43d24d6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
    cityName.innerHTML = city
 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {      
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like 
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp 
        wind_speed.innerHTML = response.wind_speed
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })

	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault() // it stops reload page  automatically.
    getWeather(city.value)
})

getWeather("Solapur")


const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const cardBody = document.querySelector('.card-body'); 
const cardheader = document.querySelector('.card-header'); 

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    this.classList.toggle('bi-brightness-high-fill');
    
    if (this.classList.contains('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        cardBody.style.background = 'white'; 
        cardBody.style.color = 'black'; 
        cardheader.style.background = 'white';
        cardheader.style.color = 'black';
        body.style.transition = '2s';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        cardBody.style.background = 'black'; 
        cardBody.style.color = 'white'; 
        cardheader.style.background = 'black'; 
        cardheader.style.color = 'white'; 
        body.style.transition = '2s';
    }
});