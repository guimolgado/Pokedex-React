import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function New() {
  return (
    <ImageBackground
      source={require('../pics/Poke.png')} // Corrigido o caminho da imagem
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Para começar o projeto, nada melhor do que apresentar o Pokemon mais brabo de todos, né?!</Text>
        <Image source={require('../pics/Bulba.png')} style={styles.image} />
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
    color: 'black', // Adicionado a cor do texto
    marginBottom: 150
  },
  image: {
   
    width: 200, // Largura da imagem
    height: 200, // Altura da imagem
    resizeMode: 'contain', // Redimensiona a imagem para caber no espaço disponível
    marginBottom: 10
  },
});
