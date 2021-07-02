import { StyleSheet, Dimensions } from "react-native"
import theme from '../../theme/themeStyles'

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width - 15,
        paddingTop: 20
    },
    image:{
        width: '100%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 8
    },
    bedrooms:{
        fontSize: 14,
        color: theme.text,
        marginBottom: 5
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    description:{
        fontSize: 18,
        color: theme.text,
    },
    caroussel:{
        left: -5,
        elevation: 1,
        zIndex: 1
    },
    prices:{
        fontSize: 18,
        marginVertical: 10
    },
    oldPrice:{
        color: theme.text,
        textDecorationLine: 'line-through',
    },
    price:{
        fontWeight: 'bold'
    },
    totalprice:{
        fontSize: 16,
        textDecorationLine: 'underline',
        color: theme.text,
    },
    pagination:{
        width: '50%',
        position: 'absolute',
        bottom: 0,
        elevation: 2,
        zIndex: 2
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    textContainer:{
        paddingVertical: 10,
        marginHorizontal: 20
    }
})

export default styles;