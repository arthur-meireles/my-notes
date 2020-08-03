import React, { useState, useCallback } from 'react';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	StatusBar,
	TouchableOpacity,
	FlatList,
	Modal,
	TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import NoteList from './src/components/NoteList';
import * as Animatable from 'react-native-animatable';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//Remove Warning chato
console.disableYellowBox = true;

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
	const [note, setNote] = useState([]);
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState('');

	function handleAdd() {
		if (input === '') return;
		const data = {
      note: input,
			key: input
		};

		setNote([...note, data]);
		setOpen(false);
		setInput('');
	}

	// const handleDelete = useCallback((data) => {
  //   let filter = [];
  //   filter = note.filter(note => note.key !== data.key);
  //   setNote(filter);
	// });

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor="#FDA905" barStyle="light-content" />

			<View style={styles.content}>
				<Text style={styles.title}>My Notes</Text>
			</View>

			<FlatList
				marginHorizontal={0}
				showsHorizontalScrollIndicator={false}
				data={note}
				keyExtractor={item => String(item.key)}
				renderItem={({ item }) => (
					<NoteList data={item} handleDelete={handleDelete} />
				)}
			/>

			<Modal animationType="slide" transparent={false} visible={open}>
				<SafeAreaView style={styles.modal}>
					<View style={styles.modalHeader}>
						<TouchableOpacity onPress={() => setOpen(false)}>
							<Feather name="chevron-left" size={40} color="#fff" />
						</TouchableOpacity>
						<Text style={styles.modalTitle}>Adicionar Nota</Text>
					</View>

					<Animatable.View
						style={styles.modalBody}
						animation="fadeInUp"
						useNativeDriver
					>
						<TextInput
							style={styles.input}
							multiline={true}
							placeholderTextColor="#fff"
							placeholder="O que deseja anotar?!"
							value={input}
							onChangeText={text => setInput(text)}
						/>
						<TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
							<Text style={styles.handleAddText}>Cadastrar</Text>
							<MaterialIcons name="check" size={24} color="white" />
						</TouchableOpacity>
					</Animatable.View>
				</SafeAreaView>
			</Modal>

			<AnimatedBtn
				style={styles.fab}
				useNativeDriver
				animation="fadeInRight"
				duration={1000}
				onPress={() => setOpen(true)}
			>
				<Ionicons name="ios-add" size={35} color="#fff" />
			</AnimatedBtn>
		</SafeAreaView>
	);
}

/*
         STYLESHEET
*/
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FDA905',
	},
	title: {
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 20,
		color: 'white',
		paddingBottom: 10,
		fontSize: 30,
		fontWeight: 'bold',
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: {
			width: 5,
			height: 5,
		},
	},
	content: {},
	fab: {
		position: 'absolute',
		width: 70,
		height: 70,
		backgroundColor: '#FEC350',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 40,
		right: 25,
		bottom: 25,
		elevation: 2,
		zIndex: 9,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: {
			width: 5,
			height: 5,
		},
	},
	modal: {
		flex: 1,
		backgroundColor: '#FDA905',
	},
	modalHeader: {
		marginLeft: 10,
		marginRight: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	modalTitle: {
		marginLeft: 20,
		fontSize: 20,
		fontWeight: '600',
		color: '#fff',
	},
	modalBody: {
		marginTop: 15,
	},
	input: {
		textAlignVertical: 'top',
		fontSize: 18,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 20,
		backgroundColor: '#FEC350',
		color: '#fff',
		padding: 10,
		borderRadius: 5,
		height: 200,
		color: '#fff',
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: {
			width: 5,
			height: 5,
		},
	},
	handleAdd: {
		backgroundColor: '#FEC350',
		marginTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 5,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: {
			width: 5,
			height: 5,
		},
	},
	handleAddText: {
		color: 'white',
		padding: 10,
		fontSize: 20,
	},
});
