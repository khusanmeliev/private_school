import React from 'react';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import Flexbox from '../../components/Flexbox/Flexbox';

const Home = () => {
  return (
    <Flexbox height="100vh">
      <Heading size="lg" fontFamily="sans-serif">
        <span style={{ color: '#f8a408' }}>Profi School</span>
        Imkoniyatlar chegaralanmagan makon
      </Heading>
      <Text
        size="lg"
        style={{ width: '600px', textAlign: 'center', letterSpacing: '1px' }}
      >
        Profi School – Xususiy maktabi ikki yildan ziyod vaqt mobaynida faoliyat
        olib bormoqda. Maktabda o’z sohasining eng ko’zga ko’ringan, yuqori
        malakali mutaxassislari faoliyat olib boradi. Maktab ingliz tili va
        matematikani chuqur o’rgatishga ixtisoslashgan.
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
