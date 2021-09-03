const ApiKey = `234b8049ce9d4425cba37fd9c3f95cb1`;

const Searchtemparature = () => {
    const city = document.getElementById('CityName').value;
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
    fetch(Url)
        .then(res => res.json())
        .then(data => DisplayTemparature(data));
}
const SetCity = (ID, cityDetails) => {
    document.getElementById(ID).innerText = cityDetails;
}
const DisplayTemparature = Temparature => {

    // Amother Way 

    document.getElementById('City').innerText = Temparature.name;
    document.getElementById('Degree').innerText = Temparature.main.temp;
    /*  SetCity('City', Temparature.name);
     SetCity('Degree', Temparature.main.temp); */
    SetCity('Condition', Temparature.weather[0].main);
    const Url = `http://openweathermap.org/img/wn/${Temparature.weather[0].icon}@2x.png`;
    const ImgIcon = document.getElementById('WeatherIcon');
    ImgIcon.setAttribute('src', Url);
    console.log(Temparature);
}