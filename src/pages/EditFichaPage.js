import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { Button, TextInput, IconButton } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import { FichaContext } from '/Users/jhon1/OneDrive/Área de Trabalho/ficherApp/context/FichaContext'

export default function EditFichaPage({ route, navigation }) {
  const { fichaId } = route.params || {} // Recebe o ID da ficha que será editada
  const { fichas, updateFicha } = useContext(FichaContext) // Obtém a função de atualização do contexto

  const [ficha, setFicha] = useState(null)
  const [registro, setRegistro] = useState('')
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [classificacao, setClassificacao] = useState('')
  const [subclassificacao, setSubclassificacao] = useState('')
  const [colecao, setColecao] = useState('')
  const [image, setImage] = useState(null)

useEffect(() => {
  const fichaToEdit = fichas.find((item) => item.id === fichaId)
  if (fichaToEdit) {
    setFicha(fichaToEdit)
    setRegistro(fichaToEdit.registro)
    setTitulo(fichaToEdit.titulo)
    setAutor(fichaToEdit.autor)
    setClassificacao(fichaToEdit.classificacao)
    setSubclassificacao(fichaToEdit.subclassificacao)
    setColecao(fichaToEdit.colecao)
    setImage(fichaToEdit.image)
  }
}, [fichaId, fichas])


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      saveToPhotos: true,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const handleSave = () => {
    const updatedFicha = {
      ...ficha,
      registro,
      titulo,
      autor,
      classificacao,
      subclassificacao,
      colecao,
      image,
    }

    updateFicha(fichaId, updatedFicha) // Atualiza a ficha no contexto
    navigation.navigate('FichasListScreen') // Navega de volta para a lista
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.inner}>
            <View style={styles.areaImagem}>
              {image && (
                <Image source={{ uri: image }} style={styles.imageDestaque} />
              )}
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.buttonPhoto}
                  onPress={pickImage}
                >
                  <IconButton icon="camera" onPress={pickImage} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonPhoto}
                  onPress={pickImage}
                >
                  <IconButton icon="image" onPress={pickImage} />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.header}>Editar Ficha</Text>
            <TextInput
              style={styles.input}
              label="N° de Registro"
              value={registro}
              onChangeText={setRegistro}
              mode="outlined"
              theme={{
                colors: {
                  primary: '#3F4B5C',
                  underlineColor: 'transparent',
                },
              }}
              outlineColor="transparent"
            />
            <TextInput
              style={styles.input}
              label="Título da Obra"
              value={titulo}
              onChangeText={setTitulo}
              mode="outlined"
              theme={{
                colors: {
                  primary: '#3F4B5C',
                  underlineColor: 'transparent',
                },
              }}
              outlineColor="transparent"
            />
            <TextInput
              style={styles.input}
              label="Autor"
              value={autor}
              onChangeText={setAutor}
              mode="outlined"
              theme={{
                colors: {
                  primary: '#3F4B5C',
                  underlineColor: 'transparent',
                },
              }}
              outlineColor="transparent"
            />
            <TextInput
              style={styles.input}
              label="Classificação"
              value={classificacao}
              onChangeText={setClassificacao}
              mode="outlined"
              theme={{
                colors: {
                  primary: '#3F4B5C',
                  underlineColor: 'transparent',
                },
              }}
              outlineColor="transparent"
            />
            <TextInput
              style={styles.input}
              label="Subclassificação"
              value={subclassificacao}
              onChangeText={setSubclassificacao}
              mode="outlined"
              theme={{
                colors: {
                  primary: '#3F4B5C',
                  underlineColor: 'transparent',
                },
              }}
              outlineColor="transparent"
            />
            <TextInput
              style={styles.input}
              label="Coleção"
              value={colecao}
              onChangeText={setColecao}
              mode="outlined"
              theme={{
                colors: {
                  primary: '#3F4B5C',
                  underlineColor: 'transparent',
                },
              }}
              outlineColor="transparent"
            />

            <Button
              mode="contained"
              buttonColor="#B21601"
              onPress={handleSave}
              style={styles.button}
            >
              Salvar Alterações
            </Button>
            <View style={styles.extraSpace} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    padding: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    width: '100%',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#3F4B5C',
  },
  image: {
    width: '30%',
    marginTop: -50,
  },
  areaImagem: {
    width: '90%',
    height: '25%',
    marginTop: 150,
    marginBottom: 30,
    borderRadius: 19,
    backgroundColor: '#EAECEE',
    justifyContent: 'center',
  },
  imageDestaque: {
    width: '100%',
    height: '100%',
    borderRadius: 19,
  },
  buttons: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    position: 'absolute',
    top: 180,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: 1,
  },
  button: {
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '95%',
    height: 50,
    marginBottom: 25,
    fontSize: 18,
    backgroundColor: '#EAECEE',
    width: '80%',
    textAlign: 'center',
  },
  buttonPhoto: {
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 8,
    flexDirection: 'row',
    marginTop: 0,
    alignItems: 'center',
  },
  extraSpace: {
    height: 250,
  },
})
