import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Flexbox from '../../components/Flexbox/Flexbox';
import Text from '../../components/Text/Text';
import { Wrapper } from './Footer.style';

const Footer = () => {
  return (
    <Wrapper>
      <Flexbox alignItems="start">
        <Text color="white" style={{ margin: '4px 0' }}>
          +998 (95)-411-45-45
        </Text>
        <Text style={{ color: 'white', margin: '4px 0' }}>admin@elitemaktab.uz</Text>
      </Flexbox>
      <Flexbox flexDirection="column">
        <Text size="sm" color="white" style={{ margin: '4px 0' }}>
          Ijtimoiy tarmoqlarimiz
        </Text>
        <Flexbox flexDirection="row" gap="20px" justifyContent="center" width="100%">
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
        </Flexbox>
      </Flexbox>
    </Wrapper>
  );
};

export default Footer;
