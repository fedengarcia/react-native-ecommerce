import { Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'

const CategoriesList = ({category}) => {
  return (
    <>
      <Header title={category}/>
      <View styles={styles.container}>
        <Text>Categories list</Text>
      </View>
    </>
  )
}

export default CategoriesList
