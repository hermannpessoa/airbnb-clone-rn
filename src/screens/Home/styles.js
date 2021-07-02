import { StyleSheet, Dimensions } from "react-native"
import theme from '../../theme/themeStyles'

const styles = StyleSheet.create({
    image: {
        width:'100%',
        height:500,
        resizeMode: 'cover',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        elevation: 1
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        lineHeight: 70,
        padding: 15
    },
    button:{
        marginLeft: 15,
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    buttonText:{
        fontWeight: 'bold',
        color: theme.primary
    },
    searchButton:{
        backgroundColor: '#fff',
        borderRadius: 200,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        width: (Dimensions.get('screen').width - 50),
        top: 30,
        elevation: 3,
        zIndex: 3,
        marginHorizontal: 25
    },
    searchButtonText: {
        fontWeight: 'bold',
        color: theme.text,
        justifyContent: 'center',
        marginLeft: 15
    }
})

export default styles;
