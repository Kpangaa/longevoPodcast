/* eslint-disable prettier/prettier */
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './src/stateManagement';

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <HomeScreen />
    </Provider>
  );
};

export default App;
