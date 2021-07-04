import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Entype from 'react-native-vector-icons/Entypo'
import theme from '../../theme/themeStyles'
import styles from './styles'

const SuggestionRow = ({item}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <Entype name={'location-pin'} size={30} color={theme.text} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
        </View>
    )

}

export default SuggestionRow
