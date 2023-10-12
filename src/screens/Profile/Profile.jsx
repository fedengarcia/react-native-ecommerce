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

  const handleLogOut = () => {
    dispatch(logOut())
    deleteSession()
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
                <Text style={styles.buttonText}>{profileImage ? 'Modify profile picture' : 'Add profile picture'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.infoText}>{user}</Text>
              <TouchableOpacity style={[styles.cameraButton, {width: '50%', marginTop: 50}]} onPress={() => navigation.navigate("Location")}>
                <Text style={styles.buttonText}>Location</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.cameraButton, {width: '50%', marginTop: 50}]} onPress={handleLogOut}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>

         </View>
      </View>
  );
}


export default Profile;
