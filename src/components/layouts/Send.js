import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Send extends React.Component {
    constructor(props: Object) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                activeOpacity={0.9}
                onPress={e => this.props.openPage('Send')}
            >
                <Text
                    style={styles.title}
                >
                    SEND
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '23%',
        backgroundColor: '#26A69A',
        padding: 10
    },
    title: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: '500',
        opacity: 0.8
    },
    balance: {
        fontSize: 60,
        color: '#FFFFFF',
        fontWeight: '500'
    }
});