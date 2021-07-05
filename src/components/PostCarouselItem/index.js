import React, { useState } from "react"
import { View, Text, Dimensions, Image } from 'react-native'
import styles from './styles'





const PostCarouselItem = ({ data }) => {
    const width = Dimensions.get('screen').width
    return (
        <View style={[styles.container, {width: width - 40}]}>
            <View style={styles.innerContainer}>
                <View style={styles.caroussel}>
                    <Image
                        style={styles.image}
                        source={{ uri: data.image }}
                    ></Image>
                </View>

                <View style={styles.textContainer}>
                    {/* bad & bedroom */}
                    <Text style={styles.bedrooms}>{data.bed} bed{data.bed > 1 ? 's' : ''} &bull; {data.bedroom} bedroom{data.bedroom > 1 ? 's' : ''}</Text>

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
                </View>
            </View>
        </View>
    )
}

export default PostCarouselItem