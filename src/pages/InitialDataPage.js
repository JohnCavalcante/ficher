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

export default function InitialDataPage({ route, navigation }) {
  const { initialData } = route.params || {}
  const { addFicha } = useContext(FichaContext)
  const [registro, setRegistro] = useState(initialData?.registro || '')
  const [classificacao, setClassificacao] = useState(
    initialData?.classificacao || ''
  )
  const [subclassificacao, setSubclassificacao] = useState(
    initialData?.subclassificacao || ''
  )
  const [colecao, setColecao] = useState(initialData?.colecao || '')
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [image, setImage] = useState(null)



  useEffect(() => {
    if (route.params?.titulo) {
      setTitulo(route.params.titulo)
    }
    if (route.params?.autor) {
      setAutor(route.params.autor)
    }
    if (route.params?.image) {
      setImage(route.params.image)
    }
  }, [route.params])

  useEffect(() => {
    ;(async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        alert(
          'Desculpe, precisamos da permissão da biblioteca de mídia para isso funcionar!'
        )
      }
    })()
  }, [])

  const handleSubmit = () => {
    const ficha = {
      id: Date.now().toString(),
      titulo,
      autor,
      image,

    }
    addFicha(ficha)
    navigation.navigate('FichasListScreen')
  }

  useEffect(() => {
    ;(async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        alert(
          'Desculpe, precisamos da permissão da biblioteca de mídia para isso funcionar!'
        )
      }
    })()
  }, [])

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
      const data = {
        registro,
        titulo,
        autor,
        classificacao,
        subclassificacao,
        colecao,
        image,
      }
      addFicha(data)
      navigation.navigate('FichasListScreen', { initialData: data, image })
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
            
            <Text style={styles.header}>Preencha os dados </Text>
            <TextInput
              style={styles.input}
              label="N° de Registro"
              placeholder=""
              value={registro}
              onChangeText={setRegistro}
              mode="outlined" // ou "flat" para diferentes estilos
              theme={{
                colors: {
                  primary: '#3F4B5C',
                  underlineColor: 'transparent',
                },
              }} // cor principal e underline transparente
              outlineColor="transparent" // cor do contorno
            />
            <TextInput
              style={styles.input}
              label="Título da Obra"
              value={titulo}
              onChangeText={setTitulo}
              mode="outlined" // ou "flat" para diferentes estilos
              theme={{
                colors: {
                  primary: '#3F4B5C',
                  underlineColor: 'transparent',
                },
              }} // cor principal e underline transparente
              outlineColor="transparent" // cor do contorno
            />
            <TextInput
              style={styles.input}
              label="Autor"
              placeholder=""
              value={autor}
              onChangeText={setAutor}
              mode="outlined" // ou "flat" para diferentes estilos
              theme={{
                colors: {
                  primary: '#3F4B5C',
                  underlineColor: 'transparent',
                },
              }} // cor principal e underline transparente
              outlineColor="transparent" // cor do contorno
            />
            <TextInput
              style={styles.input}
              label="Classificação"
              value={classificacao}
              onChangeText={setClassificacao}
              mode="outlined" // ou "flat" para diferentes estilos
              theme={{
                colors: {
                  primary: '#3F4B5C',
                  underlineColor: 'transparent',
                },
              }} // cor principal e underline transparente
              outlineColor="transparent" // cor do contorno
            />
            <TextInput
              style={styles.input}
              label="Subclassificação"
              value={subclassificacao}
              onChangeText={setSubclassificacao}
              mode="outlined" // ou "flat" para diferentes estilos
              theme={{
                colors: {
                  primary: '#3F4B5C',
                  underlineColor: 'transparent',
                },
              }} // cor principal e underline transparente
              outlineColor="transparent" // cor do contorno
            />
            <TextInput
              style={styles.input}
              label="Coleção"
              placeholder=""
              value={colecao}
              onChangeText={setColecao}
              mode="outlined" // ou "flat" para diferentes estilos
              theme={{
                colors: {
                  primary: '#3F4B5C',
                  underlineColor: 'transparent',
                },
              }} // cor principal e underline transparente
              outlineColor="transparent" // cor do contorno
            />

            <Button
              mode="contained"
              buttonColor="#B21601"
              onPress={handleSave}
              style={styles.button}
            >
              Salvar
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
    flexGrow: 1, // Permite que o ScrollView cresça para conter todos os seus filhos
    justifyContent: 'center', // Centraliza os elementos verticalmente
    alignItems: 'center', // Centraliza os elementos horizontalmente
  },
  inner: {
    padding: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16, // Adiciona margem ao redor do contêiner
    width: '100%', // Garante que o conteúdo ocupe toda a largura
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
    width: '80%', // Ajusta a largura dos inputs para ficarem centralizados
    textAlign: 'center', // Centraliza o texto dentro do TextInput
  },

  button: {
    width: 250,
    height: 50,
    marginTop: 40,
    fontSize: 28,
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
