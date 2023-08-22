import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.jpeg";
import drizzle_icon from "../Assets/drizzle.jpeg";
import humidity_icon from "../Assets/humidity.jpeg";
import rain_icon from "../Assets/rain.jpeg";
import snow_icon from "../Assets/snow.jpeg";
import wind_icon from "../Assets/wind.png";
import { useState } from "react";

const WeatherApp = () => {

    let apiKey = "4387d4fa410e064e7157b1864c769860&units=Metric";
    const [ weatherIcon, setWeatherIcon ] = useState(cloud_icon);

    const search = async () => {
        let element = document.getElementsByClassName("cityInput");
        if(element[0].value === ""){
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${apiKey}`;

        let response = await fetch(url);
        let data = await response.json();
        let humidity = document.getElementsByClassName("humidity-percentage");
        let wind = document.getElementsByClassName("wind-speed");
        let temp= document.getElementsByClassName("weather-temp");
        let location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + "Km/h";
        temp[0].innerHTML = data.main.temp + "°C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            setWeatherIcon(clear_icon);
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWeatherIcon(cloud_icon);
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWeatherIcon(drizzle_icon);
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWeatherIcon(drizzle_icon);
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWeatherIcon(rain_icon);
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWeatherIcon(rain_icon);
        }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWeatherIcon(snow_icon);
        }
        else{
            setWeatherIcon(clear_icon);
        }

    }
  return (
    <div className="container">
      <div className="top-bar">
            <input type="text" className="cityInput" placeholder="Search"/>
            <div className="searchIcon" onClick={search}>
                <img src={search_icon} alt="search-icon" />
            </div>
        </div>
            <div className="weather-image">
                <img src={weatherIcon} alt="cloud-icon" />
            </div>  
            <div className="weather-temp">24C</div>    
            <div className="weather-location">Delhi</div>   
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="humidity_icon" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} alt="wind_icon" className="icon" />
                    <div className="data">
                        <div className="wind-speed">18 Km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default WeatherApp