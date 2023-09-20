import { StyleSheet } from "react-native";
import { COLORS } from "../../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.primary,
        padding: 8,
    },
    name:{
        fontSize: 18
    },
    details:{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: 'space-between'
    }

})
