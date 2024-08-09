import React, { useState, useContext, useEffect } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { FichaContext } from '/Users/jhon1/OneDrive/Área de Trabalho/ficherApp/context/FichaContext'

export default function EditPage({ route, navigation }) {
  const { fichas, updateFicha } = useContext(FichaContext)
  const { fichaId } = route.params

  const ficha = fichas.find((f) => f.id === fichaId)
  const [Autor, setAutor] = useState(ficha?.name || '')
  const [titulo, setTitulo] = useState(ficha?.description || '')
  const [image, setImage] = useState(ficha?.image || null)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  const handleSubmit = () => {
    const updatedFicha = { id: fichaId, Autor, titulo, image }
    updateFicha(updatedFicha)
    navigation.navigate('FichasListScreen')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Ficha</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={Autor}
        onChangeText={setAutor}
      />

      <Button title="Escolher Imagem" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
  },
})