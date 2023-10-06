import React,{useEffect, useState}from 'react';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProfileImageQuery } from '../services/shopAPI';
import { setProfileImage } from '../features/auth/authSlice';

function MainNavigator() {
  const {user, localId} = useSelector(state => state.auth);
  const {data} = useGetProfileImageQuery(localId);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(data)
      dispatch(setProfileImage(data.image))
  }, [data]);

  return user ? <BottomTabNavigator/> : <AuthNavigator/>
}

export default MainNavigator;