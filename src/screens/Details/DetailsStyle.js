import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.backgroundGray1,
        alignItems:'center'
    },
    cardContainer:{
        borderRadius: 20,
        margin: 50,
        width: '80%',
        backgroundColor: COLORS.backgroundGray1,
        alignItems:'flex-start'
    },
    image:{
        
        width: '100%',
        height: 600
    },
    textStyle: {
        fontFamily: 'PTSansRegular',
        color: COLORS.primary,
        margin: 30
    },
    title:{
        fontSize: 110,

    },
    description: {
        fontSize: 60
    },
    price:{
        fontSize: 80
    }
    
})