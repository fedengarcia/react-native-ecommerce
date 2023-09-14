import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList:{
        width: '85%',
        minWidth: 90
    }
})