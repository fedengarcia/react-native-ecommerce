import * as React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/native-stack';
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
        <BottomTab.Screen name="CartNav" component={CartNavigator} />
        <BottomTab.Screen name="HomeNav" component={HomeNavitagor} />
      </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;



export const styles = StyleSheet.create({
    tabBar:{
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: COLORS.primary,
    },
})