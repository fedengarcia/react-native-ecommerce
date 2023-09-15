import React from 'react';
import {Button, Text, View} from 'react-native';
import { styles } from './HeaderStyle';

const Header = ({title, navigation}) => {
    return (
        <View style={styles.container}>
            {title !== "Categories" && <Button style={styles.buttonBack} onPress={() => navigation.goBack()} title="go back"/>}
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

export default Header;
