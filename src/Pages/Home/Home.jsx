import React from "react";
import { Container } from "./Home.style";

function Home() {
  return (
    <Container>
      <h1><span style={{color: '#f8a408'}}>Profi School</span> Imkoniyatlar chegaralanmagan makon</h1>
      <p>
        Profi School – Xususiy maktabi ikki yildan ziyod vaqt mobaynida faoliyat
        olib bormoqda. Maktabda o’z sohasining eng ko’zga ko’ringan, yuqori
        malakali mutaxassislari faoliyat olib boradi. Maktab ingliz tili va
        matematikani chuqur o’rgatishga ixtisoslashgan.
      </p>
      <a href="#"><button>Biz bilan bog'lanish</button></a>
    </Container>
  );
}

export default Home;
