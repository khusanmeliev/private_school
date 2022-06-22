import React, { useState } from 'react';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import { Logo } from '../../containers/Navbar/Navbar.style';
import { Wrapper, Form, ContactBox, Left, Right, SButton } from './Contact.style';

const Contact = () => {
  const [values, setValues] = useState({ name: '', phoneNumber: '', comment: '' });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

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
            <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="F.I.O" />
            <Text style={{ margin: '4px 0' }}>Telefon raqamingiz:</Text>
            <input
              type="number"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              placeholder="90-000-00-00"
            />
            <Text style={{ margin: '4px 0' }}>Komment:</Text>
            <textarea
              name="comment"
              value={values.comment}
              onChange={handleChange}
              placeholder="Sizga qanday yordam bera olamiz?"
            />
            <SButton type="submit" onClick={handleSubmit}>
              Yuborish
            </SButton>
          </Form>
        </Right>
      </ContactBox>
    </Wrapper>
  );
};

export default Contact;
