import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #c3bef0;
  justify-content: center;
  align-items: center;
  z-index: 1;
  ul {
    list-style: none;
  }
  li {
    float: left;
    margin-right: 2rem;
  }
`;

function Nav() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/skills">SKILLS</Link>
        </li>
        <li>
          <Link to="/project">PROJECT</Link>
        </li>
      </ul>
    </Container>
  );
}

export default Nav;
