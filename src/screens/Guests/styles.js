import { StyleSheet } from "react-native";
import theme from '../../theme/themeStyles'

export default StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 15,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginHorizontal: 25
    },
    titles: {
        flex: 1
    },
    title: {
        fontWeight: 'bold'
    },
    description: {
        color: theme.text
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        borderRadius: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: 20,
        color: theme.text
    },
    counter:{
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 25
    }
})