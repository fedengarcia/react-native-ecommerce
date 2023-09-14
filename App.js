import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens';
import { Products } from './src/screens';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import fonts from './src/global/fonts';

export default function App() {
  const [categorySelected,setCategorySelected] = useState('')
  const [fontsLoaded] = useFonts(fonts);
  
  if(!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      {categorySelected ?
          <Products categorySelected={categorySelected}/> 
        : 
          <Home setCategorySelected={setCategorySelected}/>
      }
    </View>
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
