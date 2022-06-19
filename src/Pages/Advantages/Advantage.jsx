import React from 'react';
import { BiTrendingUp } from 'react-icons/bi';
import Flexbox from '../../components/Flexbox/Flexbox';
import {
  AdvantagesCards,
  Card,
  UpLine,
  LessonBox,
  LessonBoxes,
  GoalsCard,
  PriceLabel,
  LessonsWrapper,
  GoalsWrapper,
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
          <Card key={el.title}>
            <span>{el.icon}</span>
            <Heading>{el.title}</Heading>
            <Text align="center">{el.text}</Text>
          </Card>
        ))}
      </AdvantagesCards>
      <GoalsWrapper>
        <GoalsCard>
          <div style={{ fontSize: '90px', color: 'white' }}>
            <BiTrendingUp />
          </div>
          <Flexbox width="60%" gap="20px">
            <Heading color="white" style={{ margin: '0' }}>
              Bizning vazifamiz
            </Heading>
            <Text color="white" size="lg" align="center" style={{ margin: '0' }}>
              Hayotga tayyorlaymiz.
            </Text>
          </Flexbox>
        </GoalsCard>
        <GoalsCard>
          <div style={{ fontSize: '90px', color: 'white' }}>
            <BiTrendingUp />
          </div>
          <Flexbox alignItems="flexStart" gap="20px" width="60%" borderRadius="10px">
            <Heading color="white" style={{ margin: '0' }}>
              Bizning maqsadimiz
            </Heading>
            <Text color="white" size="lg" align="center" style={{ margin: '0' }}>
              Ta`lim sifatni saqlab va oshirgan holda xususiy maktablar orasida lider bo`lish.
            </Text>
          </Flexbox>
        </GoalsCard>
      </GoalsWrapper>
      <LessonsWrapper marginTop="20px" width="100%">
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
    </Flexbox>
  );
};

export default Advantage;
