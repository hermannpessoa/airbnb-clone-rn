import React  from 'react'
import { Text, View } from 'react-native'
import PostDetail from '../../components/PostDetail'

import feed from '../../../assets/data/feed'

import { useRoute } from '@react-navigation/native'

const PostScreen = () => {
    const route = useRoute()

    // const place = feed[0];
    // console.log(route.params)

    const place = feed.find(place => place.id == route.params.postId)

    return (
        <View>
            <PostDetail data={place} />
        </View>
    )
}

export default PostScreen;