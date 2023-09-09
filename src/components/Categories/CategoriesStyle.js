import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.primary,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        overflow: 'scroll'
    },
    flatListContainer:{
        width: '100%'
    }
})
