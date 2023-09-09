import { Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/Header/Header'

const Details = ({product}) => {
  return (
    <>
      <Header title={product}/>
        <Text>Details</Text>
    </>
  )
}

export default Details
