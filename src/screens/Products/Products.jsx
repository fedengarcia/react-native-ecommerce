import { FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Header, SearchInput } from '../../components'
import products from '../../data/products'
import { styles } from './ProductsStyle'


const Products = ({categorySelected}) => {

  const [productsList, setProductsList] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    let productsFiltered = []
    if(categorySelected){
      const productsSelected = products.filter(prod => prod.category === categorySelected);
      productsFiltered = productsSelected.filter(prod => prod.title.includes(keyword));
    }else{
      productsFiltered = products.filter(prod => prod.title.includes(keyword));
    }
    setProductsList(productsFiltered);

  }, [categorySelected, keyword]);


  return (
    <View style={styles.container}>
      <Header title={"Products"}/>
      <SearchInput
        onSearch={setKeyword}
      />
      <View style={styles.productsListContainer}>
        <FlatList
          style={styles.flatList}
          data={productsList}
          renderItem={({item}) => <Card><Text style={{fontSize: 59}}>{item.title}</Text></Card>}
          keyExtractor={item => item.id}
        />
        
      </View>
    </View>
  )
}

export default Products
