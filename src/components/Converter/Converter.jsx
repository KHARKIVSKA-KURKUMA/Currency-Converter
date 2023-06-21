import { useSelector } from 'react-redux';
import {
  Container,
  Title,
  ResultContainer,
  ResultText,
  AmountText,
} from './Converter.styled';
import ConverterForm from './ConverterForm';
import { setResult } from 'store/selectors';
import { currencyItems } from 'data/currency';

const Converter = () => {
  /* -------------------------------------------------------------------------- */
  const currencyEditor = code => {
    return currencyItems.reduce((acc, element) => {
      if (code.includes(element.code)) {
        acc.push(element.currency);
      }
      return acc;
    }, []);
  };

  /* -------------------------------------------------------------------------- */
  const { old_amount, old_currency, new_amount, new_currency } =
    useSelector(setResult);
  const oldCurrency = currencyEditor(old_currency);
  const newCurrency = currencyEditor(new_currency);
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <Container>
      <Title>Make fast and affordable international business payments</Title>
      <ConverterForm />
      {new_amount && (
        <ResultContainer>
          <ResultText>
            {old_amount} {oldCurrency} equals:
          </ResultText>
          <AmountText>
            {new_amount} {newCurrency}
          </AmountText>
        </ResultContainer>
      )}
    </Container>
  );
};

export default Converter;
