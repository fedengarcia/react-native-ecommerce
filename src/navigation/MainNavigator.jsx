import React,{useState}from 'react';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';

function MainNavigator() {
  const [user, setUser] = useState(null);

  return user ? <BottomTabNavigator/> : <AuthNavigator/>
}

export default MainNavigator;