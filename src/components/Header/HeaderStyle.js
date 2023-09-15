import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.primary,
        height: 'auto',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        width: '95%',
        margin: 50,
        fontSize: 70,
        fontWeight: '500',
        color: COLORS.secondary,
        fontFamily: 'PTSansRegular'
    },
    actionHeaderContainer:{
        marginTop: 40,
        width: '100%',
        alignItems:'flex-start',
    },
    buttonBack: {
        width: 'auto',
        padding: 20
    },
    buttonBackText: {
        padding: 20,
        textAlign:'center',
        opacity: 0.8,
        backgroundColor: COLORS.secondary,
        fontSize: 30,
        borderRadius: 50,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: COLORS.primary
    }

})
