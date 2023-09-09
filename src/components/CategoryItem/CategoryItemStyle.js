import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.primary,
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    text:{
        marginLeft: 40,
        fontSize: 50,
        fontWeight: '500',
        color: COLORS.secondary
    }

})
