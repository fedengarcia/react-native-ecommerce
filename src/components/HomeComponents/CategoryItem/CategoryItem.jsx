import React, { useEffect } from 'react';
import {Pressable, Text, View, useWindowDimensions} from 'react-native';
import { styles } from './CategoryItemStyles';
import Card from '../../Card/Card';

const CategoryItem = ({categorySelected, navigation}) => {
    // const { width} = useWindowDimensions();

    return (
        <Pressable onPress={() => navigation.navigate("Home", {categorySelected})}>
            <Card style={styles.cardContainer}>
                <View>
                    <Text style={styles.text}>{categorySelected}</Text>
                </View>
            </Card>
        </Pressable>
    );
}

export default CategoryItem;
