import React, { useState } from "react"
import {View, Text, Dimensions, Image} from 'react-native'
import styles from './styles'
import Carousel, { Pagination } from 'react-native-snap-carousel';

const carouselWidth = Dimensions.get('screen').width;


const ENTRIES1 = [
    { illustration: 'https://i.imgur.com/UYiroysl.jpg' },
    { illustration: 'https://i.imgur.com/UPrs1EWl.jpg' },
    { illustration: 'https://i.imgur.com/MABUbpDl.jpg' },
    { illustration: 'https://i.imgur.com/KZsmUi2l.jpg' },
    { illustration: 'https://i.imgur.com/2nCt3Sbl.jpg' },
    { illustration: 'https://i.imgur.com/lceHsT6l.jpg' }
];

let _renderItem = ({item, index}) => {
    return (
        <View>
            <Image style={styles.image} source={{uri: item.illustration}} />
        </View>
    );
}



const Post = (props) => {
    const [state, setState] = useState(0)
    const paginar = (index) => {
        setState(index)
    }

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
                <View style={[styles.pagination, {width: carouselWidth}]}>
                    <Pagination 
                        dotsLength={ENTRIES1.length}
                        activeDotIndex={state}
                        dotColor={'rgba(255, 255, 255, 0.92)'}
                        dotStyle={styles.paginationDot}
                        inactiveDotColor={'#fff'}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.7}
                    />
                </View>
            </View>
            
            <View style={styles.textContainer}>
                {/* bad & bedroom */}
                <Text style={styles.bedrooms}>1 bed &bull; 1 bedroom</Text>

                {/* title */}
                {/* <Text style={styles.title}>Bright room in the heart of the city</Text> */}

                {/* type & description */}
                <Text numberOfLines={2} style={styles.description}>Private Room &bull; Lorem Ipsum is simply Lorem Ipsum is simply dummy text. Lorem Ipsum is simply Lorem Ipsum is simply dummy text</Text>
                
                {/* prices */}
                <Text style={styles.prices}>
                    <Text style={styles.oldPrice}>$36</Text>
                    <Text style={styles.price}>  $30 </Text>
                    / night
                </Text>

                {/* total price */}
                <Text style={styles.totalprice}>$247 total</Text>
            </View>
        </View>
    )
}

export default Post