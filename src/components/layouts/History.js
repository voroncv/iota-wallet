import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

export default class History extends React.Component {
    constructor(props: Object) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                activeOpacity={0.9}
                onPress={e => this.props.openPage('History')}
            >
                <Text
                    style={styles.title}
                >
                    HISTORY
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '22.5%',
        backgroundColor: '#00897B',
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