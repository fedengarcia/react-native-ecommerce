import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary,
        alignItems:'center',
        padding: 20
    },
    categoriesContainer: {
        width: '100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList:{
        width: '100%',
    }
})