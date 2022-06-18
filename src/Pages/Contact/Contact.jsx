import React from "react";
import Flexbox from "../../components/Flexbox/Flexbox";
import Heading from "../../components/Heading/Heading";
import { Wrapper, Form, Image } from "./Contact.style";

function Contact() {
  return (
    <Wrapper>
      <Flexbox flexDirection="row" height="100%">
        <Flexbox width="45%">
          <Image
            src="https://profimaktab.uz/wp-content/uploads/2021/08/cropped-profi-school.png"
            alt=""
          />
          <Heading size="lg" textAlign="center">
            Savollaringiz bormi? Bizga yozing, biz sizga 15 daqiqa ichida javob
            beramiz!s
          </Heading>
        </Flexbox>
        <Flexbox width="55%">
          <Form></Form>
        </Flexbox>
      </Flexbox>
    </Wrapper>
  );
}

export default Contact;
