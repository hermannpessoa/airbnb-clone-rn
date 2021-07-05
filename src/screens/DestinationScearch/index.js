import React, { useState } from 'react'
import { Text, View, TextInput, FlatList, Pressable } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import styles from './styles'

import searchResults from '../../../assets/data/search'
import SuggestionRow from './SuggestionRow'

import { useNavigation } from '@react-navigation/native'

export default DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState('');

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Input */}
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    // console.log('DATA ==> ', data);
                    // console.log('DETAILS ==> ', details);
                    navigation.navigate('Guests')
                }}
                styles={{
                    textInput: styles.textInput,
                    loader: {backgroundColor: '#f00'}
                }}
                query={{
                    key: 'AIzaSyB50xldtzz0UWyuXij9HO1mvGzETW2E60s',
                    language: 'en',
                    types: '(cities)'
                }}
                suppressDefaultStyles
                enablePoweredByContainer={false}
                renderRow={(item) => <SuggestionRow item={item} />}
            />

            {/* <TextInput
                style={styles.textInput}
                placeholder={'Where are you going?'}
                value={inputText}
                onChangeText={setInputText}
            /> */}


        </View>
    )
}
