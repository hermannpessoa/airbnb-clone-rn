import React, { useState } from "react"
import {View, Text, Dimensions, Image} from 'react-native'
import styles from './styles'
import Carousel, { Pagination } from 'react-native-snap-carousel';

const carouselWidth = Dimensions.get('screen').width;




let _renderItem = ({item, index}) => {
    return (
        <View>
            <Image style={styles.image} source={{uri: item.illustration}} />
        </View>
    );
}



const Post = ({data}) => {
    const [state, setState] = useState(0)
    const paginar = (index) => {
        setState(index)
    }

    // insert post image to first position in array
    const ENTRIES1 = [
        { illustration: data.image},
        { illustration: 'https://i.imgur.com/UYiroysl.jpg' },
        { illustration: 'https://i.imgur.com/UPrs1EWl.jpg' },
        { illustration: 'https://i.imgur.com/MABUbpDl.jpg' },
        { illustration: 'https://i.imgur.com/KZsmUi2l.jpg' },
        { illustration: 'https://i.imgur.com/2nCt3Sbl.jpg' },
        { illustration: 'https://i.imgur.com/lceHsT6l.jpg' }
    ];

   return (
        <View style={styles.container}>
            <View style={styles.caroussel}>
                <Carousel
                    data={ENTRIES1}
                    renderItem={_renderItem}
                    sliderWidth={carouselWidth}
                    itemWidth={carouselWidth - 50}
                    onSnapToItem={(index) =>  paginar(index) }
                />
                <View style={[styles.pagination, {
                    backgroundColor: '#fc0', 
                    alignSelf: 'center',
                    height: 10,
                    width: 0,
                    bottom: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                    }]}>
                    <Pagination 
                        dotsLength={ENTRIES1.length}
                        activeDotIndex={state}
                        dotColor={'rgba(255, 255, 255, 0.92)'}
                        containerStyle={{ 
                            backgroundColor: 'rgba(0, 0, 0, 0.75)',
                            width: 1,
                            height: 0,
                            padding: 1,
                            margin: 1,
                            alignSelf: 'center',
                            paddingHorizontal: 0,
                            paddingVertical: 0
                        }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: -5,
                            backgroundColor: 'rgba(255, 255, 255, 0.92)'
                        }}
                        inactiveDotColor={'#fff'}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.7}
                    />
                </View>
            </View>
            
            <View style={styles.textContainer}>
                {/* bad & bedroom */}
                <Text style={styles.bedrooms}>{data.bed} bed{data.bed > 1 ? 's':''} &bull; {data.bedroom} bedroom{data.bedroom > 1 ? 's':''}</Text>

                {/* title */}
                {/* <Text style={styles.title}>Bright room in the heart of the city</Text> */}

                {/* type & description */}
                <Text numberOfLines={2} style={styles.description}>{data.type} &bull; {data.title}</Text>
                
                {/* prices */}
                <Text style={styles.prices}>
                    <Text style={styles.oldPrice}>${data.oldPrice}</Text>
                    <Text style={styles.price}>  ${data.newPrice} </Text>
                    / night
                </Text>

                {/* total price */}
                <Text style={styles.totalprice}>${data.totalPrice} total</Text>
            </View>
        </View>
    )
}

export default Post