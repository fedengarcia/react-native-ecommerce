import { StyleSheet } from "react-native";
import { COLORS } from "../../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width: '100%',
        height: 100,
        paddingTop: 20,
    },
    filterItemButton:{
        height: '100%'
    },
    filterItem:{
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: 10,
        borderRadius: 10
    },
    text:{
        padding: 5,
        fontSize: 30,
        fontWeight: '500',
        color: COLORS.primary
    }

})
