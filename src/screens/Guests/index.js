import React, { useState } from 'react'
import { Text, View, Pressable } from 'react-native'

import styles from './styles';

export default GuestScreen = (props) => {

    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)
 
    return (
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
    )
}
