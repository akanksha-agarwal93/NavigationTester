import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';

import {BottomTabScreen, DrawerNavigationScreen} from './Routes';

const App = () => {
  return (
    <NavigationContainer>
      {DeviceInfo.isTablet() ? <DrawerNavigationScreen /> : <BottomTabScreen />}
    </NavigationContainer>
  );
};
export default App;
