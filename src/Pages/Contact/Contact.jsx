import React from 'react';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import { Logo } from '../../containers/Navbar/Navbar.style';
import { Wrapper, Form, ContactBox, Left, Right } from './Contact.style';

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Heading>Kontakt</Heading>
      <ContactBox>
        <Left>
          <Logo style={{ marginTop: 0 }}>Elita Akademik Maktabi</Logo>
          <Heading size="sm" align="center" color="#00264b" style={{ fontSize: '18px' }}>
            Savollaringiz bormi? Bizga yozing, biz tezda javob beramiz!
          </Heading>
        </Left>
        <Right>
          <Form>
            <Text style={{ margin: '4px 0' }}>Ismingiz:</Text>
            <input type="text" />
            <Text style={{ margin: '4px 0' }}>Telefon raqamingiz:</Text>
            <input type="number" placeholder="90-000-00-00" id="mobile" />
            <Text style={{ margin: '4px 0' }}>Komment:</Text>
            <textarea placeholder="Sizga qanday yordam bera olamiz?" />
            <Button
              bgColor="#fa9722"
              width="100%"
              height="45px"
              style={{
                boxShadow: '-1px 0px 13px -6px rgba(0,0,0,0.75)',
                fontSize: '20px',
                fontWeight: 'bold',
                marginTop: '25px',
              }}
            >
              Yuborish
            </Button>
          </Form>
        </Right>
      </ContactBox>
    </Wrapper>
  );
};

export default Contact;
