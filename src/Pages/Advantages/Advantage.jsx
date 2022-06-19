import React from 'react';
import { BiTrendingUp } from 'react-icons/bi';
import Flexbox from '../../components/Flexbox/Flexbox';
import {
  AdvantagesCards,
  AdvantagesLessonBoxesBoxTxtBox,
  UpLine,
  LessonBox,
  LessonBoxes,
  AdvantagesCardsCards,
  GoalsCard,
} from './Advantage.style';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { about } from '../../mock/about';

const Advantage = () => {
  return (
    <Flexbox>
      <Heading size="lg">Bizning afzalliklarimiz</Heading>
      <UpLine />
      <AdvantagesCards>
        {about.map((el) => (
          <AdvantagesCardsCards key={el.title}>
            <span>{el.icon}</span>
            <h1>{el.title}</h1>
            <p>{el.text}</p>
          </AdvantagesCardsCards>
        ))}
      </AdvantagesCards>
      <Flexbox flexDirection="row" width="100%" flexWrap="wrap">
        <GoalsCard>
          <div style={{ fontSize: '90px', color: 'white' }}>
            <BiTrendingUp />
          </div>
          <Flexbox
            alignItems="flexStart"
            gap="20px"
            width="60%"
            borderRadius="10px"
          >
            <Heading color="white">Bizning vazifamiz</Heading>
            <Text color="white" size="lg" textAlign="center">
              Hayotga tayyorlaymiz.
            </Text>
          </Flexbox>
        </GoalsCard>
        <GoalsCard>
          <div style={{ fontSize: '90px', color: 'white' }}>
            <BiTrendingUp />
          </div>
          <Flexbox
            alignItems="flexStart"
            gap="20px"
            width="60%"
            borderRadius="10px"
          >
            <Heading color="white">Bizning maqsadimiz</Heading>
            <Text color="white" size="lg" textAlign="center">
              Ta`lim sifatni saqlab va oshirgan holda xususiy maktablar orasida
              lider bo’lish.
            </Text>
          </Flexbox>
        </GoalsCard>
      </Flexbox>
      <Flexbox marginTop="20px" width="100%">
        <Heading size="lg">Bizning Darslarimiz</Heading>
        <UpLine />
        <LessonBoxes>
          <LessonBox>
            <Heading>SCIENCE IN ENGLISH</Heading>
            <AdvantagesLessonBoxesBoxTxtBox>
              Bepul
            </AdvantagesLessonBoxesBoxTxtBox>
            <ul>
              <li>Darslarning davomiyligi haftasiga 1 marta 45 minut</li>
              <li>Dars davomiyligi: 5-9 sinflar</li>
              <li>Kurs to`lovlari maktab to`lovi ichiga kiritilgan</li>
            </ul>
            <Button
              width="95%"
              height="45px"
              borderRadius="20px"
              bgColor="#000c3f"
            >
              Aloqa
            </Button>
          </LessonBox>
          <LessonBox>
            <Heading>SPEAKING COURSE</Heading>
            <AdvantagesLessonBoxesBoxTxtBox>
              Bepul
            </AdvantagesLessonBoxesBoxTxtBox>
            <ul>
              <li>Darslarning davomiyligi 90 minut, haftasiga 3 marta.</li>
              <li>Kurs davomiyligi: cheklanmagan</li>
              <li>Kurs to`lovlari maktab to`lovi ichiga kiritilgan.</li>
            </ul>
            <Button
              width="95%"
              height="45px"
              borderRadius="20px"
              bgColor="#000c3f"
            >
              Aloqa
            </Button>
          </LessonBox>
        </LessonBoxes>
      </Flexbox>
    </Flexbox>
  );
};

export default Advantage;
