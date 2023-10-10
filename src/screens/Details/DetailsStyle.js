import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary,
        alignItems:'center',
        padding: 20
    },
    cardContainer:{
        borderRadius: 20,
        margin: 50,
        width: '80%',
        height: 'auto',
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
        margin: 10,
        marginHorizontal: 40,
    },
    title:{
        fontSize: 60,
        fontWeight: "bold"
    },
    description: {
        fontSize: 50
    },
    price:{
        fontSize: 80
    },
    addCartButton:{
        marginTop: 40,
        alignSelf:'center',
        borderRadius: 20,
        padding: 20,
        width: '80%',
        backgroundColor: COLORS.secondary,
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 50,
        color: COLORS.primary,


    }
    
})