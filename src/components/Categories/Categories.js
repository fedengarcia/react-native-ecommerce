import React from 'react';
import {FlatList, Text, View} from 'react-native';
import { styles } from './CategoriesStyle';
import CategoryItem from '../CategoryItem/CategoryItem';

const Categories = ({title}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={category => category}
                renderItem={({item}) => <CategoryItem/>}
            />
        </View>
    );
}

export default Categories;
