import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const { width: viewportWidth } = Dimensions.get('window');

export default class Balance extends React.Component {
    constructor(props: Object) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>BALANCE</Text>
                <Text style={styles.balance}>10.5 Mi</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '22.5%',
        backgroundColor: '#4DB6AC',
        padding: 10,
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: '500'
    },
    balance: {
        fontSize: 60,
        color: '#FFFFFF',
        fontWeight: '500'
    }
});