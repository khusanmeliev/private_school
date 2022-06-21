import React from 'react';
import {
  AdvantagesCards,
  Card,
  UpLine,
  LessonBox,
  LessonBoxes,
  PriceLabel,
  LessonsWrapper,
  Wrapper,
} from './Advantage.style';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { about } from '../../mock/about';

const Advantage = () => {
  return (
    <Wrapper id="advantages">
      <Heading size="lg">Bizning afzalliklarimiz</Heading>
      <UpLine />
      <AdvantagesCards>
        {about.map((el) => (
          <Card key={el.title}>
            <span>{el.icon}</span>
            <Heading>{el.title}</Heading>
            <Text align="center">{el.text}</Text>
          </Card>
        ))}
      </AdvantagesCards>

      <LessonsWrapper marginTop="20px" width="100%" id="lessons">
        <Heading size="lg">Bizning Darslarimiz</Heading>
        <UpLine />
        <LessonBoxes>
          <LessonBox>
            <Heading>SCIENCE IN ENGLISH</Heading>
            <PriceLabel>Bepul</PriceLabel>
            <ul>
              <li>Darslarning davomiyligi haftasiga 1 marta 45 minut</li>
              <li>Dars davomiyligi: 5-9 sinflar</li>
              <li>Kurs to`lovlari maktab to`lovi ichiga kiritilgan</li>
            </ul>
            <Button width="95%" height="45px" bgColor="#000c3f">
              Aloqa
            </Button>
          </LessonBox>
          <LessonBox>
            <Heading>SPEAKING COURSE</Heading>
            <PriceLabel>Bepul</PriceLabel>
            <ul>
              <li>Darslarning davomiyligi 90 minut, haftasiga 3 marta.</li>
              <li>Kurs davomiyligi: cheklanmagan</li>
              <li>Kurs to`lovlari maktab to`lovi ichiga kiritilgan.</li>
            </ul>
            <Button width="95%" height="45px" bgColor="#000c3f">
              Aloqa
            </Button>
          </LessonBox>
        </LessonBoxes>
      </LessonsWrapper>
    </Wrapper>
  );
};

export default Advantage;
