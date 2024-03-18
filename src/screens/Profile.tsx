import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Profile() {
  return (
    <ImageBackground
      source={require('../pics/Poke.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Nosso projeto não tem nenhum fim lucrativo, nossa única intenção é ser a maior fonte de conhecimento Pokemon!!!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffcc03', // Adicionado a cor do texto
  },
});
