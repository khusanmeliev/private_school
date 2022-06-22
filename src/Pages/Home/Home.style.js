import background from '../../assets/img/background.jpg';
import backgroundMobile from '../../assets/img/backgroundMobile.jpg';

import styled from 'styled-components';
import { mobile } from '../../assets/styles/sizes';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 80vh;
  margin-top: 80px;
  padding: 20px 80px 80px 80px;
  background-image: linear-gradient(rgba(5, 3, 24, 0.2), rgba(5, 3, 24, 0.2)), url(${background});
  background-size: cover;
  background-repeat: no-repeat;

  ${mobile.lg} {
    padding: 20px 20px 80px 20px;
    background-image: linear-gradient(rgba(5, 3, 24, 0.2), rgba(5, 3, 24, 0.2)), url(${backgroundMobile});
  }
`;

export const ImageLogo = styled.img`
  width: 200px;
`;

export const HeadingBox = styled.div`
  ${mobile.lg} {
    padding: 10px;
    background-color: rgba(5, 3, 24, 0.4);
  }
`;
