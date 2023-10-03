import React from 'react';
import {FlatList, Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './SingUpStyles';
import { Card } from '../../components';


const SingUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
              <Card style={styles.loginCard}>
                <Text style={styles.title}>Register to start</Text>
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                  <Text style={styles.notAccountText}>Already have an account?</Text>
                  <TouchableOpacity  style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
              </Card>
            </View>
           
        </View>
    );
}


export default SingUp;
