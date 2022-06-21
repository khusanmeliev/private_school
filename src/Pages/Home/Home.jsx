import React from 'react';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import EliteLogo from '../../assets/img/ELITA.png';
import { Wrapper } from './Home.style';

const Home = () => {
  return (
    <Wrapper id="home">
      <Heading>
        <span style={{ color: '#f8a408' }}>Elite Academic School </span>
        imkoniyatlar chegaralanmagan makon
      </Heading>
      <img width="200px" src={EliteLogo} alt="logo" />
      <Text size="lg" align="center">
        Elite Academic School xususiy maktabi endigina o`z faoliyatini boshladi. Dastlabki yildanoq maktabda o`z
        sohasining eng ko`zga ko`ringan, yuqori malakali mutaxassislari faoliyat olib boradi. Maktab ingliz tili va
        matematikani chuqur o`rgatishga ixtisoslashgan.
      </Text>
      <a href="#contact">
        <Button bgColor="#ffa500" width="200px" height="35px">
          Biz bilan bog`lanish
        </Button>
      </a>
    </Wrapper>
  );
};

export default Home;
