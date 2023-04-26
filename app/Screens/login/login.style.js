import {StyleSheet, TextInput} from "react-native";

export const loginStyle = StyleSheet.create({
    content : {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: '#40BBC1'

    },

    view: {
        width: "80%",
    },
    cardTitle: {
        color: '#22676B',
        textAlign: "left",
        fontSize: 25,
        fontWeight: 700,
        margin: 8, 
    },

    CardButton : {
        margin: 2,
        marginLeft: 0,
        marginRight: 0
    },

    TextInput: {
        backgroundColor:"transparent",
        borderBottomWidth: 1

    } 
})