import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Title,
  ResultContainer,
  ResultText,
  AmountText,
  CloseBtn,
  Backdrop,
} from './Converter.styled';
import ConverterForm from './ConverterForm';
import {
  setHistory,
  setLoading,
  setResult,
  setVisibility,
} from 'store/selectors';
import { setVisibilityValue } from 'store/convertorSlice';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import ConvertingHistory from 'components/App/ConvertingHistory/ConvertingHistory';
import { currencyEditor } from 'services/currencyEditor';

const Converter = () => {
  const visibility = useSelector(setVisibility);
  const history = useSelector(setHistory);
  const loader = useSelector(setLoading);
  const { old_amount, old_currency, new_amount, new_currency } =
    useSelector(setResult);
  const dispatch = useDispatch();
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const handleModal = e => {
      if (e.code === 'Escape' || e.currentTarget === e.target) {
        dispatch(setVisibilityValue());
      }
    };
    window.addEventListener('keydown', handleModal);
    return () => {
      window.removeEventListener('keydown', handleModal);
    };
  }, [visibility]);
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    if (loader === true) {
      Loading.hourglass({
        backgroundColor: 'rgba(0,0,0,0.8)',
      });
    } else {
      Loading.remove();
    }
  }, [loader]);
  /* -------------------------------------------------------------------------- */

  const oldCurrency = currencyEditor(old_currency);
  const newCurrency = currencyEditor(new_currency);
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <Container>
      <Title>Currency Converter</Title>
      <ConverterForm />
      {visibility && (
        <Backdrop onClick={() => dispatch(setVisibilityValue())}>
          {' '}
          <ResultContainer>
            <CloseBtn
              type="button"
              onClick={() => dispatch(setVisibilityValue())}
            >
              <CloseIcon />
            </CloseBtn>
            <ResultText>
              {old_amount} {oldCurrency} equals:
            </ResultText>
            <AmountText>
              {new_amount} {newCurrency}
            </AmountText>
          </ResultContainer>
        </Backdrop>
      )}
      {history.length > 0 && <ConvertingHistory />}
    </Container>
  );
};

export default Converter;
