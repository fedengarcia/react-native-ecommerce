import React, { useState } from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ProfileStyles';
import { Header } from '../../components';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePicture from '../../../assets/profilePic.png';
import { logOut, setProfileImage } from '../../features/auth/authSlice';
import { usePostProfileImageMutation } from '../../services/shopAPI';
import { deleteSession } from '../../db';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../../global/COLORS';



const Profile = ({navigation}) => {
  const {user, localId, profileImage} = useSelector(state => state.auth);
  const [triggerSaveProfileImage] = usePostProfileImageMutation();
  const dispatch = useDispatch();


  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if(!granted) return false;
    return true;
  }

  const pickImage = async () => {
    const hasPermission = await verifyCameraPermissions();
    if (hasPermission){
      
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9,16],
        quality: 0.4
      });

      if (!result.canceled) {
        dispatch(setProfileImage(`${result.assets[0].uri}`))
        confirmImage(`${result.assets[0].uri}`);
      };
      
    }
  }

  const confirmImage = (image) => {
    triggerSaveProfileImage({image, localId}).then(result => {
      console.log("Imagen cargada correctamente")
    })
  }

  const handleLogOut = async () => {
    dispatch(logOut())
    await deleteSession(localId)
    .then(res => console.log("Se borro la session", res))
    .catch(err => console.log("Error al borrar la session",err))
  }

  return (
      <View style={styles.container}>
         <Header title={"Profile"}/>
         <View style={styles.profileContainer}>
            <View style={styles.imageProfileContainer}>
              <Image 
                style={styles.image}
                source={profileImage ? {uri: profileImage } : ProfilePicture}
              />
              <TouchableOpacity style={styles.cameraButton} onPress={pickImage}>
                <Feather name="edit" size={30} color={COLORS.primary}/>
                <Text style={styles.buttonText}>{profileImage ? 'Modify profile picture' : 'Add profile picture'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.infoText}>{user}</Text>
              {/* <TouchableOpacity style={[styles.cameraButton, {width: '50%', marginTop: 50}]} onPress={() => navigation.navigate("Location")}>
                <Text style={styles.buttonText}>Location</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={[styles.cameraButton, {width: '30%', marginTop: 20}]} onPress={handleLogOut}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>

         </View>
      </View>
  );
}


export default Profile;
