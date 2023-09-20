import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details, Home, Products } from '../screens';
import { Cart } from '../components';


const Stack = createNativeStackNavigator();

function CartNavigator() {
  return (
      <Stack.Navigator 
        initialRouteName='Cart'
        screenOptions={()=> ({
            headerShown:false,
        })}
      >
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
  );
}

export default CartNavigator;