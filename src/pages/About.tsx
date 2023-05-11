import React from "react";
import styled from "@emotion/styled";
import Image1 from "../images/image1.jpg";

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
  width: 50%;
  height: 75vh;
  background: #c9d4f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;
const Section2 = styled.div`
  width: 65%;
  height: 70%;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;
const Content = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Content2 = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Circle = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  border: 2px solid #537696;
  border-radius: 50%;
  background-image: url(${Image1});
  background-size: contain;
  background-repeat: no-repeat;
`;
const Text = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  p {
    font-size: 15px;
  }
`;
const Text2 = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 15px;
  }
`;

function About() {
  return (
    <Container>
      <Section>
        <Content>
          <Circle />
          <Text>
            <p>임경섭</p>
            <p>Frontend Developer</p>
            <p>1997.12.25</p>
            <p>010-3760-8380</p>
            <p>tkfkdrk12@naver.com</p>
          </Text>
        </Content>
        <Content2>
          <Text>
            <p>간단한 소개</p>
          </Text>
          <Section2>
            <Text2>
              <p>새로운 시도를 두려워하지 않는 개발자입니다.</p>
              <p>팀원과의 소통을 중요시하는 개발자입니다.</p>
              <p>저는 ~하는 개발자입니다.</p>
              <p>저는 ~하는 개발자입니다.</p>
            </Text2>
          </Section2>
        </Content2>
      </Section>
    </Container>
  );
}

export default About;
