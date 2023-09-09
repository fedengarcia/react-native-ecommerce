import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: '90%',
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: {height: 5, width: 3},
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    textInput:{
        color: 'white',
        backgroundColor: COLORS.backgroundGray1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.primary,
        width: '80%',
        fontSize: 20,
    }
})
