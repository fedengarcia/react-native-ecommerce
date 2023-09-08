import React from 'react';
import {FlatList, Text, View} from 'react-native';
import { styles } from './CategoryItemStyle';

const CategoryItem = ({title}) => {
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

export default CategoryItem;
