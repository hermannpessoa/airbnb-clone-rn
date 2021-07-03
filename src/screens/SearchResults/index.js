import React from 'react';
import { View, Text, FlatList } from 'react-native';

import Post from '../../components/Post';

import feed from '../../../assets/data/feed';

const SearchResourceScreen = (props) => {
    return(
        <View>
            <FlatList
                data={feed}
                renderItem={ ({item}) => <Post data={item} /> }
            />
        </View>
    )
}
export default SearchResourceScreen