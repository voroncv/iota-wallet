import React from 'react';
import { View, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';

export default class Loader extends React.Component {
	constructor(props) {
        super(props);
	    this.state = {};
    }

    render() {
    	return (
    		<View style={styles.loaderContainer}>
                <StatusBar barStyle='light-content' />
                <View style={styles.loaderBlock}>
                    <ActivityIndicator size="large" color="#000000" />
                </View>
            </View>
    	)
    }
}

const styles = StyleSheet.create({
    loaderContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        flex: 1,
        zIndex: 2,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8
    },
    loaderBlock: {
        width: 100,
        height: 100,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});