/**
* Simple Grouped Radio Button example
*/

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import RadioButtonGroup from './RadioButtonGroup';

class SimpleRadioButtons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			types1: [{label: 'Orange', value: 0}, {label: 'Yellow', value: 1}],
			value1: 0,
			value1Index: 0,
			types2: [{label: 'Blue', value: 0}, {label: 'Purple', value: 1}, {label: 'Green', value: 2},],
			value2: 0,
			value2Index: 0,
			types3: [{label: 'Red', value: 0}, {label: 'White', value: 1}, {label: 'Blue', value: 2},],
			value3: 0,
			value3Index: 0,
		};
		this.onPress = this.onPress.bind(this);
	}

	onPress(key, index){
		let update = {};
		update[key] = index;
		this.setState(update);
	}

	render() {
		return (
			<View style={styles.container}>
				<RadioButtonGroup valueKey="value1Index" onPress={this.onPress} options={this.state.types1} valueIndex={this.state.value1Index}/>
				<RadioButtonGroup valueKey="value2Index" onPress={this.onPress} options={this.state.types2} valueIndex={this.state.value2Index}/>
				<RadioButtonGroup valueKey="value3Index" onPress={this.onPress} options={this.state.types3} valueIndex={this.state.value3Index}/>
				<Text>Types1 selected color: {this.state.types1[this.state.value1Index].label}</Text>
				<Text>Types2 selected color: {this.state.types2[this.state.value2Index].label}</Text>
				<Text>Types3 selected color: {this.state.types3[this.state.value3Index].label}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
});

AppRegistry.registerComponent('SimpleRadioButtons', () => SimpleRadioButtons);
