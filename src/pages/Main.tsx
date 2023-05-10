import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dceaff;
  position: relative;
  top: 50px;
  display: flex;
`;
function Main() {
  return (
    <>
      <Container>main page</Container>
      <Container>about page</Container>
    </>
  );
}

export default Main;
