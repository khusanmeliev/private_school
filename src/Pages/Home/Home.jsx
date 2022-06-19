import React from 'react';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import Flexbox from '../../components/Flexbox/Flexbox';

const Home = () => {
  return (
    <Flexbox height="80vh" style={{ padding: ' 0 40px', marginTop: '80px' }}>
      <Heading size="lg">
        <span style={{ color: '#f8a408' }}>Elite School </span>
        imkoniyatlar chegaralanmagan makon
      </Heading>
      <Text size="lg" align="center">
        Elite School xususiy maktabi endigina o`z faoliyatini boshladi. Dastlabki yildanoq maktabda o`z sohasining eng
        ko`zga ko`ringan, yuqori malakali mutaxassislari faoliyat olib boradi. Maktab ingliz tili va matematikani chuqur
        o`rgatishga ixtisoslashgan.
      </Text>
      <a href="#">
        <Button bgColor="#ffa500" width="200px" height="35px">
          Biz bilan bog`lanish
        </Button>
      </a>
    </Flexbox>
  );
};

export default Home;
