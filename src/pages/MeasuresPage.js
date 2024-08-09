import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Slider from '@react-native-community/slider'
import { Button } from 'react-native-paper'

export default function MeasuresPage({ route, navigation }) {
  const { medidas } = route.params // Recebe os dados da FormPage

  // Estados para as medidas de Obra, Mancha e Moldura
  const [obraAltura, setObraAltura] = useState(0)
  const [obraLargura, setObraLargura] = useState(0)
  const [obraProfundidade, setObraProfundidade] = useState(0)
  const [obraDiametro, setObraDiametro] = useState(0)

  const [manchaAltura, setManchaAltura] = useState(0)
  const [manchaLargura, setManchaLargura] = useState(0)
  const [manchaProfundidade, setManchaProfundidade] = useState(0)
  const [manchaDiametro, setManchaDiametro] = useState(0)

  const [molduraAltura, setMolduraAltura] = useState(0)
  const [molduraLargura, setMolduraLargura] = useState(0)
  const [molduraProfundidade, setMolduraProfundidade] = useState(0)
  const [molduraDiametro, setMolduraDiametro] = useState(0)

  const handleSave = () => {
    // Salvar os dados e voltar para a FormPage
    navigation.navigate('AddFichaScreen', {
      obra: {
        altura: obraAltura,
        largura: obraLargura,
        profundidade: obraProfundidade,
        diametro: obraDiametro,
      },
      mancha: {
        altura: manchaAltura,
        largura: manchaLargura,
        profundidade: manchaProfundidade,
        diametro: manchaDiametro,
      },
      moldura: {
        altura: molduraAltura,
        largura: molduraLargura,
        profundidade: molduraProfundidade,
        diametro: molduraDiametro,
      },
    })
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Selecione as Medidas</Text>
        {/* Seção Mancha */}
        <View style={styles.medidas}>
          <Text style={styles.medidasTitle}>Mancha</Text>
          <Text style={styles.valueText}>{`Altura: ${manchaAltura.toFixed(
            1
          )} cm`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            step={0.1}
            value={manchaAltura}
            onValueChange={(sliderValue) => setManchaAltura(sliderValue)}
            minimumTrackTintColor="#3F4B5C"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#C70D0D"
          />
          <Text style={styles.valueText}>{`Largura: ${manchaLargura.toFixed(
            1
          )} cm`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            step={0.1}
            value={manchaLargura}
            onValueChange={(sliderValue) => setManchaLargura(sliderValue)}
            minimumTrackTintColor="#3F4B5C"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#C70D0D"
          />
          <Text
            style={styles.valueText}
          >{`Profundidade: ${manchaProfundidade.toFixed(1)} cm`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            step={0.1}
            value={manchaProfundidade}
            onValueChange={(sliderValue) => setManchaProfundidade(sliderValue)}
            minimumTrackTintColor="#3F4B5C"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#C70D0D"
          />
          <Text style={styles.valueText}>{`Diâmetro: ${manchaDiametro.toFixed(
            1
          )} cm`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            step={0.1}
            value={manchaDiametro}
            onValueChange={(sliderValue) => setManchaDiametro(sliderValue)}
            minimumTrackTintColor="#3F4B5C"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#C70D0D"
          />
        </View>


        {/* Seção Obra */}
        <View style={styles.medidas}>
          <Text style={styles.medidasTitle}>Obra</Text>
          <Text style={styles.valueText}>{`Altura: ${obraAltura.toFixed(
            1
          )} cm`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            step={0.1}
            value={obraAltura}
            onValueChange={(sliderValue) => setObraAltura(sliderValue)}
            minimumTrackTintColor="#3F4B5C"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#C70D0D"
          />
          <Text style={styles.valueText}>{`Largura: ${obraLargura.toFixed(
            1
          )} cm`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            step={0.1}
            value={obraLargura}
            onValueChange={(sliderValue) => setObraLargura(sliderValue)}
            minimumTrackTintColor="#3F4B5C"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#C70D0D"
          />
          <Text
            style={styles.valueText}
          >{`Profundidade: ${obraProfundidade.toFixed(1)} cm`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            step={0.1}
            value={obraProfundidade}
            onValueChange={(sliderValue) => setObraProfundidade(sliderValue)}
            minimumTrackTintColor="#3F4B5C"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#C70D0D"
          />
          <Text style={styles.valueText}>{`Diâmetro: ${obraDiametro.toFixed(
            1
          )} cm`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            step={0.1}
            value={obraDiametro}
            onValueChange={(sliderValue) => setObraDiametro(sliderValue)}
            minimumTrackTintColor="#3F4B5C"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#C70D0D"
          />
        </View>


        {/* Seção Moldura */}
        <View style={styles.medidas}>
          <Text style={styles.medidasTitle}>Moldura</Text>
          <Text style={styles.valueText}>{`Altura: ${molduraAltura.toFixed(
            1
          )} cm`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            step={0.1}
            value={molduraAltura}
            onValueChange={(sliderValue) => setMolduraAltura(sliderValue)}
            minimumTrackTintColor="#3F4B5C"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#C70D0D"
          />
          <Text style={styles.valueText}>{`Largura: ${molduraLargura.toFixed(
            1
          )} cm`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            step={0.1}
            value={molduraLargura}
            onValueChange={(sliderValue) => setMolduraLargura(sliderValue)}
            minimumTrackTintColor="#3F4B5C"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#C70D0D"
          />
          <Text
            style={styles.valueText}
          >{`Profundidade: ${molduraProfundidade.toFixed(1)} cm`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            step={0.1}
            value={molduraProfundidade}
            onValueChange={(sliderValue) => setMolduraProfundidade(sliderValue)}
            minimumTrackTintColor="#3F4B5C"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#C70D0D"
          />
          <Text style={styles.valueText}>{`Diâmetro: ${molduraDiametro.toFixed(
            1
          )} cm`}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            step={0.1}
            value={molduraDiametro}
            onValueChange={(sliderValue) => setMolduraDiametro(sliderValue)}
            minimumTrackTintColor="#3F4B5C"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#C70D0D"
          />
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    marginBottom: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#3F4B5C',
    textAlign: 'center',
    marginTop: 60,
  },
  medidas: {
    width: '95%',
    marginBottom: 20,
    backgroundColor: '#EAECEE',
    borderRadius: 10,
    padding: 20,
  },
  medidasTitle: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  slider: {
    width: '100%',
    height: 60,
  },
  valueText: {
    fontSize: 18,
    marginVertical: 10,
  },
  button: {
    width: 250,
    height: 50,
    marginTop: 40,
    fontSize: 28,
  },
})
