import * as React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/native-stack';
import CartNavigator from './CartNavigator';
import HomeNavitagor from './HomeNavigator';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
      <BottomTab.Navigator
        initialRouteName='Shop'
      >
        <BottomTab.Screen name="Cart" component={CartNavigator} />
        <BottomTab.Screen name="Shop" component={HomeNavitagor} />
      </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;