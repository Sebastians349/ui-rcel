import React from 'react';
import { Box } from '@chakra-ui/layout';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import MainBoxFull from '../components/MainBoxFull';
// import Main from '../containers/Main';

const MenuPpal = () => {
  return (
    <Box>
      <Header />
      {/* <Main/> */}
      <MainBoxFull />
      <Footer />
    </Box>
  );
};

export default MenuPpal;
