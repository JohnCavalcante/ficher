import React, { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainTabs')
    }, 3000) // 3 segundos

    return () => clearTimeout(timer)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Image
        source={require('../pages/welcome.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '80%',
    height: '80%',
  },
})

export default WelcomeScreen
