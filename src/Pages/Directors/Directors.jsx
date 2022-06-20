import React from 'react';
import Flexbox from '../../components/Flexbox/Flexbox';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import { directors } from '../../mock/directors';
import { Card, Icon, Image, Wrapper } from './Directors.style';
import { MdEmail } from 'react-icons/md';
import { FaPhone, FaMapMarkerAlt, FaFacebookF, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const Directors = () => {
  return (
    <Wrapper id="directors">
      <Heading size="lg">Maktabimiz direktorlari haqida ma`lumot!</Heading>
      {directors.map((director) => (
        <Card key={director.id}>
          <Image src={director.img} alt="" />
          <Flexbox width="60%" height="fit-content" justifyContent="flex-start">
            <div>
              <Flexbox
                flexDirection="row"
                gap="10px"
                width="200px"
                style={{
                  borderRadius: '15px',
                }}
              >
                <Heading
                  style={{
                    fontWeight: '700',
                  }}
                >
                  {director.name}
                </Heading>
              </Flexbox>
            </div>
            <div>
              <Flexbox flexDirection="row" gap="10px" justifyContent="flex-start">
                <MdEmail />
                <Text>{director.contacts.email}</Text>
              </Flexbox>
              <Flexbox flexDirection="row" gap="10px" justifyContent="flex-start">
                <FaPhone />
                <Text>{director.contacts.phone}</Text>
              </Flexbox>
              <Flexbox flexDirection="row" gap="10px" justifyContent="flex-start">
                <FaMapMarkerAlt />
                <Text>{director.address}</Text>
              </Flexbox>
            </div>
            <div>
              <Flexbox flexDirection="row" gap="10px" height="100px" justifyContent="flex-start">
                <Icon href="" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </Icon>
                <Icon href={`https://t.me/${director.contacts.telegram}`} target="_blank" rel="noreferrer">
                  <FaTelegramPlane />
                </Icon>
                <Icon href="" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </Icon>
              </Flexbox>
            </div>
          </Flexbox>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Directors;
