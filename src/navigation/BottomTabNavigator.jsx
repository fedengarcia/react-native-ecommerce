import * as React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import CartNavigator from './CartNavigator';
import HomeNavitagor from './HomeNavigator';
import { StyleSheet } from "react-native";
import { COLORS } from '../global/COLORS';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
      <BottomTab.Navigator
        initialRouteName='HomeNav'
        screenOptions={{
          headerShown:false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar
      }}
      >
        <BottomTab.Screen name="HomeNav" component={HomeNavitagor} />
        <BottomTab.Screen name="CartNav" component={CartNavigator} />
      </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;


const styles = StyleSheet.create({
    tabBar:{
        height: 100,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: COLORS.primary,
    },
})