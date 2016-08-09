/**
* RadioButtonGroup
*/

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const Colors =  {
	RC_GREEN: '#80bc2a',
	RC_DARK_GREEN: '#70a524',
};

export default class RadioButtonGroup extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<RadioForm formHorizontal={false} animation={true} >
					{this.props.options.map((obj, i) => {
						const onPress = (value, index) => {
							this.props.onPress(this.props.valueKey, index);
						};

						return (
							<View key={'container'+i} style={styles.buttonContainer}>
								<RadioButton labelHorizontal={true} key={i} >
									{/*  You can set RadioButtonLabel before RadioButtonInput */}
									<RadioButtonInput
										obj={obj}
										index={i}
										isSelected={this.props.valueIndex === i}
										onPress={onPress}
										buttonInnerColor={Colors.RC_DARK_GREEN}
										buttonOuterColor={Colors.RC_GREEN}
										buttonSize={14}
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
											color: this.props.valueIndex === i? '#555' : '#777',
											fontWeight: this.props.valueIndex === i? '600' : '400'
										}}
										labelWrapStyle={{paddingLeft: 2}}
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
		backgroundColor: '#fff',
	},
	buttonContainer: {
		paddingVertical: 12,
		marginTop: 6,
		borderColor: '#ddd',
		borderBottomWidth: StyleSheet.hairlineWidth
	}
});
