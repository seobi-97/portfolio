import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  position: fixed;
  opacity: 1;
  bottom: 40px;
  right: 40px;
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  transition: opacity 0.3s ease-in;
  background-color: black;
  color: white;
  :active {
    z-index: 10;
    opacity: 1;
  }
`;
function TopButton() {
  return (
    <div>
      <Button>Top</Button>
    </div>
  );
}

export default TopButton;
