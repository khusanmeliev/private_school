import React from 'react';
import { TiTick } from 'react-icons/ti';
import Heading from '../../components/Heading/Heading';
import Flexbox from '../../components/Flexbox/Flexbox';
import { CircleBox, Navlist, StatisticsContainer, Wrapper } from './About.style';

const About = () => {
  return (
    <Wrapper id="about">
      <Flexbox flexWrap="wrap" flexDirection="row">
        <Flexbox>
          <Heading size="lg">Biz haqimizda qisqacha!</Heading>
          <Heading size="sm">Bizning asosiy afzalliklarimiz:</Heading>
          <Navlist>
            <li>
              <TiTick />
              Har bir o`quvchiga individual yondashadigan malakali o`qituvchilar;
            </li>
            <li>
              <TiTick />
              Kuniga 3 mahal ovqatlanish;
            </li>
            <li>
              <TiTick />
              Maktab avtobusi;
            </li>
            <li>
              <TiTick />
              Sport va turli to`garaklar;
            </li>
            <li>
              <TiTick />
              Interaktiv o`quv jarayoni;
            </li>
            <li>
              <TiTick />
              Har xil ko`ngilochar tadbirlar.
            </li>
            <li>
              <TiTick />
              Ta`lim tili - o`zbek tili.
            </li>
          </Navlist>
          <Heading size="md" align="center">
            Elite Academic School - We teach better!
          </Heading>
        </Flexbox>

        {/* <----------------------------> */}

        <Flexbox width="50%">
          <StatisticsContainer>
            <Flexbox width="250px" justifyContent="space-around" style={{ fontWeight: 'bold' }}>
              <CircleBox>
                160
                <span>+</span>
              </CircleBox>
              <Heading>O`quvchilar soni</Heading>
            </Flexbox>
            <Flexbox width="250px" justifyContent="space-around" style={{ fontWeight: 'bold' }}>
              <CircleBox>
                12
                <span>+</span>
              </CircleBox>
              <Heading>IELTS 7.0+</Heading>
            </Flexbox>
            <Flexbox width="250px" justifyContent="space-around" style={{ fontWeight: 'bold' }}>
              <CircleBox>
                16
                <span>+</span>
              </CircleBox>
              <Heading>O`qituvchilar soni</Heading>
            </Flexbox>
            <Flexbox width="250px" justifyContent="space-around" style={{ fontWeight: 'bold' }}>
              <CircleBox>
                10
                <span>+</span>
              </CircleBox>
              <Heading style={{ fontSize: '22px' }}>Davlat granti</Heading>
            </Flexbox>
          </StatisticsContainer>
        </Flexbox>
      </Flexbox>
    </Wrapper>
  );
};

export default About;
