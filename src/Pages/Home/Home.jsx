import React from "react";
import { StyledButton } from "../../components/Button/Button";
import { StyledHeading } from "../../components/Text/StyledText";
import { Container } from "./Home.style";

function Home() {
  return (
    <Container>
      <StyledHeading fontSize='42px' fontFamily='sans-serif' color="white"><span style={{color: '#f8a408'}}>Profi School</span> Imkoniyatlar chegaralanmagan makon</StyledHeading>
      <p>
        Profi School – Xususiy maktabi ikki yildan ziyod vaqt mobaynida faoliyat
        olib bormoqda. Maktabda o’z sohasining eng ko’zga ko’ringan, yuqori
        malakali mutaxassislari faoliyat olib boradi. Maktab ingliz tili va
        matematikani chuqur o’rgatishga ixtisoslashgan.
      </p>
      <a href="#"><StyledButton bgColor='#ffa500' width='200px' height='35px'>Biz bilan bog'lanish</StyledButton></a>
    </Container>
  );
}

export default Home;
