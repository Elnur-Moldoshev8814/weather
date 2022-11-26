let inpurCity = document.querySelector('#cityinput');
let bnt = document.querySelector('#add');
let city = document.querySelector('#cityoutput');
let desc = document.querySelector('#description');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let error = document.querySelector('#error')

let KEY = 'b0f7e2a5667c096d128b13d9565fd3ed'

function Convertion(value) {
    return(value - 273).toFixed(2);
}

bnt.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inpurCity.value}&appid=${KEY}`)
    .then(res => res.json())
    .then(data => {
        let CityName = data['name'];
        let Desc = data['weather']['0']['description'];
        let Temp = data['main']['temp'];
        let Speed = data['wind']['speed'];

        city.innerHTML = `Weather of <span>${CityName}</span>`
        temp.innerHTML =  `Temperature: <span>${Convertion(Temp)}</span>`
        desc.innerHTML = `Sky is <span>${Desc}</span>`
        wind.innerHTML =  `Wind speed <span>${Speed}</span>`
    })
    bnt.onerror = () => {
        error.textContent = `This is not city`
    }
});

let s = [1, 10];
let d = [2, 3, 4, 5, 6, 7, 8, 9];
function ss(params) {
    
}