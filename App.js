//import liraries
import React, { Fragment, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './src/Navigations/Route';
import FlashMessage from "react-native-flash-message";
import { Provider } from 'react-redux';
import store from './src/redux/store';
import 'react-native-gesture-handler';


const App = () => {

  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage
        position="top"
      />
    </Provider>
   
  );
};

export default App;