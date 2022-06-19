import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import Flexbox from '../../components/Flexbox/Flexbox';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import { Wrapper, Form, Image, DownWrapper, ContactBox, Left, Right } from './Contact.style';

const Contact = () => {
  return (
    <Flexbox>
      <Wrapper>
        <ContactBox>
          <Left>
            <Image src="https://profimaktab.uz/wp-content/uploads/2021/08/cropped-profi-school.png" alt="" />
            <Heading size="sm" textAlign="center" color="#00264b">
              Savollaringiz bormi? Bizga yozing, biz sizga 15 daqiqa ichida javob beramiz!
            </Heading>
          </Left>
          <Right>
            <Form>
              <p>Ismingiz</p>
              <input type="text" />
              <p>Telefon raqamingiz</p>
              <input type="number" placeholder="+998 (__) ___ __ __" id="mobile" />
              <textarea placeholder="Salom! Sizga qanday yordam bera olamiz?" />
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
          <Image
            style={{ width: '100px' }}
            src="https://profimaktab.uz/wp-content/uploads/2021/08/cropped-profi-school.png"
            alt="school_pic"
          />
          <Heading style={{ margin: 'px', color: 'white' }}>Aloqa</Heading>
          <Heading style={{ margin: '3px', color: 'white' }}>Telefon raqam 78-777-11-11</Heading>
          <Text style={{ margin: '3px', color: 'white' }}>Email admin@profimaktab.uz</Text>
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
            designed and development idealproject.uz
          </Text>
        </Flexbox>
      </DownWrapper>
    </Flexbox>
  );
};

export default Contact;
