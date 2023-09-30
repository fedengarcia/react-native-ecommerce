import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.primary,
        height: 'auto',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 60
    },
    text:{
        width: '100%',
        margin: 50,
        marginLeft: 200,
        fontSize: 70,
        fontWeight: '500',
        color: COLORS.secondary,
        fontFamily: 'PTSansRegular'
    },
    actionHeaderContainer:{
        width: '20%',
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
