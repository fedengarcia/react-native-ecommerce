import React, { useEffect } from 'react';
import {Pressable, Text, View, useWindowDimensions} from 'react-native';
import { styles } from './CartItemStyles';
import Feather from '@expo/vector-icons/Feather';

const CartItem = ({itemCart, navigation}) => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{itemCart.name}</Text>
            </View>
            <View style={styles.details}>
                <View>
                    <Text>Cantidad</Text>
                    <Text>{itemCart.precio}</Text>
                </View>
                <Pressable>
                    <Feather name="trash" size={50} color={focused ?  COLORS.secondary : '#FFF'}/>
                </Pressable>
            </View>
        </View>
    );
}

export default CartItem;
