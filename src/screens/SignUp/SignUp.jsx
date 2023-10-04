import React, { useState } from 'react';
import {FlatList, Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './SignUpStyles';
import { Card } from '../../components';
import { useSignUpMutation } from '../../services/authAPI';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/auth/authSlice';


const SignUp = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [triggerSignUp, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const handleSignUp = () => {
    triggerSignUp({
      email,
      password
    })
    console.log(result)
    if(result.isSuccess){
      dispatch(setUser(result))
    }
  }


  return (
      <View style={styles.container}>
          <View style={styles.loginContainer}>
            <Card style={styles.loginCard}>
              <Text style={styles.title}>Register to start</Text>
              <TextInput style={styles.input} value={email} onChangeText={setEmail}/>
              <TextInput style={styles.input} value={password} onChangeText={setPassword}/>
              <TextInput style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword}/>
              <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
