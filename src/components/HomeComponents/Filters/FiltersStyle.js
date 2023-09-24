import { StyleSheet } from "react-native";
import { COLORS } from "../../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width: '100%',
        height: 200,
        paddingTop: 20,
        paddingHorizontal: 20,
        // shadowColor: '#000',
        // shadowOffset: {height: 5, width: 3},
        // elevation: 10,
        // shadowOpacity: 1,
        // shadowRadius: 1,
    },
    filterItemButton:{
        height: '60%'
    },
    filterItem:{
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: 10,
        borderRadius: 10
    },
    text:{
        padding: 20,
        fontSize: 50,
        fontWeight: '500',
        color: COLORS.primary
    }

})
