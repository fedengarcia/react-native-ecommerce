import { Image, Text, View } from 'react-native'
import React from 'react'
import { styles } from './DetailsStyle';
import { Header } from '../../components'

const Details = ({route, navigation}) => {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Header title={'Detalle'}/>
        <Image 
          style={styles.image}
          source={{uri: product.images[0]}}
        />
        <Text   style={[styles.title, styles.textStyle]}>{product.title}</Text>
        <Text  style={[styles.description, styles.textStyle]}>{product.description}</Text>
        <Text  style={[styles.price, styles.textStyle]}>${product.price}</Text>
    </View>
  )
}

export default Details
