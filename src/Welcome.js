import React from "react";
import styled from "styled-components";

export default function Welcome() {
  return (
    <Box>
      <Title>Loading...</Title>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #000000;
  font-size: 42px;
  color: lightgreen;
  cursor: pointer;
`;
