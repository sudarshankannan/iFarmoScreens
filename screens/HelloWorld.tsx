import React from 'react';
import { View } from 'react-native-web';

class HelloWorld extends React.Component{
    render(){
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            </View>
        );
    }
}

export default HelloWorld;