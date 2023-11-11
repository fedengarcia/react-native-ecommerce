import React, { useState } from 'react';
import {FlatList, Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './SignUpStyles';
import { Card } from '../../components';
import { useSignUpMutation } from '../../services/authAPI';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/auth/authSlice';
import { insertNewSession } from '../../db';
import { COLORS } from '../../global/COLORS';
import Feather from '@expo/vector-icons/Feather';


const SignUp = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [triggerSignUp] = useSignUpMutation();
  const dispatch = useDispatch();

  const handleSignUp = () => {
    triggerSignUp({
      email,
      password
    }).then(async result => {
      dispatch(setUser(result.data))
      await insertNewSession({
        localId: result.data.localId,
        email: result.data.email,
        token: result.data.idToken
      })
    }).catch(err => console.log(err))
  }


  return (
      <View style={styles.container}>
          <View style={styles.loginContainer}>
            <Card style={styles.loginCard}>
              <Text style={styles.title}>Register to start</Text>
              <View style={styles.formLabelContainer}>
                  <Feather name="mail" size={30} color={COLORS.primary}/>
                  <Text style={styles.formLabel}>Email</Text>
                </View>
              <TextInput style={styles.formInput} value={email} onChangeText={setEmail} placeholder='example@...'/>
              <View style={styles.formLabelContainer}>
                  <Feather name="lock" size={30} color={COLORS.primary}/>
                  <Text style={styles.formLabel}>Password</Text>
              </View>
              <TextInput style={styles.formInput} value={password} onChangeText={setPassword}/>

              <View style={styles.formLabelContainer}>
                  <Feather name="lock" size={30} color={COLORS.primary}/>
                  <Text style={styles.formLabel}>Repeat password</Text>
              </View>
              <TextInput style={styles.formInput} value={confirmPassword} onChangeText={setConfirmPassword}/>
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
