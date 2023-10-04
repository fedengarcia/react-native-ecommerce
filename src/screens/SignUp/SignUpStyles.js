import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary,
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
        paddingTop: 50
    },
    loginContainer: {
        flex:1,
        width: '100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    loginCard: {
        alignItems:'center',
        flex: 0,
        height:'auto',
        width: '70%',
        padding: 50,
        borderRadius: 20,
    },
    title: {
        color: COLORS.primary,
        fontSize: 60,
    },
    input: {
        fontSize: 50,
        color: COLORS.secondary,
        borderRadius: 20,
        backgroundColor: COLORS.backgroundGray2,
        width: '100%',
        height: 80,
        marginVertical: 20,
    },
    notAccountText:{
        marginBottom: 20,
        marginTop: 40,
        fontSize: 40,
    },
    button: {
        borderRadius: 20,
        padding: 20,
        backgroundColor: COLORS.secondary,
        width: '50%',
        alignSelf: 'center',
    },
    buttonText:{
        alignSelf: 'center',
        fontSize: 40,
        color: COLORS.primary
    }
})