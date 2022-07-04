import React from 'react';
import Flexbox from '../../components/Flexbox/Flexbox';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import { directors } from '../../mock/directors';
import { Card, CardDetails, CardImage, Icon, Wrapper } from './Directors.style';
import { MdEmail } from 'react-icons/md';
import { FaPhone, FaMapMarkerAlt, FaFacebookF, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const Directors = () => {
  return (
    <Wrapper id="directors">
      <Heading size="lg">Maktabimiz xodimlari haqida ma`lumot!</Heading>
      {directors.map((director) => (
        <Card key={director.id}>
          <CardImage src={director.img} alt="" />
          <CardDetails>
            <Heading size="sm" color="grey">
              {director.role}
            </Heading>
            <Heading style={{ margin: 0 }}>{director.name}</Heading>
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
                {/* <Icon href="" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </Icon> */}
                <Icon href={`https://t.me/${director.contacts.telegram}`} target="_blank" rel="noreferrer">
                  <FaTelegramPlane />
                </Icon>
                {/* <Icon href="" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </Icon> */}
              </Flexbox>
            </div>
          </CardDetails>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Directors;
