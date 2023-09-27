import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:'90%',
        backgroundColor: COLORS.backgroundGray1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoriesContainer: {
        width: '100%',
        height:'90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList:{
        width: '100%',
    }
})