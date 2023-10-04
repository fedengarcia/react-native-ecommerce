import React, { useState } from 'react';
import {FlatList, Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './SignUpStyles';
import { Card } from '../../components';
import {useSignUpMutation} from '../../services/authAPI';


const SignUp = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [triggerSignUp, result] = useSignUpMutation();


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
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
                <Text style={styles.notAccountText}>Already have an account?</Text>
                <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </Card>
          </View>
          
      </View>
  );
}


export default SignUp;
