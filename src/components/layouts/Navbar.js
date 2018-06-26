import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Image from 'react-native-remote-svg';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text></Text>
                <Image
                    source={require('../../assets/images/iota_logo_white.svg')}
                    style={styles.logo}
                />
                <TouchableOpacity
                    onPress={this.props.logout}
                >
                    <Image
                        source={require('../../assets/images/logout.svg')}
                        style={{width: 20, height: 20}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: '#000000',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },
    logo: {
        width: 100,
        height: 80
    },
});