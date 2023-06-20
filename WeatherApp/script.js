let API_KEY = "#";

getWeatherData= (lat, lon) => {
    //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    const URL = "https://api.openweathermap.org/data/2.5/weather";

    const FULL_URL = `${URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((response)=> {
        return response.json();
    })
}
// console.log(getWeatherData(86.7567, 26.5419))

searchCity = () => {
    const citylat=document.getElementById('city-input1').value;
    const citylon=document.getElementById('city-input2').value;
    // console.log(getWeatherData(citylat,citylon));
    getWeatherData(citylat, citylon)
    .then((response)=>{
        // console.log(response)
        showWeatherData(response);
    }).catch((error)=>{
        console.log(error)
    })


}


showWeatherData = (weatherData) => {
    //Coding....
    const cityN=weatherData.name;
    const countryN=weatherData.sys.country;
    const finalN=`${cityN}(${countryN})`;
    // const Temp_In_C=(weatherData.main.temp-32)*5/9;
    // const min_Temp_In_C=(weatherData.main.temp_min-32)*5/9;
    // const max_Temp_In_C=(weatherData.main.temp_max-32)*5/9;
    const Temp_In_C=weatherData.main.temp;
    const min_Temp_In_C=weatherData.main.temp_min;
    const max_Temp_In_C=weatherData.main.temp_max;

    document.getElementById("city-name").innerText=finalN;
    document.getElementById("weather-type").innerHTML=weatherData.weather[0].main;
    document.getElementById("temp").innerText=Temp_In_C;
    document.getElementById('min-temp').innerText=min_Temp_In_C;
    document.getElementById('max-temp').innerText=max_Temp_In_C;

}
