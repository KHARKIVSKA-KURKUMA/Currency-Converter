import Converter from 'components/Converter/Converter';
import Header from 'components/Header/Header';
import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Container>
      <ToastContainer autoClose={1500} theme="colored" />
      <Header />
      <Converter />
    </Container>
  );
};
export default App;
