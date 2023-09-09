import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary,
    },
    productsListContainer:{
        paddingHorizontal: 15,
        flex: 1,
        marginTop: 15
    }
})