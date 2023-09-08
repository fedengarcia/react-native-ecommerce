import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.primary,
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 30,
        fontWeight: '500',
        color: COLORS.secondary
    }

})
