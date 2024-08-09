import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  ScrollView
} from 'react-native'
import { FichaContext } from '/Users/jhon1/OneDrive/Área de Trabalho/ficherApp/context/FichaContext'
import { LinearGradient } from 'expo-linear-gradient'


export default function ReviewPage({ route, navigation }) {
  const { fichaId } = route.params
  const { fichas } = useContext(FichaContext)
  const ficha = fichas.find((f) => f.id === fichaId)

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('./gato.png')}
          style={styles.imageBackground}
        >
          <LinearGradient
            colors={['rgba(0,0,0,0.2)', '#ffffff']}
            style={styles.gradient}
          >
            <Text style={styles.itemTitle}>Nome da obra{ficha.name}</Text>
            <Text style={styles.subtitle}>Autor: {ficha.description}</Text>
          </LinearGradient>
        </ImageBackground>

        {ficha ? (
          <>
            {ficha.image ? (
              <Image source={{ uri: ficha.image }} style={styles.image} />
            ) : (
              <View style={styles.noImage}>
                <Text style={styles.noImageText}>Sem Imagem</Text>
              </View>
            )}
            <Text>Descrição: {ficha.description}</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
          </>
        ) : (
          <Text>Ficha não encontrada.</Text>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    width: '100%',
    height: 320,
  },
  gradient: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-end',
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 8,
  },
  noImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  noImageText: {
    color: '#fff',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
