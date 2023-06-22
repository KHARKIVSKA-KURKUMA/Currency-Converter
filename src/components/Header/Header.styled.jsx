import { devices } from 'services/mediaScreen';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const RateContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 60px 0;
  flex-direction: column;
  align-items: center;
  @media ${devices.mobileXL} {
    gap: 20px;
    flex-direction: row;
  }
  @media ${devices.tabletS} {
    gap: 120px;
    flex-direction: row;
    align-items: flex-start;
  }
  @media ${devices.tablet} {
    gap: 140px;
  }
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
  font-size: 20px;

  font-weight: 500;
  font-family: 'Lexend Peta', sans-serif;
  @media ${devices.mobileL} {
    font-size: 26px;
  }
  @media ${devices.tabletS} {
    padding-top: 50px;
  }
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
  display: none;
  @media ${devices.mobileXL} {
    display: block;
    position: absolute;
    top: -90px;
    left: 100px;
  }
  @media ${devices.tabletS} {
    top: -20px;
    left: 200px;
  }
`;
