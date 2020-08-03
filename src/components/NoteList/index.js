import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';

//Disable yellow-warnings
console.disableYellowBox = true;

export default function NoteList({ data, handleDelete }) {
	return (
		<Animatable.View
			style={[styles.container]}
			animation="fadeInRight"
			useNativeDriver
			duration={1300}
		>
			<View>
				<Text style={styles.text}>{data.note}</Text>
				<TouchableOpacity onPress={data => handleDelete(data.note)}>
					<AntDesign
						name="delete"
						size={24}
						color="white"
						style={styles.delete}
					/>
				</TouchableOpacity>
			</View>
		</Animatable.View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 8,
		backgroundColor: '#FEC350',
		borderRadius: 5,
		padding: 7,
		elevation: 1.5,
		fontWeight: 'bold',
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: {
			width: 5,
			height: 5,
		},
	},
	text: {
		color: 'white',
		fontWeight: '600',
		paddingLeft: 10,
		paddingRight: 40,
		fontSize: 18,
	},
	delete: {
		position: 'absolute',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		top: -22,
		right: 4,
	},
});
