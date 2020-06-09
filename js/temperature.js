const temperature = () => {

    const celsius = document.getElementById('btnCel');
    celsius.addEventListener('click', () => {

        const url = `https://api.weatherapi.com/v1/forecast.json?key=6ac2cbb5a784483ca0405328200206&q=${location}&days=4`;
        fetch(url)
            .then(response => response.json())
            .then((response) => {
                document.getElementById('tempNow').innerText = `${response.current.temp_c}`;
                document.getElementById('feelsLike').innerText = ` Feels Like: ${response.current.feelslike_c}°`;
                document.getElementById('wind').innerText = ` Wind: ${response.current.wind_kph}`;
                document.getElementById('forecastTemp').innerText = `${response.forecast.forecastday[0].day.maxtemp_c}°`;
                document.getElementById('forecastTempSecond').innerText = `${response.forecast.forecastday[1].day.maxtemp_c}°`;
                document.getElementById('forecastTempThird').innerText = `${response.forecast.forecastday[2].day.maxtemp_c}°`;
            })
    })

    const fahrenheit = document.getElementById('btnFar');

    fahrenheit.addEventListener('click', () => {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=6ac2cbb5a784483ca0405328200206&q=${location}&days=4`;
        fetch(url)
            .then(response => response.json())
            .then((response) => {
                document.getElementById('tempNow').innerText = `${response.current.temp_f}`;
                document.getElementById('feelsLike').innerText = ` Feels Like: ${response.current.feelslike_f}°`;
                document.getElementById('wind').innerText = ` Wind: ${response.current.wind_mph}`;
                document.getElementById('forecastTemp').innerText = `${response.forecast.forecastday[0].day.maxtemp_f}°`;
                document.getElementById('forecastTempSecond').innerText = `${response.forecast.forecastday[1].day.maxtemp_f}°`;
                document.getElementById('forecastTempThird').innerText = `${response.forecast.forecastday[2].day.maxtemp_f}°`;
            })
    })

}




export default temperature;