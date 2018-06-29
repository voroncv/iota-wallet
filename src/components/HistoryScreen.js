import React from 'react';
import { StyleSheet, Text, View, Alert, StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const { width: viewportWidth } = Dimensions.get('window');

export default class HistoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipientAddress: '',
            count: ''
        };
    }

    static navigationOptions = {
        title: 'History',
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