import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class WalletsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    onPress={this.props.logout}
                    style={{ width: '100%', backgroundColor: '#CCCCCC', padding: 10 }}
                >
                    <Text style={{ fontSize: 18 }}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        flex: 1
    }
});