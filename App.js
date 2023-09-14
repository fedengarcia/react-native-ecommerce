import { StyleSheet, Text, View } from 'react-native';
import { Home, Details } from './src/screens';
import { Products } from './src/screens';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import fonts from './src/global/fonts';
import products from './src/data/products';

export default function App() {
  const [categorySelected,setCategorySelected] = useState('')
  const [fontsLoaded] = useFonts(fonts);
  
  if(!fontsLoaded) return null;

  return (
    <Details product={products[0]}/>
    // <View style={styles.container}>
    //   {categorySelected ?
    //       <Products categorySelected={categorySelected}/> 
    //     : 
    //       <Home setCategorySelected={setCategorySelected}/>
    //   }
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
