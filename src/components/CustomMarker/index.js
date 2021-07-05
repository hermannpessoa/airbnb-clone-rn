import React from 'react'
import { Text, View } from 'react-native'
import { Marker } from 'react-native-maps'

import styles from './styles'

const CustomMarkers = (props) => {
    const { coordinate, price, onPress, isSelected } = props;
    return (
        <Marker coordinate={coordinate} onPress={onPress}>
            <View style={
                [
                    styles.bubbleMarker, 
                    {
                        backgroundColor: isSelected ? 'black':'white',
                        borderColor: isSelected ? 'black':'#ccc'
                    }
                ]
            }>
                <Text style={
                    [
                        styles.bubbleMarkerText,
                        {
                            color: isSelected ? 'white':'black'
                        }
                    ]
                }>
                    ${price}
                </Text>
            </View>
        </Marker>
    )
}

export default CustomMarkers
