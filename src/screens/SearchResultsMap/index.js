import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker}  from 'react-native-maps'

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubbleMarker:{
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    bubbleMarkerText:{
        fontWeight: 'bold'
    }
});


export default () => (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >

        <Marker coordinate={{latitude: 28.3279822, longitude: -16.5124847}}>
            <View style={styles.bubbleMarker}>
                <Text style={styles.bubbleMarkerText}>$300</Text>
            </View>
        </Marker>

      </MapView>
    </View>
 );
