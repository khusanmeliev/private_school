import React from "react";
import Flexbox from "../../components/Flexbox/Flexbox";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { directors } from "../../mock/directors";
import { Icon, Image } from "./styles";

function Directors() {
  return (
    <Flexbox style={{ backgroundColor: "grey" }}>
      <Heading size="lg">Maktabimiz direktorlari haqida ma'lumot!</Heading>
      {directors.map((info) => (
        <Flexbox flexDirection="row" style={{ backgroundColor: "yellow" }}>
          <Image src={info.img} alt="" />
          <Flexbox
            alignItems="space-between"
            width="40%"
            style={{ backgroundColor: "green" }}
          >
            <div>
              <Flexbox flexDirection="row" gap="10px">
                <Flexbox>{info.settings}</Flexbox>
                <Text>{info.name}</Text>
              </Flexbox>
            </div>
            <div>
              <Flexbox flexDirection="row" gap="10px">
                {info.email_icon}
                <Text>{info.email}</Text>
              </Flexbox>
              <Flexbox flexDirection="row" gap="10px">
                {info.phone_icon}
                <Text>{info.phone}</Text>
              </Flexbox>
              <Flexbox flexDirection="row" gap="10px">
                {info.address_icon}
                <Text>{info.address}</Text>
              </Flexbox>
            </div>
            <div>
              <Flexbox flexDirection="row" gap="10px">
                <Icon>{info.facebook_icon}</Icon>
                <Icon>{info.telegram_icon}</Icon>
                <Icon>{info.instagram_icon}</Icon>
              </Flexbox>
            </div>
          </Flexbox>
        </Flexbox>
      ))}
    </Flexbox>
  );
}

export default Directors;
