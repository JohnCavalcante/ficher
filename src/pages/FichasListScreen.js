import React, { useContext } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { Card, Button, Divider } from 'react-native-paper'
import { IconButton, MD3Colors } from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { FichaContext } from '/Users/jhon1/OneDrive/Área de Trabalho/ficherApp/context/FichaContext'
export default function ListPage({ route, navigation }) {
  const { fichas, removeFicha } = useContext(FichaContext)
  const { classificacao, registro } = route.params || {}




  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Fichas cadastradas</Text>
        <FlatList
          data={fichas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.Cardbox}>
                {item.image ? (
                  <Image source={{ uri: item.image }} style={styles.image} />
                ) : (
                  <View style={styles.noImage}>
                    <Text style={styles.noImageText}>Sem Imagem</Text>
                  </View>
                )}
                <View style={styles.textContainer}>
                  <Text
                    style={styles.CardTitle}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item.titulo}
                  </Text>
                  <Divider />

                  <Text
                    style={styles.CardSubtitle}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item.autor}
                  </Text>
                  <Text style={styles.text}> {classificacao}</Text>

                  <Text style={styles.text}>{registro}</Text>
                </View>
              </View>
              <Divider />

              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                  onPress={() =>
                    navigation.navigate('EditFichaPage', { fichaId: item.id })
                  }
                >
                  <IconButton
                    icon="file-document-edit-outline"
                    iconColor={MD3Colors.error50}
                    size={20}
                    onPress={() =>
                      navigation.navigate('EditFichaPage', { fichaId: item.id })
                    }
                  />
                  <Text style={{ marginLeft: 0 }}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                  onPress={() => removeFicha(item.id)}
                >
                  <IconButton
                    icon="file-remove-outline"
                    iconColor={MD3Colors.error50}
                    size={20}
                    onPress={() => removeFicha(item.id)}
                  />
                  <Text style={{ marginLeft: 8 }}>Excluir</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    textAlign: 'left',
                  }}
                  onPress={() => console.log('Icon and Text Pressed')}
                >
                  <IconButton
                    icon="file-eye-outline"
                    iconColor={MD3Colors.error50}
                    size={20}
                    onPress={() => console.log('Pressed')}
                  />
                  <Text style={{ marginLeft: 8 }}>Ver</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: '#F4F3F1',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#3F4B5C',
    textAlign: 'center',
    marginTop: -50,
  },
  card: {
    flexDirection: 'Collum',
    justifyContent: 'flex-start',
    alignContent: 'flex-end',
    margin: 10,
    padding: 5,
    overflow: 'hidden',
    borderColor: '#ccc',
    textAlign: 'left',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.84,
    elevation: 0.1,
  },
  Cardbox: {
    flexDirection: 'row',
  },
  textContainer: {
    textAlign: 'left',
    flexDirection: 'column',
    marginLeft: 10,
    maxWidth: '50%', // Limita a largura do contêiner de texto
  },
  CardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B21601',
    marginTop: 10,
    marginBottom: 7,
  },
  CardSubtitle: {
    fontSize: 18,
    color: '#000',
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: 160,
    height: 180,
    borderRadius: 4,
  },
  noImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  noImageText: {
    color: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'center',
    padding: 6,
  },
})
