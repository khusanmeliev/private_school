import styled from 'styled-components';
import { mobile } from '../../assets/styles/sizes';

export const Wrapper = styled.div`
  width: 90%;
  height: 400px;
  background-color: white;
  margin-top: 60px;
  background-color: white;
  box-shadow: 0 1px 10px rgb(0 0 0 / 11%);
  display: block;
  margin: 0 auto;
  @media (max-width: 1170px) {
    height: auto;
    flex-direction: column;
  }
`;

export const ContactBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  ${mobile.lg} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`;

export const Left = styled.div`
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Right = styled.div`
  width: 50%;

  ${mobile.lg} {
    width: 90%;
  }
`;

export const Image = styled.img`
  width: 250px;
  margin-top: 40px;
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    width: 100%;
    font-size: 16px;
    text-indent: 2px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }
  textarea {
    height: 120px;
    border: none;
    border-bottom: 1px solid;
    font-size: 17px;
    margin-top: 10px;
    resize: none;
    outline: none;
  }
`;

export const DownWrapper = styled.div`
  width: 100%;
  background-color: #203860;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 10px;

  svg {
    font-size: 30px;
    color: white;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      margin-top: -15px;
    }
  }
`;
