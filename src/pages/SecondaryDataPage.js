import React, { useState } from 'react'
import { View, Text, Image,  StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {
  Button, TextInput, Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper'


export default function SecondaryDataPage({ route, navigation }) {
  const { secondaryData } = route.params || {}
  const [material, setMaterial] = useState(
    secondaryData ? secondaryData.material : ''
  )
  const [denominacao, setDenominacao] = useState(
    secondaryData ? secondaryData.denominacao : ''
  )
  const [localizacao, setLocalizacao] = useState(
    secondaryData ? secondaryData.localizacao : ''
  )

  const handleSave = () => {
    const data = { material, denominacao, localizacao }
    navigation.navigate('AddFichaScreen', { secondaryData: data })
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Image
          source={require('../Image/amphora.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Preencha os dados </Text>
        <TextInput
          style={styles.input}
          label="Material/Técnica/Suporte"
          placeholder=""
          value={material}
          onChangeText={setMaterial}
          mode="outlined" // ou "flat" para diferentes estilos
          theme={{
            colors: { primary: '#B21601', underlineColor: 'transparent' },
          }} // cor principal e underline transparente
          outlineColor="#3F4B5C" // cor do contorno
        />
        <TextInput
          style={styles.input}
          label="Denominação"
          placeholder=""
          value={denominacao}
          onChangeText={setDenominacao}
          mode="outlined" // ou "flat" para diferentes estilos
          theme={{
            colors: { primary: '#B21601', underlineColor: 'transparent' },
          }} // cor principal e underline transparente
          outlineColor="#3F4B5C" // cor do contorno
        />
        <TextInput
          style={styles.input}
          label="Localização"
          value={localizacao}
          onChangeText={setLocalizacao}
          mode="outlined" // ou "flat" para diferentes estilos
          theme={{
            colors: { primary: '#B21601', underlineColor: 'transparent' },
          }} // cor principal e underline transparente
          outlineColor="#3F4B5C" // cor do contorno
        />

        <Button
          mode="contained"
          buttonColor="#B21601"
          onPress={handleSave}
          style={styles.button}
        >
          Salvar
        </Button>
      </View>
    </ScrollView>
  )
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5F6A79', // cor principal usada em todo o app
    accent: '#03dac4',
  },
}


const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F4F3F1',
  },
  image: {
    width: '30%',
    marginTop: -270,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#3F4B5C',
    textAlign: 'center',
    marginTop: -170,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  button: {
    width: 150,
    marginTop: 25,
  },
})
