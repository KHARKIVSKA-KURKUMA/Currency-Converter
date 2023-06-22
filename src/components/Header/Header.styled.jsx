import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const RateContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 60px 0;
  gap: 140px;
`;
export const RateWrap = styled.div`
  background-color: #eae1e1;
  min-width: 250px;
  max-width: 300px;
  border-radius: 10px;
  padding: 10px 20px;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  gap: 20px;
`;
export const Hryvnia = styled.p`
  color: #0a0a0a;
  font-size: 26px;
  padding-top: 50px;
  font-weight: 500;
  font-family: 'Lexend Peta', sans-serif;
`;

export const Currency = styled.p`
  color: #3f3f3f;
  margin: 0;
  font-size: 20px;
  font-weight: 500;
`;
export const Amount = styled.span`
  color: #000000;
  font-weight: 800;
  margin-left: 10px;
`;
export const Img = styled.img`
  position: absolute;
  top: -20px;
  left: 200px;
`;
