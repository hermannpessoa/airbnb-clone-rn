import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'
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

    const [selectedPlace, setSelectedPlace] = useState({
        latitude: 28.3279822,
        longitude: -16.5124847,
        latitudeDelta: 0.8,
        longitudeDelta: 0.8,
    })

    const [fakeRegion, setFakeRegion] = useState(null)

    const width = Dimensions.get('screen').width

    const flatList = useRef()

    const map = useRef()

    let controlTimer = null
    
    const viewConfig = useRef({itemVisiblePercentThreshold: 100})

    const onViewChanged = useRef(({viewableItems}) => {
        if(!viewableItems.length) return

        clearInterval(controlTimer);
        const selectedPlace = viewableItems[0]?.item
        controlTimer = setTimeout(() => setSelectedPlaceId(selectedPlace.id), 400)
    })

    const onRegionChangeComplete = useRef((item) => {
        console.log(item)
        clearInterval(controlTimer);
        controlTimer = setTimeout(() => setSelectedPlace(fakeRegion), 400)
    })

    useEffect(() => {
        if(!selectedPlaceId || !flatList) return;
        let index = feed.findIndex(el => el.id == selectedPlaceId);
        flatList.current.scrollToIndex({index})
        const newPlace = feed[index]
        const region = {
            latitude: newPlace.coordinate.latitude,
            longitude: newPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8
        }
        
        map.current.animateToRegion(region, 50)

        //setSelectedPlace(region)

    },[selectedPlaceId])

    return (
        <View style={styles.container}>
            <MapView
                ref={map}
                style={styles.map}
                region={selectedPlace}
                onRegionChangeComplete={onRegionChangeComplete.current}
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
            <View style={{position: 'absolute', bottom: 0}}>
                <FlatList
                    ref={flatList}
                    data={feed}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    snapToInterval={width - 40}
                    decelerationRate={'fast'}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                    renderItem={({item}) => <PostCarouselItem data={item} />}
                />
            </View>
        </View>
    )
};

export default SearchResultsMap;
