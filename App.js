import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'


import { FichaProvider } from './context/FichaContext'


import WelcomeScreen from './src/pages/WelcomeScreen'
import HomeScreen from './src/pages/homeScreen'
import AddFichaScreen from './src/pages/AddFichaScreen'
import FichasListScreen from './src/pages/FichasListScreen'
import EditPage from './src/pages/EditFicha'
import RevisarFicha from './src/pages/RevisarFicha'; 
import MeasuresPage from './src/pages/MeasuresPage' 
import InitialDataPage from './src/pages/InitialDataPage' 
import SecondaryDataPage from './src/pages/SecondaryDataPage' 
import EditFichaPage from './src/pages/EditFichaPage' 



SecondaryDataPage




const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#B21601',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          height:55,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={'#3F4B5C'} />
          ),
        }}
      />
      <Tab.Screen
        name="AddFicha"
        component={AddFichaScreen}
        options={{
          tabBarLabel: 'Nova ficha',
          tabBarIcon: ({ size, color }) => (
            <Feather
              name="plus-square"
              size={28}
              color={'#3F4B5C'}
              backgroundColor={''}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FichasList"
        component={FichasListScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="file-text" size={size} color={'#3F4B5C'} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <FichaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="homeScreen"
            component={HomeScreen}
            options={{ title: 'Menu Principal' }}
          />
          <Stack.Screen
            name="AddFichaScreen"
            component={AddFichaScreen}
            options={
              ({ title: 'Formulário de Fichas' }, { headerShown: false })
            }
          />
          <Stack.Screen
            name="FichasListScreen"
            component={FichasListScreen}
            options={{ title: 'Lista de Fichas' }}
          />
          <Stack.Screen
            name="EditPage"
            component={EditPage}
            options={{ title: 'Editar Ficha' }}
          />
          <Stack.Screen
            name="RevisarFicha"
            component={RevisarFicha}
            options={{ title: 'Revisar Ficha' }}
          />
          <Stack.Screen
            name="MeasuresPage"
            component={MeasuresPage}
            options={{ title: 'Medidas' }}
          />
          <Stack.Screen
            name="InitialDataPage"
            component={InitialDataPage}
            options={{ title: 'Dados iniciais' }}
          />
          <Stack.Screen
            name="SecondaryDataPage"
            component={SecondaryDataPage}
            options={{ title: 'Dados secundário' }}
          />
          <Stack.Screen
            name="EditFichaPage"
            component={EditFichaPage}
            options={{ title: 'Editar' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FichaProvider>
  )
}