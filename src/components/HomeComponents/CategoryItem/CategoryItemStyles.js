import { StyleSheet } from "react-native";
import { COLORS } from "../../../global/COLORS";

export const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 20,
        marginVertical: 20,
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: COLORS.backgroundWhite,
        height: 'auto',
        alignItems: 'center',
        borderRadius: 20,
        width: 'auto'
    },
    text:{
        // marginLeft: 40,
        padding: 5,
        fontSize: 30,
        fontWeight: '500',
        textTransform: 'uppercase',
        color: COLORS.primary
    }

})
