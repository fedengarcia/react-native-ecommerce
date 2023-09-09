import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.primary,
        shadowColor: '#000',
        shadowOffset: {height: 5, width: 3},
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 1,
    },
})
