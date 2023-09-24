import React, { useEffect } from 'react';
import {Pressable, Text, View, useWindowDimensions} from 'react-native';
import { styles } from './FiltersStyle';
import Card from '../../Card/Card';

const Filters = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Pressable style={styles.filterItemButton} onPress={() => navigation.navigate("Categories")}>
                <Card style={styles.filterItem}>
                    <Text style={styles.text}>Categories</Text>
                </Card>
            </Pressable>
            <Pressable style={styles.filterItemButton} onPress={() => navigation.navigate("Categories")}>
                <Card style={styles.filterItem}>
                    <Text style={styles.text}>Sort</Text>
                </Card>
            </Pressable>
        </View>
    );
}

export default Filters;
