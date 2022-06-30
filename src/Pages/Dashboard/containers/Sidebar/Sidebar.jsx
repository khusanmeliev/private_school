import React, { useState } from 'react';
import { SidebarToggler, StyledLink, Wrapper } from './Sidebar.style';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Heading from '../../../../components/Heading/Heading';
import { BiMessageAltDetail } from 'react-icons/bi';
import Text from '../../../../components/Text/Text';
import { FaUsers } from 'react-icons/fa';
import IconToggler from '../../../../assets/img/icon_sidebar.svg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <Wrapper>
      <SidebarToggler isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <img src={IconToggler} alt="icon" />
      </SidebarToggler>
      {isOpen ? <Heading color="white">Admin</Heading> : <Heading color="white">A</Heading>}
      <StyledLink to="/admin/candidates">
        <FaUsers />
        {isOpen && <Text size="sm">Nomzodlar</Text>}
      </StyledLink>
      <StyledLink to="/admin/contacts">
        <BiMessageAltDetail />
        {isOpen && <Text size="sm">Xabarlar</Text>}
      </StyledLink>
    </Wrapper>
  );
};

export default Sidebar;
