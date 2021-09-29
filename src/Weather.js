import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CloudIcon from "@material-ui/icons/Cloud";
import PublicIcon from "@material-ui/icons/Public";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import TodayIcon from "@material-ui/icons/Today";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Welcome from "./Welcome";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import {
  Container,
  Title,
  Input,
  Body,
  Form,
  Button,
  Text,
  WeatherContainer,
  Div,
} from "./Style";

export default function Weather() {
  const [weather, setWeather] = useState("");
  const [input, setInput] = useState("");
  const [time, setTime] = useState("");

  const API_KEY = "b953b1d0c0dd56a518c427b4a23568bd";

  const WeatherData = (e) => {
    e.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
    console.log(weather);
    if (input.length <= 2) {
      return alert("Something went wrong check your input");
    }

    setInput("");
  };
  const Date1 = () => {
    let date = new Date().toLocaleDateString();
    return date;
  };

  useEffect(() => {
    const time = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <Container>
      <Body>
        <Title>Weather app 1.0</Title>
        <Form>
          <Input
            required={true}
            placeholder="Search by City Name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></Input>
          <Button disabled={!input} onClick={WeatherData}>
            Search
          </Button>
        </Form>
        {!weather ? (
          <Welcome></Welcome>
        ) : (
          <WeatherContainer>
            <Div>
              <LocationCityIcon style={{ color: "gray" }}></LocationCityIcon>
              <Text>{weather?.name}</Text>
            </Div>
            <Div>
              {Math.floor(weather.main?.temp > 25) ? (
                <WhatshotIcon style={{ color: "red" }}></WhatshotIcon>
              ) : Math.floor(weather.main?.temp < 10) ? (
                <AcUnitIcon style={{ color: "A0BAEB" }}></AcUnitIcon>
              ) : (
                <ThumbUpIcon style={{ color: "green" }}></ThumbUpIcon>
              )}
              <Text>Temperature: {Math.floor(weather.main?.temp)}°C</Text>
            </Div>
            <Div>
              <ScheduleIcon style={{ color: "#E05912" }}></ScheduleIcon>
              <Text>{time}</Text>
            </Div>
            <Div>
              <PublicIcon style={{ color: "#256DDE" }}></PublicIcon>
              <Text>{weather.sys?.country}</Text>
            </Div>
            <Div>
              <TodayIcon style={{ color: "red" }}></TodayIcon>
              <Text>{Date1()}</Text>
            </Div>

            <Div>
              {weather.weather[0]?.main.includes("Clear") ? (
                <WbSunnyIcon style={{ color: "yellow" }}></WbSunnyIcon>
              ) : weather.weather[0]?.main.includes("Cloud") ? (
                <CloudIcon style={{ color: "#256DDE" }}></CloudIcon>
              ) : (
                ""
              )}
              <Text>{weather.weather[0]?.description}</Text>
            </Div>
          </WeatherContainer>
        )}
      </Body>
    </Container>
  );
}
