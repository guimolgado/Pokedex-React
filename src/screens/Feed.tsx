import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Feed() {
  return (
    <ImageBackground
      source={require('../pics/Poke.png')} // Corrigido o caminho da imagem
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Olá, seja muito bem vindo a nosso projeto de Pokedex!!</Text>
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
