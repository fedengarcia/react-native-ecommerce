import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoriesList, Details, Home, Products } from '../screens';

const Stack = createNativeStackNavigator();

function HomeNavitagor() {
  return (
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
        <Stack.Screen name="Categories" component={CategoriesList} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
  );
}

export default HomeNavitagor;