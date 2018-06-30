import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, Image, View } from 'react-native';

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const { width: viewportWidth } = Dimensions.get('window');

export default class UnitsDropdown extends React.Component {
    constructor(props: Object) {
        super(props);
        this.state = {
            isOpenDropDown: false,
            unitsList: ['i', 'Ki', 'Mi', 'Gi', 'Ti'],
            selectedUnitIndex: 0
        };

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.selectUnit = this.selectUnit.bind(this);
    }

    toggleDropDown() {
        this.setState({
            isOpenDropDown: !this.state.isOpenDropDown
        });
    }

    selectUnit(unitIndex) {
        this.setState({
            isOpenDropDown: false,
            selectedUnitIndex: unitIndex
        })
    }

    render() {
        let isOpenDropDown = this.state.isOpenDropDown === true ? 1 : 0;
        return (
            <TouchableOpacity style={{height: 40, borderWidth: 1, width: wp(20), marginBottom: 20, padding: 6, borderBottomColor: '#FFFFFF', borderBottomWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
                onPress={this.toggleDropDown}
            >
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>{this.state.unitsList[this.state.selectedUnitIndex]}</Text>
                <Image
                        source={require('../../assets/images/down_arrow.svg')}
                        style={{ width: 20, height: 20, position: 'absolute', left: 15, top: 5 }}
                    />
                <View
                    style={{ width: wp(20), position: 'absolute', top: 50, borderRadius: 6, opacity: isOpenDropDown }}
                >
                    <TouchableOpacity
                        onPress={() => this.selectUnit(0)}
                        style={{ width: wp(20), height: 40, backgroundColor: '#FFB74D', borderTopLeftRadius: 6, borderTopRightRadius: 6, paddingLeft: 20, display: 'flex', justifyContent: 'center' }}
                        >
                        <Text style={{ color: '#FFFFFF', fontSize: 26 }}>i</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.selectUnit(1)}
                        style={{ width: wp(20), height: 40, backgroundColor: '#FFA726', paddingLeft: 20, display: 'flex', justifyContent: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 26 }}>Ki</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.selectUnit(2)}
                        style={{ width: wp(20), height: 40, backgroundColor: '#FF9800', paddingLeft: 20, display: 'flex', justifyContent: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 26 }}>Mi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.selectUnit(3)}
                        style={{ width: wp(20), height: 40, backgroundColor: '#FB8C00', paddingLeft: 20, display: 'flex', justifyContent: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 26 }}>Gi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.selectUnit(4)}
                        style={{ width: wp(20), height: 40, backgroundColor: '#F57C00', borderBottomLeftRadius: 6, borderBottomRightRadius: 6, paddingLeft: 20, display: 'flex', justifyContent: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 26 }}>Ti</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({});