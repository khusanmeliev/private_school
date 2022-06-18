import React from "react";
import { TiTick } from "react-icons/ti";
import { StyledHeading } from "../../components/Text/StyledText";
import {
  Container,
  NumberBox,
  PreferencesText,
  Statistics,
  StatisticsBox,
  StatisticsContainer,
  TextBox,
} from "./About.style";
import { statisticsBox } from "./statisticsBox";

function About() {
  return (
    <Container>
      <PreferencesText>
        <TextBox>
          <StyledHeading fontSize="40px" textIndent="40px">
            Biz haqimizda qisqacha!
          </StyledHeading>
          <StyledHeading fontSize="25px" color="rgb(85, 85, 85)">
            Bizning asosiy afzalliklarimiz:
          </StyledHeading>
          <ul>
            <li>
              Har bir o'quvchiga individual yondashadigan malakali
              o'qituvchilar;
            </li>
            <li>
              <TiTick /> Kuniga 3 mahal ovqatlanish;
            </li>
            <li>
              <TiTick />
              Maktab avtobusi;
            </li>
            <li>
              <TiTick /> Sport va turli to'garaklar;
            </li>
            <li>
              <TiTick /> Interaktiv o'quv jarayoni;
            </li>
            <li>
              <TiTick /> Har xil ko'ngilochar tadbirlar.
            </li>
            <li>
              <TiTick /> Ta'lim tili - rus tili.
            </li>
          </ul>
          <StyledHeading fontSize="25px" color="rgb(85, 85, 85)">
            Profi School - We teach better!
          </StyledHeading>
        </TextBox>
      </PreferencesText>

      {/* <----------------------------> */}

      <Statistics>
        <StatisticsContainer>
          <StatisticsBox>
            <NumberBox>
              900<span>+</span>
            </NumberBox>
            <StyledHeading>O'quvchilar soni</StyledHeading>
          </StatisticsBox>
          <StatisticsBox>
            <NumberBox>
              80<span>+</span>
            </NumberBox>
            <StyledHeading>IELTS 7.0+</StyledHeading>
          </StatisticsBox>
          <StatisticsBox>
            <NumberBox>
              210<span>+</span>
            </NumberBox>
            <StyledHeading>O'qituvchilar soni</StyledHeading>
          </StatisticsBox>
          <StatisticsBox>
            <NumberBox>
              50<span>+</span>
            </NumberBox>
            <StyledHeading>Davlat granti asosida o'qishga kirganlar</StyledHeading>
          </StatisticsBox>
        </StatisticsContainer>
      </Statistics>
    </Container>
  );
}

export default About;
