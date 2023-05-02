import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import AvisosScreen from '../Avisos/AvisosScreen';
import MapScreen from '../Mapa/MapScreen';
import HomeScreen from '../Inicio/HomeScreen';
import ChatScreen from '../ChatDoc/ChatScreen';
import ConfigScreen from '..//Confi/ConfigScreen';


import MenuMasc from '../Inicio/Menu/MenuMasc';
import Baño from '../Inicio/Menu/Baño';
import Revisión from '../Inicio/Menu/Revisión';
import Cartilla from '../Inicio/Menu/Cartilla';
import Receta from '../Inicio/Menu/Receta';

const HomeStack = createNativeStackNavigator();

function HStack(){
  return (
    <HomeStack.Navigator initialRouteName="InicioScreen" screenOptions={({headerShown: false})}>
      <HomeStack.Screen  name="InicioScreen" component={HomeScreen} />
      <HomeStack.Screen  name="Menú" component={MenuMasc} />
      <HomeStack.Screen  name="Baño" component={Baño}/>
      <HomeStack.Screen  name="Revisión" component={Revisión}/>
      <HomeStack.Screen  name="Cartilla" component={Cartilla}/>
      <HomeStack.Screen  name="Receta" component={Receta}/>
    </HomeStack.Navigator>
    
  )
}

import ChatDoc from '../ChatDoc/ChatDoc';

const ChatStack = createNativeStackNavigator();

function ChStack(){
  return (
    <ChatStack.Navigator initialRouteName="ChatScreen" screenOptions={({headerShown: false})}>
      <ChatStack.Screen  name="ChatScreen" component={ChatScreen} />
      <ChatStack.Screen  name="ChatDoc" component={ChatDoc} />
    </ChatStack.Navigator>
    
  )
}

const Tab = createBottomTabNavigator();

export default function Tabnav() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
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
        <Tab.Screen name="Avisos" component={AvisosScreen} />
        <Tab.Screen name="Mapa" component={MapScreen} />
        <Tab.Screen name="Home" component={HStack} />
        <Tab.Screen name="Chat" component={ChStack} />
        <Tab.Screen name="Configuración" component={ConfigScreen} />
      </Tab.Navigator>
  );
}