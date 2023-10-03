import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, SingUp } from '../screens';


const AuthStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
      <AuthStack.Navigator 
        initialRouteName='Singup'
        screenOptions={()=> ({
            headerShown:false,
        })}
      >
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Singup" component={SingUp} />
      </AuthStack.Navigator>
  );
}

export default AuthNavigator;