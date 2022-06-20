import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import Flexbox from '../../components/Flexbox/Flexbox';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import { Logo } from '../../containers/Navbar/Navbar.style';
import { Wrapper, Form, DownWrapper, ContactBox, Left, Right } from './Contact.style';

const Contact = () => {
  return (
    <Flexbox id="contact">
      <Wrapper>
        <ContactBox>
          <Left>
            <Logo style={{ marginTop: 0 }}>Elite School</Logo>
            <Heading size="sm" textAlign="center" color="#00264b">
              Savollaringiz bormi? Bizga yozing, tezda javob beramiz!
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
      <DownWrapper>
        <Flexbox>
          <Logo>Elite School</Logo>
          <Heading style={{ color: 'white' }}>Aloqa</Heading>
          <Heading style={{ margin: '3px', color: 'white' }}>Telefon raqam: 90-000-00-00</Heading>
          <Text style={{ margin: '3px', color: 'white' }}>Email: admin@elitemaktab.uz</Text>
        </Flexbox>
        <Flexbox>
          <Heading color="white">Ijtimoiy tarmoqlarimiz</Heading>
          <Flexbox flexDirection="row" gap="20px">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </Flexbox>
        </Flexbox>
        <Flexbox>
          <Text size="lg" color="white" style={{ fontSize: '20px' }}>
            Powered by `company`
          </Text>
        </Flexbox>
      </DownWrapper>
    </Flexbox>
  );
};

export default Contact;
