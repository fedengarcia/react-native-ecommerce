import React, { useEffect } from 'react';
import {Image, Pressable, Text, TouchableOpacity, View, useWindowDimensions} from 'react-native';
import { styles } from './ProductItemStyle';
import Card from '../../Card/Card';

const ProductItem = ({product, navigation}) => {

    return (
        <Card style={styles.container}>
            <Image 
                style={styles.image}
                source={{uri: product.images[0]}}
            />
            <View>
                <Text style={styles.name}>{product?.title}</Text>
            </View>
            <View style={styles.details}>
                <View>
                    <Text style={styles.detailsText}>${product?.price}</Text>
                </View>
            </View>
        </Card>
    );
}

export default ProductItem;
