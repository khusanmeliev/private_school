import React from 'react';
import Flexbox from '../../components/Flexbox/Flexbox';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import { directors } from '../../mock/directors';
import { Card, Icon, Image } from './Directors.style';

const Directors = () => {
  return (
    <Flexbox id="directors">
      <Heading size="lg">Maktabimiz direktorlari haqida ma`lumot!</Heading>
      {directors.map((info) => (
        <Card key={info.id}>
          <Image src={info.img} alt="" />
          <Flexbox width="60%" height="375px" justifyContent="flex-start">
            <div>
              <Flexbox
                flexDirection="row"
                gap="10px"
                style={{
                  borderRadius: '15px',
                }}
              >
                <Flexbox style={{ fontSize: '30px' }}>{info.settings}</Flexbox>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: '30px',
                  }}
                >
                  {info.name}
                </Text>
              </Flexbox>
            </div>
            <div>
              <Flexbox flexDirection="row" gap="10px" justifyContent="flex-start">
                {info.email_icon}
                <Text>{info.email}</Text>
              </Flexbox>
              <Flexbox flexDirection="row" gap="10px" justifyContent="flex-start">
                {info.phone_icon}
                <Text>{info.phone}</Text>
              </Flexbox>
              <Flexbox flexDirection="row" gap="10px" justifyContent="flex-start">
                {info.address_icon}
                <Text>{info.address}</Text>
              </Flexbox>
            </div>
            <div>
              <Flexbox flexDirection="row" gap="10px" height="100px" justifyContent="flex-start">
                <Icon>
                  <a style={{ color: 'blue' }} href="" target="blank">
                    {info.facebook_icon}
                  </a>
                </Icon>
                <Icon>
                  <a style={{ color: 'blue' }} href="" target="blank">
                    {info.telegram_icon}
                  </a>
                </Icon>
                <Icon>
                  <a style={{ color: 'blue' }} href="" target="blank">
                    {info.instagram_icon}
                  </a>
                </Icon>
              </Flexbox>
            </div>
          </Flexbox>
        </Card>
      ))}
    </Flexbox>
  );
};

export default Directors;
