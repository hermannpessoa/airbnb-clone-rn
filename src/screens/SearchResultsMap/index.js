import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

import CustomMarkers from '../../components/CustomMarker'
import PostCarouselItem from '../../components/PostCarouselItem'

import feed from '../../../assets/data/feed';

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
});


const SearchResultsMap = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    return (
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
                {feed.map(item => 
                    <CustomMarkers 
                        key={item.id} 
                        coordinate={item.coordinate} 
                        price={item.newPrice} 
                        isSelected={item.id == selectedPlaceId}
                        onPress={() => setSelectedPlaceId(item.id)}
                    />
                )}

            </MapView>
            <View style={{position: 'absolute', bottom: 10}}>
                <PostCarouselItem data={feed[0]} />
            </View>
        </View>
    )
};

export default SearchResultsMap;
