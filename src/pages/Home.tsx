import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 93vh;
  background-color: #e2f6ff;
  position: relative;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  width: 55%;
  height: 75vh;
  background: #c9d4f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  animation: ${fadeInAnimation} 1s ease-in;
`;
function Home() {
  return (
    <Container>
      <Section>Home</Section>
    </Container>
  );
}

export default Home;
