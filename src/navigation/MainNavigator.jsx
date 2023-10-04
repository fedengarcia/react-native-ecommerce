import React,{useState}from 'react';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { useSelector } from 'react-redux';

function MainNavigator() {
  const user = useSelector(state => state.auth.user);

  return user ? <BottomTabNavigator/> : <AuthNavigator/>
}

export default MainNavigator;