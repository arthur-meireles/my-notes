import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FDA905" barStyle="light-content"/>
      
      <View style={styles.content}>
        <Text style={styles.title}>My Notes</Text>
      </View>

      {/* AQUI VAI A LISTAGEM */}
      <TouchableOpacity>

      </TouchableOpacity>

    </SafeAreaView>
  )
}


/*
         STYLESHEET
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDA905',
  },
  title:{
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',

  },
  content:{

  }

});

