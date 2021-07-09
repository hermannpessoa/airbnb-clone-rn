import React, { useEffect, useState} from 'react';
import { View, FlatList } from 'react-native';

import Post from '../../components/Post';

import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries'

const SearchResultScreen = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() =>{
        const fetchPosts = async () => {
            try {
                
                const postResults = await API.graphql(graphqlOperation(listPosts))

                setPosts(postResults.data.listPosts.items)

            } catch (error) {
                console.log(error)
            }
        }

        fetchPosts();
    },[])

    return(
        <View style={{backgroundColor: '#fbfbfb'}}>
            <FlatList
                data={posts}
                renderItem={ ({item}) => <Post data={item} /> }
            />
        </View>
    )
}
export default SearchResultScreen