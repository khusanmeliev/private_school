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
  justify-content: center;
  flex-direction: row;

  ${mobile.lg} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
  }
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  width: 50%;
  padding: 0 20px;

  ${mobile.lg} {
    width: 90%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  box-sizing: border-box;

  input {
    font-size: 14px;
    text-indent: 6px;
    border: none;
    border: 1px solid grey;
    border-radius: 4px;
    outline: none;
    height: 40px;
    font-family: 'Roboto Slab', serif;
  }

  textarea {
    height: 120px;
    border: none;
    border-radius: 4px;
    border: 1px solid grey;
    text-indent: 6px;
    font-size: 14px;
    resize: none;
    outline: none;
    font-family: 'Roboto Slab', serif;
  }

  textarea::placeholder {
    color: grey;
  }
`;
