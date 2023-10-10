import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary,
        alignItems:'center',
        padding: 20,
    },
    flatList:{
        width: '100%'
    },
    finalDetailsContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cartActionsContainer:{
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        width: '100%',
        height: 'auto',
        margin: 20,
        paddingVertical: 20,
        alignItems:'center',
        borderRadius: 20
    },
    buttonConfirm:{
        backgroundColor: COLORS.actionConfirm,
    },
    buttonDelete: {
        backgroundColor: COLORS.actionDelete
    },
    buttonText:{
        fontSize: 60
    },
    finalPriceContainer:{
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    finalPrice:{
        fontSize: 60,
        color: COLORS.secondary
    },
    noResultsText:{
        fontSize: 60,
        textAlign: 'center',
        color: COLORS.backgroundWhite
    }
})