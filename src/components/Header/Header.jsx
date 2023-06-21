import { Container, Heading, Paragraph } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <Heading>Currency Converter</Heading>
      <Paragraph>
        Need to make an international business payment? Take a look at our live
        foreign exchange rates.
      </Paragraph>
    </Container>
  );
};

export default Header;
