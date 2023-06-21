import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3;
  text-align: center;
  color: #1a1a1a;
  max-width: 654px;
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
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
`;
export const ResultContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultText = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AmountText = styled.p`
  font-size: 34px;
  font-weight: bold;
  margin: 0;
`;
