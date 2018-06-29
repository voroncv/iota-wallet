import React from 'react';
import { StyleSheet, Text, View, Alert, StatusBar, Dimensions } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const { width: viewportWidth } = Dimensions.get('window');

export default class ReceiveScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        title: 'Receive',
        headerTitleStyle: {
            color: '#FFFFFF'
        },
        headerStyle: {
            backgroundColor: '#000000'
        },
        headerTintColor: '#FFFFFF',
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <View style={styles.addressBlock}>
                    <Text style={styles.addressBlockText}>
                        YIAZDIOYWUMUQZOP9GLXNVJGEYAHTKEJO9QAGVZUXQWMWHJSBGOIISI9GNYCUVJBISKWAHT9MRUITKYJXDVZEQBRWA
                    </Text>
                </View>
                <View>
                    <QRCode
                        value="http://awesome.link.qr"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#009688',
        paddingTop: 20
    },
    addressBlock: {
        width: wp(90),
        borderColor: '#FFFFFF',
        borderWidth: 2,
        padding: 10,
        borderRadius: 4
    },
    addressBlockText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
});