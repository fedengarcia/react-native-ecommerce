import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { styles } from './SearchInputStyle';
import AntDesing from "@expo/vector-icons/AntDesign";

const SearchInput = ({onSearch}) => {
    const [searchInputValue, setSearchInputValue] = useState('');
    
    const search = () => {
        onSearch(value);
    }


    const clearInput = () => {
        setSearchInputValue('');
        onSearch('');
    }
    
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                style={styles.textInput}
                onChangeText={setSearchInputValue}
                placeholder="Search product"
            />
            <Pressable onPress={search}>
                <AntDesing
                    name="search1"
                    size={25}
                    color={"black"}
                />
            </Pressable>
            <Pressable onPress={clearInput}>
                <AntDesing
                    name="search1"
                    size={25}
                    color={"black"}
                />
            </Pressable>
        </View>
    );
}

export default SearchInput;
