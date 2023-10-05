import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile/Profile';


const ProfileStack = createNativeStackNavigator();

function ProfileNavigator() {
  return (
      <ProfileStack.Navigator 
        initialRouteName='Signup'
        screenOptions={()=> ({
            headerShown:false,
        })}
      >
        <ProfileStack.Screen name="Profile" component={Profile} />
      </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;