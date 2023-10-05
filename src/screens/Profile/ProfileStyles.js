import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary,
        // alignItems:'center',
        // justifyContent:'center',
        padding: 20,
        paddingTop: 50
    },
    profileContainer:{
        width: '100%',
        justifyContent:'center',
        alignItems:'center'
    },  
    imageProfileContainer:{
        width: '50%',
        justifyContent:'center',
        alignItems:'center'
    },  
    image:{
        height: 400,
        width: 400,
        borderRadius: 300,
        marginBottom: 20
    },
    cameraButton: {
        width: '80%',
        borderRadius: 10,
        padding: 10,
        backgroundColor: COLORS.secondary
    },
    buttonText: {
        fontSize: 40,
        color: COLORS.primary,
        alignSelf:'center'
    },
    userInfoContainer:{
        marginTop: 50,
        width: '50%',
        justifyContent:'center',
        alignItems:'center'
    },
    infoText:{
        fontSize: 60,
        color: COLORS.secondary
    }
})