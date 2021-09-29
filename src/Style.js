import styled from "styled-components";
export {
  Container,
  Body,
  Title,
  Input,
  Form,
  Button,
  Text,
  WeatherContainer,
  Div,
};

const Container = styled.div`
  background: whitesmoke;
  display: grid;
  place-items: center;
  height: 100vh;
  justify-content: center;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 25px;
`;

const Title = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const Input = styled.input`
  width: 250px;
  height: 33px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: lightgray;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.81);
  border: none;
  outline: none;
  font-size: 18px;
  height: 30px;
  margin-left: 10px;
  text-align: center;
  border-radius: 8px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const WeatherContainer = styled.div`
  margin-top: 45px;
  padding: 65px 85px;
  background-color: lightgray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 4px 6px 4px rgba(0, 0, 0, 0.75);
`;
const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 18px;
  color: #000;
  font-weight: 500;
  text-decoration: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding-left: 10px;
`;
