import React from 'react';
import { TiTick } from 'react-icons/ti';
import Heading from '../../components/Heading/Heading';
import Flexbox from '../../components/Flexbox/Flexbox';
import { Navlist, StatisticsContainer, Wrapper } from './About.style';

const About = () => {
  return (
    <Wrapper>
      <Flexbox flexWrap="wrap" flexDirection="row">
        <Flexbox width="50%">
          <Navlist>
            <Heading size="lg" textIndent="40px">
              Biz haqimizda qisqacha!
            </Heading>
            <Heading size="sm" color="rgb(85, 85, 85)">
              Bizning asosiy afzalliklarimiz:
            </Heading>
            <ul>
              <li>
                Har bir o`quvchiga individual yondashadigan malakali
                o`qituvchilar;
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
                Ta`lim tili - rus tili.
              </li>
            </ul>
            <Heading size="sm" color="rgb(85, 85, 85)">
              Profi School - We teach better!
            </Heading>
          </Navlist>
        </Flexbox>

        {/* <----------------------------> */}

        <Flexbox width="50%">
          <StatisticsContainer>
            <Flexbox
              width="250px"
              height="250px"
              justifyContent="space-around"
              style={{ fontWeight: 'bold' }}
            >
              <Flexbox
                width="50%"
                height="50%"
                flexDirection="row"
                style={{
                  fontSize: '45px',
                  borderRadius: '100%',
                  boxShadow: 'rgba(37, 37, 218, 0.2) 0px 4px 29px 0px',
                  color: 'blue',
                }}
              >
                900
                <span>+</span>
              </Flexbox>
              <Heading>O`quvchilar soni</Heading>
            </Flexbox>
            <Flexbox
              width="250px"
              height="250px"
              justifyContent="space-around"
              style={{ fontWeight: 'bold' }}
            >
              <Flexbox
                width="50%"
                height="50%"
                flexDirection="row"
                style={{
                  fontSize: '45px',
                  borderRadius: '100%',
                  boxShadow: 'rgba(37, 37, 218, 0.2) 0px 4px 29px 0px',
                  color: 'blue',
                }}
              >
                80
                <span>+</span>
              </Flexbox>
              <Heading>IELTS 7.0+</Heading>
            </Flexbox>
            <Flexbox
              width="250px"
              height="250px"
              justifyContent="space-around"
              style={{ fontWeight: 'bold' }}
            >
              <Flexbox
                width="50%"
                height="50%"
                flexDirection="row"
                style={{
                  fontSize: '45px',
                  borderRadius: '100%',
                  boxShadow: 'rgba(37, 37, 218, 0.2) 0px 4px 29px 0px',
                  color: 'blue',
                }}
              >
                210
                <span>+</span>
              </Flexbox>
              <Heading>O`qituvchilar soni</Heading>
            </Flexbox>
            <Flexbox
              width="250px"
              height="250px"
              justifyContent="space-around"
              style={{ fontWeight: 'bold' }}
            >
              <Flexbox
                width="50%"
                height="50%"
                flexDirection="row"
                style={{
                  fontSize: '45px',
                  borderRadius: '100%',
                  boxShadow: 'rgba(37, 37, 218, 0.2) 0px 4px 29px 0px',
                  color: 'blue',
                }}
              >
                50
                <span>+</span>
              </Flexbox>
              <Heading style={{ fontSize: '22px' }}>
                Davlat granti asosida o`qishga kirganlar
              </Heading>
            </Flexbox>
          </StatisticsContainer>
        </Flexbox>
      </Flexbox>
    </Wrapper>
  );
};

export default About;
