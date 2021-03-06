import React, {useState} from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import theme from '../../theme/themeStyles';
import styles from './styles';



const HomeScreen = (props) => {

    return (
        <View>
            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
                <Text style={styles.title}>Go Near</Text>
                <Pressable style={styles.button} onPress={() => console.warn('nearby Pressed')}>
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>

            <Pressable style={styles.searchButton} onPress={() => console.warn('searchButton Pressed')}>
                <Fontisto name="search" size={25} color={theme.primary} />
                <Text style={styles.searchButtonText}>
                    Where are you going?
                </Text>
            </Pressable>
        </View>
    )
}

export default HomeScreen;