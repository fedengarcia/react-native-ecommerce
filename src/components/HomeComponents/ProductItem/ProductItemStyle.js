import { StyleSheet } from "react-native";
import { COLORS } from "../../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'transparent',
        elevation: 1,
        padding: 20,
        marginHorizontal: 20,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: COLORS.backgroundGray1,
        backgroundColor: COLORS.backgroundGray1,
        borderRadius: 10
    },
    image:{
        width: '100%',
        height: 500,
        borderRadius: 10
    },
    name:{
        color: COLORS.secondary,
        fontSize: 80,
        margin: 10,
    },
    details:{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    detailsText:{
        fontSize: 50,
        margin: 10,
        color: COLORS.secondary,
    }

})
