import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary,
        alignItems:'center'
    },
    productsListContainer:{
        width:  '100%',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal: 15,
        flex: 1,
        marginTop: 15,
    },
    flatList: {
        width: '100%',
        // flexDirection: 'row',
        // flexWrap: 'wrap'
    }
})