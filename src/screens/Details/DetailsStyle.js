import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.backgroundGray1,
        alignItems:'flex-start'
    },
    image:{
        width: '100%',
        height: 600
    },
    textStyle: {
        fontFamily: 'PTSansRegular',
        color: COLORS.secondary,
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