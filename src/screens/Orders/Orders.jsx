import React from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './OrdersStyle';
import { CartItem, Header } from '../../components';


const Orders = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title={'Orders'} navigation={navigation}/>
            <FlatList
                style={styles.flatList}
                data={data}
                keyExtractor={itemCart => itemCart.id}
                renderItem={({itemCart}) => <CartItem navigation={navigation} itemCart={itemCart}/>}
            />
           
        </View>
    );
}


export default Orders;
