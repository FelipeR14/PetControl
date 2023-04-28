import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeBaseProvider } from "native-base";

//Screens

import petcontrol from './screens/Login/petcontrol';
import Login from './screens/Login/Login';
import Register from './screens/Login/Register';

import AvisosScreen from './screens/Avisos/AvisosScreen';
import MapScreen from './screens/Mapa/MapScreen';
import HomeScreen from './screens/Inicio/HomeScreen';
import ChatScreen from './screens/ChatDoc/ChatScreen';
import ConfigScreen from './screens/Confi/ConfigScreen';

import ChatDoc from './screens/ChatDoc/ChatDoc';
import Baño from './screens/Inicio/Menu/Baño';
import Cartilla from './screens/Inicio/Menu/Cartilla';
import MenuMasc from './screens/Inicio/Menu/MenuMasc';
import Receta from './screens/Inicio/Menu/Receta';
import Revisión from './screens/Inicio/Menu/Revisión';


//Screen names
const avisosName = "Avisos";
const mapName = "Mapa";
const homeName = "Inicio";
  const menumascName = "Menú";
  const bañoName = "Baño";
  const revisiónName = "Revisión";
  const cartillaName = "Cartilla";
  const RecetaName = "Receta";
const chatName = "Chat";
const configName = "Configuración";

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Avisos') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Mapa') {
              iconName = focused ? 'location' : 'location-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'paper-plane' : 'paper-plane-outline';
            } else if (route.name === 'Configuración') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={'20px'} color={color} />;

          },
          tabBarActiveTintColor: '#1AB28E',
          tabBarInactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 15, },
          style: { padding: 10, height: 70, },
          headerStyle: { backgroundColor: '#1AB28E' },
          headerTintColor: '#fff'
        })}
      >
        <Tab.Screen name={avisosName} component={AvisosScreen} />
        <Tab.Screen name={mapName} component={MapScreen} />
        <Tab.Screen name={homeName} component={Login} />
        <Tab.Screen name={chatName} component={ChatScreen} />
        <Tab.Screen name={configName} component={ConfigScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


