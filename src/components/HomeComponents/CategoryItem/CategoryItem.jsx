import React, { useEffect } from 'react';
import {Pressable, Text, View, useWindowDimensions} from 'react-native';
import { styles } from './CategoryItemStyles';
import Card from '../../Card/Card';
import { useDispatch } from 'react-redux';
import { setCategorySelected } from '../../../features/shop/shopSlice';

const CategoryItem = ({categoryName, navigation}) => {
    // const { width} = useWindowDimensions();
    const dispatch = useDispatch();

    return (
        <Pressable onPress={() => {
            dispatch(setCategorySelected(categoryName))
            navigation.navigate("Home")}}>
            <Card style={styles.cardContainer}>
                <View>
                    <Text style={styles.text}>{categoryName}</Text>
                </View>
            </Card>
        </Pressable>
    );
}

export default CategoryItem;
