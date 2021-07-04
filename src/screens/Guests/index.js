import React, { useState } from 'react'
import { Text, View, Pressable } from 'react-native'
import theme from '../../theme/themeStyles'

import { useNavigation } from '@react-navigation/native'

import styles from './styles';

export default GuestScreen = () => {

    const navigation = useNavigation();

    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    return (
        <View style={{justifyContent: 'space-between', height: '100%', backgroundColor: '#fbfbfb'}}>
            <View>
                {/* Adult Row */}
                <View style={styles.row}>
                    <View style={styles.titles}>
                        <Text style={styles.title}>Adults</Text>
                        <Text style={styles.description}>Ages 13 or above</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Pressable
                            onPress={() => setAdults(Math.max(0, adults - 1))}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>-</Text>
                        </Pressable>
                        <Text style={styles.counter}>{adults}</Text>
                        <Pressable
                            onPress={() => setAdults(adults + 1)}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Children Row */}
                <View style={styles.row}>
                    <View style={styles.titles}>
                        <Text style={styles.title}>Children</Text>
                        <Text style={styles.description}>Ages 2 - 12</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Pressable
                            onPress={() => setChildren(Math.max(0, children - 1))}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>-</Text>
                        </Pressable>
                        <Text style={styles.counter}>{children}</Text>
                        <Pressable
                            onPress={() => setChildren(children + 1)}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>
                    </View>
                </View>

                {/* Infants Row */}
                <View style={styles.row}>
                    <View style={styles.titles}>
                        <Text style={styles.title}>Infants</Text>
                        <Text style={styles.description}>Under 2</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Pressable
                            onPress={() => setInfants(Math.max(0, infants - 1))}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>-</Text>
                        </Pressable>
                        <Text style={styles.counter}>{infants}</Text>
                        <Pressable
                            onPress={() => setInfants(infants + 1)}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            
            <View>
                <Pressable 
                onPress={() => navigation.navigate('Home', {
                    screen: 'Explore',
                    params: {
                        screen: 'Search Results'
                    }
                })}
                style={{
                    backgroundColor: theme.primary, 
                    color: 'white', 
                    padding: 15, 
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    marginBottom: 25,
                    marginHorizontal: 25
                }}>
                    <Text style={{color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>Search</Text>
                </Pressable>
            </View>
        </View>
    )
}