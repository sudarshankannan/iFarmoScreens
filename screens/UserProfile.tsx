import { useState, version } from 'react';
import { StyleSheet, FlatList, Animated, View, Text, Image } from 'react-native';
import { Card, Button, Icon} from 'react-native-elements';
import React from 'react';

const NameText = () => {
    return (<Text style = {styles.row}>Name:</Text>);
}

const OccupationText = () => { 
    return (<Text style = {styles.row}>Occupation:</Text>);
}

const LocationText = () =>  {
    return (<Text style = {styles.row}>Location:</Text>);
}

const UserProfile = () => {
    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>HELLO WORLD</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={{ padding: 0 }}
                    source={{
                        uri:
                        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                    }}
                    />
                    <NameText/>
                    <OccupationText />
                    <LocationText />
                    <Button
                    icon={
                        <Icon
                        name="code"
                        color="#ffffff"
                        iconStyle={{ marginRight: 10 }}
                        />
                    }
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                    }}
                    title="Edit Profile"
                />
            </Card>
        </View>
        
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        padding: 5
    },
    row: {
        padding: 4,
        borderBottomColor: "red",
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});

export default UserProfile;