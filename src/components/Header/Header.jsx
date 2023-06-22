import { useSelector } from 'react-redux';
import {
  Container,
  Currency,
  RateWrap,
  Hryvnia,
  Img,
  Amount,
  RateContainer,
} from './Header.styled';
import { setRate } from 'store/selectors';
import arrow from '../../data/arrow.png';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchExchangeRates } from 'store/operation';

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExchangeRates());
  }, [dispatch]);
  const { EUR, JPY, CAD, GBP, CNY, USD } = useSelector(setRate);
  return (
    <RateContainer>
      <Container>
        <Hryvnia>1 Hryvnia equals</Hryvnia>
        <Img src={arrow} alt="arrow" width={250} />
      </Container>
      <RateWrap>
        <Currency>
          Euro <Amount>{EUR}</Amount>
        </Currency>
        <Currency>
          Dollar <Amount>{USD}</Amount>
        </Currency>
        <Currency>
          Pound Sterling <Amount>{GBP}</Amount>
        </Currency>
        <Currency>
          Yuán <Amount>{CNY}</Amount>
        </Currency>
        <Currency>
          Canadian Dollar <Amount>{CAD}</Amount>
        </Currency>
        <Currency>
          Yen <Amount>{JPY}</Amount>
        </Currency>
      </RateWrap>
    </RateContainer>
  );
};

export default Header;
