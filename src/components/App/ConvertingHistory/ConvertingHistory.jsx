import { useSelector } from 'react-redux';
import { setHistory } from 'store/selectors';
import {
  ExchangeInfo,
  ListItem,
  StyledList,
  Title,
} from './ConvertingHistory.styled';
import { nanoid } from '@reduxjs/toolkit';
import { currencyEditor } from 'services/currencyEditor';

const ConvertingHistory = () => {
  const history = useSelector(setHistory);
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <>
      <Title>History</Title>
      <StyledList>
        {history.map(
          ({ old_amount, old_currency, new_amount, new_currency }) => (
            <ListItem key={nanoid(2)}>
              <ExchangeInfo>
                {old_amount} {old_currency} ({currencyEditor(old_currency)}) ={' '}
                {new_amount} {new_currency} ({currencyEditor(new_currency)})
              </ExchangeInfo>
            </ListItem>
          )
        )}
      </StyledList>
    </>
  );
};

export default ConvertingHistory;
