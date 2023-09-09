import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens';
import { Products } from './src/screens';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
      <Products categorySelected={"smartphones"}/>
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
