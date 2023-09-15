import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details, Home, Products } from '../screens';
import { Header } from '../components';


const Stack = createNativeStackNavigator();

function StackNavitagor() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={({route, navigation})=> ({
            headerShown:false,
            // header: ()=> (
            //     <View>
            //         <Header title={route.name} navigation={navigation}/>
            //     </View>
            // ),
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavitagor;