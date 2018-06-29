import React from 'react';
import { StyleSheet, Text, View, Alert, StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const { width: viewportWidth } = Dimensions.get('window');

export default class SendScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipientAddress: '',
            count: ''
        };
    }

    static navigationOptions = {
        title: 'Send',
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
                <View>
                    <TextInput
                        placeholder="Address of the recipient"
                        placeholderTextColor="#FFFFFF"
                        style={{height: 40, borderWidth: 1, width: wp(90), marginBottom: 20, padding: 6, color: '#FFFFFF', borderBottomColor: '#FFFFFF', borderBottomWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', fontSize: 16 }}
                        onChangeText={(recipientAddress) => this.setState({recipientAddress})}
                        value={this.state.recipientAddress}
                    />
                    <TextInput
                        placeholder="Count"
                        placeholderTextColor="#FFFFFF"
                        style={{height: 40, borderWidth: 1, width: wp(90), marginBottom: 20, padding: 6, color: '#FFFFFF', borderBottomColor: '#FFFFFF', borderBottomWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', fontSize: 16 }}
                        onChangeText={(count) => this.setState({count})}
                        value={this.state.count}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ backgroundColor: '#3b2a7a', width: wp(100), padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 24 }}>Send now</Text>
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
});