import { StyleSheet, Dimensions } from "react-native"
import theme from '../../theme/themeStyles'

const styles = StyleSheet.create({
    container:{        
        height: 120,
        padding: 5
    },
    innerContainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden',
    },
    image:{
        width: 100,
        aspectRatio: 1/1,
        resizeMode: 'cover',
    },
    bedrooms:{
        fontSize: 12,
        color: theme.text,
        // marginBottom: 5
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    description:{
        fontSize: 14,
        color: theme.text,
        fontWeight: 'bold'
    },
    prices:{
        fontSize: 16,
        // marginTop: 5
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
    textContainer:{
        paddingVertical: 10,
        marginHorizontal: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
})

export default styles;