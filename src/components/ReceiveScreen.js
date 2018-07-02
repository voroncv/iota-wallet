import React from 'react';
import { StyleSheet, Text, View, Alert, StatusBar, Dimensions, TouchableOpacity, Clipboard } from 'react-native';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const { width: viewportWidth } = Dimensions.get('window');

export default class ReceiveScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: 'YIAZDIOYWUMUQZOP9GLXNVJGEYAHTKEJO9QAGVZUXQWMWHJSBGOIISI9GNYCUVJBISKWAHT9MRUITKYJXDVZEQBRWA'
        };

        this.copyToClipboard = this.copyToClipboard.bind(this);
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

    copyToClipboard = async () => {
        await Clipboard.setString(this.state.address);
        return Alert.alert('Copied to Clipboard');
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <View style={styles.addressBlock}>
                    <Text style={styles.addressBlockText}>
                        {this.state.address}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={this.copyToClipboard}
                    activeOpacity={0.8}
                    style={{ backgroundColor: '#3b2a7a', width: wp(100), padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}
                >
                    <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 24 }}>Copy to clipboard</Text>
                </TouchableOpacity>
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
        borderWidth: 1,
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