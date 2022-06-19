import React from 'react';
import Flexbox from '../../components/Flexbox/Flexbox';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import { directors } from '../../mock/directors';
import { Icon, Image } from './Directors.style';

const Directors = () => {
  return (
    <Flexbox>
      <Heading size="lg">Maktabimiz direktorlari haqida ma`lumot!</Heading>
      {directors.map((info) => (
        <Flexbox
          key={info.id}
          flexDirection="row"
          width="70%"
          height="375px"
          style={{
            margin: '20px',
            boxShadow: '0 1px 10px rgb(0 0 0 / 11%)',
            borderRadius: '8px',
          }}
        >
          <Image src={info.img} alt="" />
          <Flexbox width="60%" height="520px">
            <div>
              <Flexbox
                flexDirection="row"
                gap="10px"
                width="100%"
                style={{ borderRadius: '15px' }}
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
              <Flexbox
                flexDirection="row"
                gap="10px"
                justifyContent="flex-start"
              >
                {info.email_icon}
                <Text>{info.email}</Text>
              </Flexbox>
              <Flexbox
                flexDirection="row"
                gap="10px"
                justifyContent="flex-start"
              >
                {info.phone_icon}
                <Text>{info.phone}</Text>
              </Flexbox>
              <Flexbox
                flexDirection="row"
                gap="10px"
                justifyContent="flex-start"
              >
                {info.address_icon}
                <Text>{info.address}</Text>
              </Flexbox>
            </div>
            <div>
              <Flexbox
                flexDirection="row"
                gap="10px"
                width="370px"
                height="100px"
                justifyContent="flex-start"
              >
                <Icon>
                  <a
                    style={{ color: 'blue' }}
                    href="https://www.facebook.com/eliteschool/"
                    target="blank"
                  >
                    {info.facebook_icon}
                  </a>
                </Icon>
                <Icon>
                  <a
                    style={{ color: 'blue' }}
                    href="https://t.me/khusanmeliev_it_blog"
                    target="blank"
                  >
                    {info.telegram_icon}
                  </a>
                </Icon>
                <Icon>
                  <a
                    style={{ color: 'blue' }}
                    href="https://www.instagram.com"
                    target="blank"
                  >
                    {info.instagram_icon}
                  </a>
                </Icon>
              </Flexbox>
            </div>
          </Flexbox>
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default Directors;
