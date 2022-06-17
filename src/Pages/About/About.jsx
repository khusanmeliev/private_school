import React from "react";
import { TiTick } from "react-icons/ti";
import {
  Container,
  NumberBox,
  PreferencesText,
  Statistics,
  StatisticsBox,
  StatisticsContainer,
  TextBox,
} from "./About.style";

function About() {
  return (
    <Container>
      <PreferencesText>
        <TextBox>
          <h2>Biz haqimizda qisqacha!</h2>
          <h3>Bizning asosiy afzalliklarimiz:</h3>
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
          <h3>Profi School - We teach better!</h3>
        </TextBox>
      </PreferencesText>

      {/* <----------------------------> */}

      <Statistics>
        <StatisticsContainer>
          <StatisticsBox>
            <NumberBox>
              900<span>+</span>
            </NumberBox>
            <h2>O'quvchilar soni</h2>
          </StatisticsBox>
          <StatisticsBox>
            <NumberBox>80+</NumberBox>
            <h2>
              IELTS 7.0<span>+</span>
            </h2>
          </StatisticsBox>
          <StatisticsBox>
            <NumberBox>
              210<span>+</span>
            </NumberBox>
            <h2>O'qituvchilar soni</h2>
          </StatisticsBox>
          <StatisticsBox>
            <NumberBox>
              50<span>+</span>
            </NumberBox>
            <h2>Davlat granti asosida o'qishga kirganlar</h2>
          </StatisticsBox>
        </StatisticsContainer>
      </Statistics>
    </Container>
  );
}

export default About;
