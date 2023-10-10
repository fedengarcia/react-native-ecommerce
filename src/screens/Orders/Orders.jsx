import React from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './OrdersStyle';
import { CartItem, Header } from '../../components';
import { useGetOrdersQuery } from '../../services/shopAPI'
import { useSelector } from 'react-redux';


const Orders = ({navigation}) => {
    const user = useSelector(state => state.auth.user);
    const {data, isLoading} = useGetOrdersQuery(user);

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
