import { Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'

const Products = ({product}) => {
  return (
    <>
      <Header title={product}/>
        <Text>Details</Text>
    </>
  )
}

export default Products
