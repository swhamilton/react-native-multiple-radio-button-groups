/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


const Colors =  {
	RC_GREEN: '#80bc2a',
	RC_DARK_GREEN: '#70a524',
	RC_DARKER_GREEN: '#669721',
	RC_DARK_BLUE: '#40555e',
	RC_DARKER_BLUE: '#222d32',
	RC_LIGHT_GRAY: '#f2f2f4',

}

let radio_props = [
	{label: 'param1', value: 0 },
	{label: 'param2', value: 1 }
];


class RadioButtonGroup extends Component {
	// propTypes:{
	//     style: View.propTypes.style,
	// },
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		};
		this.onPress = this.onPress.bind(this);
	}
	onPress(){
		return (value) => {this.setState({value:value})}
	}

	render() {
		var self = this;
		return (
			<View>
				<Radio
					radio_props={radio_props}
					initial={0}
					onPress={(value) => {this.setState({value:value})}}
					/>
			</View>
		);
	}
}

class SimpleRadioButtons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			types1: [{label: 'param1', value: 0}, {label: 'param2', value: 1}],
			value1: 0,
			value1Index: 0,
			types2: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},],
			value2: 0,
			value2Index: 0,
			types3: [{label: 'Pork', value: 0}, {label: 'BBQ', value: 1}, {label: 'param3', value: 2},],
			value3: 0,
			value3Index: 0,
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<RadioForm formHorizontal={false} animation={true} >
					{this.state.types3.map((obj, i) => {
						var onPress = (value, index) => {
							this.setState({
								value3: value,
								value3Index: index
							})
						}
						return (
							<View key={'container'+i} style={styles.buttonContainer}>
								<RadioButton labelHorizontal={true} key={i} >
									{/*  You can set RadioButtonLabel before RadioButtonInput */}
									<RadioButtonInput
										obj={obj}
										index={i}
										isSelected={this.state.value3Index === i}
										onPress={onPress}
										buttonInnerColor={Colors.RC_DARK_GREEN}
										buttonOuterColor={Colors.RC_GREEN}
										buttonSize={20}
										buttonStyle={{}}
										buttonWrapStyle={{}}
										/>
									<RadioButtonLabel
										obj={obj}
										index={i}
										labelHorizontal={true}
										onPress={onPress}
										labelStyle={{
											fontSize: 18,
											color: this.state.value3Index === i? '#555' : '#777',
											fontWeight: this.state.value3Index === i? '600' : '400'
										}}
										labelWrapStyle={{paddingLeft: 10}}
										/>
								</RadioButton>
							</View>
						)
					})}
				</RadioForm>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#fff',
	},
	buttonContainer: {
		paddingVertical: 12,
		marginTop: 6,
		borderColor: '#ddd',
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('SimpleRadioButtons', () => SimpleRadioButtons);
