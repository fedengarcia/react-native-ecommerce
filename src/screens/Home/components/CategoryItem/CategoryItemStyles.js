import { StyleSheet } from "react-native";
import { COLORS } from "../../../../global/COLORS";

export const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 30,
        marginVertical: 10,
        padding: 10,
        // backgroundColor: COLORS.primary,
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: '95%'
    },
    text:{
        marginLeft: 40,
        padding: 20,
        fontSize: 50,
        fontWeight: '500',
        color: COLORS.secondary
    }

})
