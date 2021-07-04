import React, { useState } from 'react'
import { Text, View, TextInput, FlatList, Pressable } from 'react-native'

import styles from './styles'
import Entype from 'react-native-vector-icons/Entypo'

import searchResults from '../../../assets/data/search'
import theme from '../../theme/themeStyles'

import { useNavigation } from '@react-navigation/native'

export default DestinationSearchScreen = () =>{

    const [inputText, setInputText] = useState('');

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Input */}
            <TextInput 
                style={styles.textInput}
                placeholder={'Where are you going?'}
                value={inputText}
                onChangeText={setInputText}
            />

            {/* List of Destinations */}
            <FlatList
                data={searchResults}
                renderItem={ ({item}) => 
                    <Pressable style={styles.row}
                        onPress={() => navigation.navigate('Guests')}
                    >
                        <View style={styles.iconContainer}>
                            <Entype name={'location-pin'} size={30} color={theme.text}/>
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                }
            />

            
        </View>
    )
}
