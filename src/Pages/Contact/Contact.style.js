import styled from 'styled-components';
import { mobile } from '../../assets/styles/sizes';
import Button from '../../components/Button/Button';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1170px) {
    height: auto;
  }
`;

export const ContactBox = styled.div`
  width: 90%;
  height: fit-content;
  box-shadow: 0 1px 10px rgb(0 0 0 / 11%);
  margin-top: 20px;

  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 20px 0;

  ${mobile.lg} {
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mobile.lg} {
    width: 80%;
  }
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
  gap: 8px;
  box-sizing: border-box;

  input {
    font-size: 14px;
    text-indent: 6px;
    border: none;
    border-radius: 4px;
    outline: none;
    height: 40px;
    font-family: 'Roboto Slab', serif;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &:focus {
      border: 1px solid #ffa500;
    }
  }

  textarea {
    height: 120px;
    border: none;
    border-radius: 4px;
    text-indent: 6px;
    font-size: 14px;
    resize: none;
    outline: none;
    font-family: 'Roboto Slab', serif;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    &:focus {
      border: 1px solid #ffa500;
    }
  }

  textarea::placeholder {
    color: grey;
  }
`;

export const SButton = styled(Button)`
  width: 100%;
  height: 45px;
  background-color: #fa9900;
  font-size: 20px;
  font-weight: bold;
  margin-top: 25px;
  box-shadow: -1px 0px 13px -6px rgba(0, 0, 0, 0.75);
  &:hover {
    background-color: #fa9722;
    transition: 0.2s;
  }
`;
