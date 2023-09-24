import { StyleSheet } from "react-native";
import { COLORS } from "../../../global/COLORS";

export const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 50,
        marginVertical: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: COLORS.backgroundWhite,
        height: 'auto',
        alignItems: 'center',
        borderRadius: 20,
        width: 'auto'
    },
    text:{
        marginLeft: 40,
        padding: 20,
        fontSize: 50,
        fontWeight: '500',
        color: COLORS.primary
    }

})
