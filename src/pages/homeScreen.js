import React, { useContext } from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons' // Biblioteca de ícones
import { IconButton, Card } from 'react-native-paper'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'


import { FichaContext } from '/Users/jhon1/OneDrive/Área de Trabalho/ficherApp/context/FichaContext'


export default function HomeScreen({ navigation }) {
  const { fichas } = useContext(FichaContext)

  const recentFichas = fichas.slice(-5).reverse()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../pages/Logo 2x.png')} style={styles.logo} />
      </View>
      <View style={styles.WelcomeUser}>
        <View>
          <Text style={styles.WelcomeText}>Olá</Text>
          <Text style={styles.UserName}>Helena Santos</Text>
        </View>

        <Image
          style={styles.userPhoto}
          source={require('../pages/fotoUser.jpg')}
        />
      </View>

      <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="   Buscar..." />
      </View>

      <Text style={styles.title}>Fichas Recentes</Text>
      <FlatList
        data={recentFichas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.image ? (
              <Image source={{ uri: item.image }} style={styles.image} />
            ) : (
              <View style={styles.noImage}>
                <Text style={styles.noImageText}>Sem Imagem</Text>
              </View>
            )}
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.titulo}</Text>
              <Text>{item.autor}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RevisarFicha', { fichaId: item.id })
              }
            >
              <Icon name="visibility" size={30} color="green" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, // Espaço para a barra fixa
    backgroundColor: '#EAECEE',
    padding: 20,
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#EAECEE',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
  },
  logo: {
    width: '60%',
    height: 40,
  },
  WelcomeText: {
    fontSize: 24,
    fontWeight: 'light',
    marginTop: 30,
    marginBottom: 0,
    color: '#3F4B5C',
    textAlign: 'left',
  },
  WelcomeUser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  UserName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#040404',
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  searchBar: {
    marginTop: 1,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 9,
    height:50
  },
  input: {
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '	#ffffff',
    borderRadius: 7,
    padding: 5,
    fontSize: 18,
    fontWeight: 'light',
    color: '#ffffff',
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#3F4B5C',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'collum',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  noImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  noImageText: {
    color: '#fff',
  },
})
