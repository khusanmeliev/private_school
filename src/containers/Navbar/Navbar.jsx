import React, { useRef } from 'react';
import { List, Logo, MenuButton, Wrapper } from './Navbar.style';
import { AiOutlineMenu } from 'react-icons/ai';
import Flexbox from '../../components/Flexbox/Flexbox';

const Navbar = () => {
  const navbar = useRef(null);
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.current.style.top = '0';
    } else {
      navbar.current.style.top = '-100px';
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <Wrapper ref={navbar}>
      <Flexbox flexDirection="row" width="100%" height="100%" justifyContent="space-between">
        <Logo>Elite School</Logo>
        <ul>
          <Flexbox flexDirection="row" justifyContent="space-around" gap="30px">
            <a href="">
              <List>Bosh sahifa</List>
            </a>
            <a href="#">
              <List>Biz haqimizda</List>
            </a>
            <a href="#">
              <List>Bizning afzalliklarimiz</List>
            </a>
            <a href="directors">
              <List>Direktorlar</List>
            </a>
            <a href="#">
              <List>Darslar</List>
            </a>
            <a href="#">
              <List>Bog`lanish</List>
            </a>
          </Flexbox>
        </ul>
        <MenuButton>
          <AiOutlineMenu />
        </MenuButton>
      </Flexbox>
    </Wrapper>
  );
};

export default Navbar;
