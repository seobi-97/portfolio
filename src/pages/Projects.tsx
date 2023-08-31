import React from 'react'
import styled from "@emotion/styled";
import PetPli from "../images/petpli.png";
const Container = styled.div`

  overflow: hidden;
  font-family: "Roboto", serif;
  background-color: #e2f6ff;


.carousel {
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
}

.carousel-item {
  --items: 4;
  --width: clamp(150px, 30vw, 900px);
  --height: clamp(200px, 40vw, 400px);
  --x: calc(var(--active) * 300%);
  --y: calc(var(--active) * 200%);
  --rot: calc(var(--active) * 10deg);
  --opacity: calc(var(--zIndex) / var(--items) * 3 - 2);
  overflow: hidden;
  position: absolute;
  z-index: var(--zIndex);
  width: var(--width);
  height: var(--height);
  margin: calc(var(--height) * -0.5) 0 0 calc(var(--width) * -0.5);
  border-radius: 10px;
  top: 50%;
  left: 50%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transform-origin: 0% 100%;
  background: black;
  pointer-events: all;
  transform: translate(var(--x), var(--y)) rotate(var(--rot));
  transition: transform 0.8s cubic-bezier(0, 0.02, 0, 1);
}
.carousel-item .carousel-box {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
  opacity: var(--opacity);
  font-family: "Orelo-sw-db", serif;
}
.carousel-item .carousel-box:before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.5)
  );
}
.carousel-item .title {
  position: absolute;
  z-index: 1;
  color: #fff;
  bottom: 20px;
  left: 20px;
  transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
  font-size: clamp(20px, 3vw, 25px);
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}
.carousel-item .num {
  position: absolute;
  z-index: 1;
  color: #fff;
  top: 10px;
  left: 20px;
  transition: opacity 0.8s cubic-bezier(0, 0.02, 0, 1);
  font-size: clamp(20px, 10vw, 80px);
}
.carousel-item img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  pointer-events: none;
}

.layout {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.layout:before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 90px;
  width: 10px;
  height: 100%;
  border: 1px solid #fff;
  border-top: none;
  border-bottom: none;
  opacity: 0.15;
}
.layout .box {
  position: absolute;
  bottom: 0;
  left: 30px;
  color: #fff;
  transform-origin: 0% 10%;
  transform: rotate(-90deg);
  font-size: 9px;
  line-height: 1.4;
  text-transform: uppercase;
  opacity: 0.4;
}

.cursor {
  position: fixed;
  z-index: 7;
  top: 0;
  left: 0;
  --size: 40px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: calc(var(--size) * -0.5) 0 0 calc(var(--size) * -0.5);
  transition: transform 0.85s cubic-bezier(0, 0.02, 0, 1);
  display: none;
  pointer-events: none;
}
@media (pointer: fine) {
  .cursor {
    display: block;
  }
}

.cursor2 {
  --size: 2px;
  transition-duration: 0.7s;
}

`;
function Projects() {
  return (
    <Container>
      <div className='carousel'>
        <div className='carousel-item'>
          <div className='carousel-box'>
            <div className='title'></div>
            <div className='num'></div>
            <img src={PetPli} alt="project1"/>
          </div>
        </div>
        <div className='carousel-item'>
          <div className='carousel-box'>
            <div className='title'></div>
            <div className='num'></div>
            <img src={PetPli} alt="project2"/>
          </div>
        </div>
        <div className='carousel-item'>
          <div className='carousel-box'>
            <div className='title'></div>
            <div className='num'></div>
            <img src={PetPli} alt="project3"/>
          </div>
        </div>
        <div className='carousel-item'>
          <div className='carousel-box'>
            <div className='title'></div>
            <div className='num'></div>
            <img src={PetPli} alt="project4"/>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Projects
