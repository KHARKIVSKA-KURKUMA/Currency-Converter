import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Button, FormContainer, FormGroup } from './Converter.styled';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { fetchAnswer } from 'store/operation';

const ConverterForm = () => {
  const [amount, setAmount] = useState('');
  const [want, setWant] = useState('');
  const [have, setHave] = useState('');
  const dispatch = useDispatch();
  /* -------------------------------------------------------------------------- */
  const cleanForm = () => {
    setWant('');
    setHave('');
    setAmount('');
  };
  /* ------------------------------ HANDLE CHANGE ----------------------------- */
  const handleChange = ({ target }) => {
    if (target.name === 'From') {
      setHave(target.value);
    } else if (target.name === 'To') {
      setWant(target.value);
    } else {
      setAmount(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (amount.trim() === '' || amount.trim() === '0') {
      toast.error('Please enter an amount.');
      return;
    }
    if (want.trim() === '') {
      toast.error('Please select a conversion destination.');
      return;
    }
    if (have.trim() === '') {
      toast.error('Please select a conversion source.');
      return;
    }
    if (have.trim() === want.trim()) {
      toast.error('Please select an another one currency ');
      return;
    } else {
      const searchData = {
        amount,
        want,
        have,
      };
      dispatch(fetchAnswer(searchData));
      cleanForm();
    }
  };
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <FormControl
          variant="standard"
          sx={{
            width: 150,
          }}
        >
          <InputLabel id="demo-simple-select-standard-label">I have</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="From"
            value={have}
            onChange={handleChange}
          >
            <MenuItem
              sx={{
                maxWidth: 250,
              }}
              value={'CAD'}
            >
              <span>$ -</span>
              CAD (Canadian Dollar)
            </MenuItem>
            <MenuItem value={'GBP'}>
              <span>£ -</span> GBP (Pound Sterling)
            </MenuItem>
            <MenuItem value={'CNY'}>
              <span>¥ -</span> CNY (Yuán)
            </MenuItem>
            <MenuItem value={'USD'}>
              <span>$ -</span> USD (Dollar)
            </MenuItem>
            <MenuItem value={'EUR'}>
              <span>€ -</span>EUR (Euro)
            </MenuItem>
            <MenuItem value={'JPY'}>
              <span>¥ -</span>JPY (Yen)
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            width: 150,
          }}
          variant="standard"
        >
          <InputLabel id="demo-simple-select-standard-label">I want</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={want}
            name="To"
            onChange={handleChange}
          >
            <MenuItem
              value={'EUR'}
              sx={{
                width: 250,
              }}
            >
              <span>€ -</span>EUR (Euro)
            </MenuItem>
            <MenuItem value={'JPY'}>
              <span>¥ -</span>JPY (Yen)
            </MenuItem>
            <MenuItem value={'CAD'}>
              <span>$ -</span>
              CAD (Canadian Dollar)
            </MenuItem>
            <MenuItem value={'GBP'}>
              <span>£ -</span> GBP (Pound Sterling)
            </MenuItem>
            <MenuItem value={'CNY'}>
              <span>¥ -</span> CNY (Yuán)
            </MenuItem>
            <MenuItem value={'USD'}>
              <span>$ -</span> USD (Dollar)
            </MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
      <TextField
        id="standard-basic"
        label="Amount"
        variant="standard"
        type="number"
        value={amount}
        onChange={handleChange}
      />
      <Button type="submit">Get started</Button>
    </FormContainer>
  );
};

export default ConverterForm;
