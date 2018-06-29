import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Image from 'react-native-remote-svg';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const { width: viewportWidth } = Dimensions.get('window');

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/images/menu.svg')}
                        style={styles.menuIcon}
                    />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/images/iota_logo_white.svg')}
                    style={styles.logoIcon}
                />
                <TouchableOpacity onPress={this.props.logout}>
                    <Image
                        source={require('../../assets/images/logout.svg')}
                        style={styles.logoutIcon}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '8%',
        backgroundColor: '#000000',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },
    logoIcon: {
        width: 100,
        height: 80
    },
    menuIcon: {
        width: 25,
        height: 25
    },
    logoutIcon: {
        width: 20,
        height: 20
    }
});