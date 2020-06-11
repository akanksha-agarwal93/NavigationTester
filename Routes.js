import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import Screen3 from './src/screens/Screen3';
import Screen4 from './src/screens/Screen4';
import Screen5 from './src/screens/Screen5';

const BottomTab = createBottomTabNavigator();
function BottomTabScreen() {
  return (
    <BottomTab.Navigator name="BottomStack" initialRouteName="Screen1">
      <BottomTab.Screen name="One" component={Screen1} />
      <BottomTab.Screen name="Two" component={Screen2} />
      <BottomTab.Screen name="Three" component={Screen3} />
      <BottomTab.Screen name="Four" component={Screen4} />
      <BottomTab.Screen name="Five" component={Screen5} />
    </BottomTab.Navigator>
  );
}

const DrawerNav = createDrawerNavigator();
function DrawerNavigationScreen() {
  return (
    <DrawerNav.Navigator name="DrawerNavigation">
      <DrawerNav.Screen name="One" component={Screen1} />
      <DrawerNav.Screen name="Two" component={Screen2} />
      <DrawerNav.Screen name="Three" component={Screen3} />
      <DrawerNav.Screen name="Four" component={Screen4} />
      <DrawerNav.Screen name="Five" component={Screen5} />
    </DrawerNav.Navigator>
  );
}

export {BottomTabScreen, DrawerNavigationScreen};
