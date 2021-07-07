import { Auth } from 'aws-amplify';
import React from 'react'
import { Text, View, Pressable, Dimensions } from 'react-native'
import theme from '../../theme/themeStyles';

const ProfileScreen = () => {
    const logout = () =>{
        Auth.signOut();
    }
        return (
            <View>
                <Pressable
                onPress={logout}
                style={{
                    width: Dimensions.get('screen').width - 100,
                    height: 50,
                    backgroundColor: theme.primary,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 50
                }}>
                    <Text style={{color: 'white'}}>Sign-out</Text>
                </Pressable>
            </View>
        )
}

export default ProfileScreen;
