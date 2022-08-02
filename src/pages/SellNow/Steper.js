import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import About from './Productdetails/Productdetails';
import PersonalDetails from './Personaldetail/PersonalDetails';
import SteperForm from '../SellNow/Form';
import './Form.css';
import Nav from '../../components/Nav';

const theme = extendTheme({
  components: {
    Steps,
  },
});

const Steper = () => {
  return (
    <>
    {/* <Nav/> */}
    <ChakraProvider theme={theme}>
        <div className = 'Stepper'>
      <SteperForm className="stepperform"/>
      </div>
    </ChakraProvider>
    </>
  );
};

export default Steper;