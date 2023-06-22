import { devices } from 'services/mediaScreen';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
  font-family: 'Lexend Peta', sans-serif;
  @media ${devices.mobileL} {
    font-size: 44px;
  }
`;

export const FormContainer = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 30px;
`;

export const Button = styled.button`
  margin-top: 30px;
  padding: 15px 30px;
  background-color: #32c682;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
`;
export const Backdrop = styled.div`
  position: absolute;
`;
export const ResultContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 70px 20px;
  max-width: 600px;
  background-color: #bdbdbd;
  border-radius: 20px;
`;

export const ResultText = styled.p`
  font-size: 30px;
  margin-bottom: 20px;
  font-family: 'Lexend Peta', sans-serif;
`;

export const AmountText = styled.p`
  font-size: 44px;
  font-weight: 800;
  margin: 0;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid #333;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  top: 10px;
`;
