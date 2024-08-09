import React, { useState, useContext, useEffect, useRef } from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native'

import * as ImagePicker from 'expo-image-picker'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Slider from '@react-native-community/slider'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { IconButton } from 'react-native-paper'

import {
  Provider as PaperProvider,
  TextInput as PaperTextInput,
} from 'react-native-paper'

import { FichaContext } from '/Users/jhon1/OneDrive/Área de Trabalho/ficherApp/context/FichaContext'

export default function FormPage({ route }) {
  const { addFicha } = useContext(FichaContext)
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const { image } = route.params || {} // Garantindo que route.params não seja undefined

  const navigation = useNavigation()
  const [medidas, setMedidas] = useState({
    obra: { altura: 0, largura: 0, profundidade: 0, diametro: 0 },
    mancha: { altura: 0, largura: 0, profundidade: 0, diametro: 0 },
    moldura: { altura: 0, largura: 0, profundidade: 0, diametro: 0 },
  })

  useEffect(() => {
    if (route.params?.medidas) {
      setMedidas(route.params.medidas)
    }
  }, [route.params?.medidas])

  const [initialData, setInitialData] = useState({
    registro: '',
    titulo: '',
    autor: '',
    classificacao: '',
    subclassificacao: '',
    colecao: '',
  })

  const [secondaryData, setSecondaryData] = useState({
    material: '',
    denominacao: '',
    localizacao: '',
  })

  useEffect(() => {
    if (route.params) {
      const { initialData, secondaryData } = route.params
      if (initialData) setInitialData(initialData)
      if (secondaryData) setSecondaryData(secondaryData)
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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      saveToPhotos: true,
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  useEffect(() => {
    if (route.params?.title) {
      setTitulo(route.params.titulo)
    }
    if (route.params?.author) {
      setAutor(route.params.autor)
    }
    if (route.params?.image) {
      setImage(route.params.image)
    }
  }, [route.params])

  const handleSave = () => {
    const ficha = { id: Date.now().toString(), titulo, autor, image }
    addFicha(ficha)
    navigation.navigate('FichasListScreen')
  }

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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Preencha os dados </Text>

      <View style={styles.Cards}>
        <View style={styles.cardsLeft}>
          <View style={styles.areaImagem}>
            {image && <Image source={{ uri: image }} style={styles.image} />}
          </View>

          <View style={styles.cardViewLeft}>
            <View style={styles.miniCardLeft}>
              <IconButton icon="ruler-square" iconColor="white" size={30} />
              <Text style={styles.titleCard}>Dimensões</Text>
            </View>
            <Text style={styles.cardText}>
              Obra - Altura:
              {medidas.obra.altura} cm, Largura: {medidas.obra.largura} cm,
              Profundidade: {medidas.obra.profundidade} cm, Diâmetro:
              {medidas.obra.diametro} cm
            </Text>
            <Text style={styles.cardText}>
              Mancha - Altura: {medidas.mancha.altura} cm, Largura:{' '}
              {medidas.mancha.largura} cm, Profundidade:{' '}
              {medidas.mancha.profundidade} cm, Diâmetro:{' '}
              {medidas.mancha.diametro} cm
            </Text>
            <Text style={styles.cardText}>
              Moldura - Altura: {medidas.moldura.altura} cm, Largura:{' '}
              {medidas.moldura.largura} cm, Profundidade:{' '}
              {medidas.moldura.profundidade} cm, Diâmetro:{' '}
              {medidas.moldura.diametro} cm
            </Text>

            <IconButton
              icon="file-document-edit"
              iconColor="white"
              size={30}
              onPress={() => navigation.navigate('MeasuresPage', { medidas })}
            />
          </View>
          <View style={styles.miniCardView3}>
            <View style={styles.textCardRight}>
              <IconButton icon="map" iconColor="white" size={20} />
              <Text style={styles.titleCard}>Localização</Text>
            </View>
            <Text
              style={styles.SubtitleContainer}
            >{`${secondaryData.localizacao}`}</Text>
          </View>
        </View>

        <View style={styles.cardRight}>
          <View style={styles.cardView}>
            <Text style={styles.titleCard}>Título</Text>
            <Text
              style={styles.SubtitleContainer}
            >{` ${initialData.titulo}`}</Text>
            <Text style={styles.titleCard}>Autor</Text>

            <Text
              style={styles.SubtitleContainer}
            >{`${initialData.autor}`}</Text>

            <Text style={styles.titleCard}>Classificação</Text>
            <Text style={styles.SubtitleContainer}>
              {`${initialData.classificacao}`}
            </Text>
            <Text style={styles.titleCard}>Subclassificação</Text>
            <Text
              style={styles.SubtitleContainer}
            >{`${initialData.subclassificacao}`}</Text>

            <Text style={styles.titleCard}>Coleção</Text>
            <Text
              style={styles.SubtitleContainer}
            >{`${initialData.colecao}`}</Text>
            <IconButton
              icon="file-document-edit"
              iconColor="white"
              size={30}
              onPress={() =>
                navigation.navigate('InitialDataPage', { initialData })
              }
            />
          </View>

          <View style={styles.miniCardView1}>
            <Text style={styles.titleCard}>Material / Técnica Suporte</Text>
            <Text
              style={styles.SubtitleContainer}
            >{`${secondaryData.material}`}</Text>
            <Text style={styles.titleCard}>Denominação</Text>
            <Text
              style={styles.SubtitleContainer}
            >{`${secondaryData.denominacao}`}</Text>
            <Text style={styles.titleCard}>Estado de conservação</Text>
            <Text
              style={styles.SubtitleContainer}
            >{`${secondaryData.localizacao}`}</Text>
            <IconButton
              icon="file-document-edit"
              iconColor="white"
              size={30}
              onPress={() =>
                navigation.navigate('SecondaryDataPage', { secondaryData })
              }
            />
          </View>
          <View style={styles.miniCardView3}>
            <View style={styles.textCardRight}>
              <IconButton icon="file" iconColor="white" size={20} />
              <Text style={styles.titleCard}>N° Registro</Text>
            </View>
            <Text
              style={styles.SubtitleContainer}
            >{`${initialData.registro}`}</Text>
          </View>
        </View>
      </View>

      <View style={styles.imageInfoArea}>
        <Text style={styles.title}>Fotografias</Text>

        <View style={styles.imageLegendas}>
          <View style={styles.imageInfo}>
            <Text style={styles.titleLegenda}>Leganda 1 </Text>
            {image !== null && (
              <Image source={{ uri: image }} style={styles.image} />
            )}
          </View>

          <View style={styles.imageInfo}>
            <Text style={styles.titleLegenda}>Leganda 2 </Text>
            {image !== null && (
              <Image source={{ uri: image }} style={styles.image} />
            )}
          </View>
        </View>
        <View style={styles.imageLegendas}>
          <View style={styles.imageInfo}>
            <Text style={styles.titleLegenda}>Leganda 3 </Text>
            {image !== null && (
              <Image source={{ uri: image }} style={styles.image} />
            )}
          </View>

          <View style={styles.imageInfo}>
            <Text style={styles.titleLegenda}>Leganda 4 </Text>
            {image !== null && (
              <Image source={{ uri: image }} style={styles.image} />
            )}
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('MeasuresPage', { medidas })}
      >
        <Text style={styles.cardTitle}>Medidas</Text>
        <Text style={styles.cardText}>
          Obra - Altura: {medidas.obra.altura.toFixed(1)} cm, Largura:{' '}
          {medidas.obra.largura.toFixed(1)} cm, Profundidade:{' '}
          {medidas.obra.profundidade.toFixed(1)} cm, Diâmetro:{' '}
          {medidas.obra.diametro.toFixed(1)} cm
        </Text>
        <Text style={styles.cardText}>
          Mancha - Altura: {medidas.mancha.altura.toFixed(1)} cm, Largura:{' '}
          {medidas.mancha.largura.toFixed(1)} cm, Profundidade:{' '}
          {medidas.mancha.profundidade.toFixed(1)} cm, Diâmetro:{' '}
          {medidas.mancha.diametro.toFixed(1)} cm
        </Text>
        <Text style={styles.cardText}>
          Moldura - Altura: {medidas.moldura.altura.toFixed(1)} cm, Largura:{' '}
          {medidas.moldura.largura.toFixed(1)} cm, Profundidade:{' '}
          {medidas.moldura.profundidade.toFixed(1)} cm, Diâmetro:{' '}
          {medidas.moldura.diametro.toFixed(1)} cm
        </Text>
      </TouchableOpacity>

      <Button title="Salvar" onPress={handleSubmit} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    backgroundColor: '#ffffff',
    marginTop: 60,
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'light',
    marginBottom: 0,
    color: '#3F4B5C',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3F4B5C',
  },

  areaImagem: {
    width: '100%',
    height: 375,
  },
  imageDestaque: {
    width: '100%',
    height: '90%',
    borderRadius: 19,
  },
  Cards: {
    flexDirection: 'row',
    gap: 14,
  },
  cardsLeft: {
    width: '48%',
  },
  cardRight: {
    width: '48%',
    alignItems: 'center',
    height: 760,
  },
  titleCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5,
  },

  tituloRegistro: {
    fontSize: 16,
    color: '#8FFF1F',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 13,
  },
  SubtitleContainer: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 0,
    textAlign: 'center',
  },

  miniCardView1: {
    backgroundColor: '#112224',
    width: '100%',
    borderRadius: 19,
    height: 305,
    marginBottom: 12,
    alignItems: 'center',
    padding: '7%',
  },

  miniCardView2: {
    backgroundColor: '#112224',
    width: '100%',
    borderRadius: 19,
    height: 280,
    marginBottom: 12,
    alignItems: 'center',
    padding: 20,
  },

  miniCardView3: {
    backgroundColor: '#112224',
    width: '100%',
    borderRadius: 19,
    height: 80,
    marginBottom: 12,
    alignItems: 'center',
  },

  cardViewLeft: {
    width: '100%',
    height: 305,
    backgroundColor: '#3F4B5C',
    alignItems: 'center',
    borderRadius: 19,
    marginBottom: 12,
    marginTop: -25,
  },

  miniCardLeft: {
    width: '100%',
    backgroundColor: '#3F4B5C',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 19,
    marginBottom: 12,
  },

  cardView: {
    backgroundColor: '#B21601',
    width: '100%',
    borderRadius: 19,
    height: 375,
    marginBottom: 12,
    alignItems: 'center',
  },

  textCardRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  TextInput: {
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  formButton: {
    backgroundColor: '#B21601',
    borderRadius: 10,
    fontSize: 2,
    fontFamily: '',
    width: '80%',
    padding: 10,
    alignItems: 'center',
  },

  buttons: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    position: 'absolute',
    top: 220,
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
  text: {
    color: '#FFF',
    fontSize: 12,
    margin: 0,
  },

  imageInfoArea: {},
  imageLegendas: {
    flexDirection: 'row',
    gap: 14,
    textAlign: 'center',
  },
  titleLegenda: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 10,
    alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#EAECEE',
    borderColor: '#EAECEE',
    color: '#040404',
    padding: 18,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
  },
  medidas: {
    padding: 20,
    backgroundColor: '#EAECEE',
    borderRadius: 20,
    fontSize: 25,
    color: '#3F4B5C',
    marginBottom: 30,
  },
  slider: {
    width: 300,
    height: 40,
    marginBottom: 20,
  },
  valueText: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    color: '#3F4B5C',
  },
})
