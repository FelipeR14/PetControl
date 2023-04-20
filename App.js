import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeBaseProvider } from "native-base";

// Screens
import AvisosScreen from './screens/Avisos/AvisosScreen';
import MapScreen from './screens/Mapa/MapScreen';
import HomeScreen from './screens/Inicio/HomeScreen';
import ChatScreen from './screens/ChatDoc/ChatScreen';
import ConfigScreen from './screens/Confi/ConfigScreen';

//Screen names
const avisosName = "Avisos";
const mapName = "Mapa";
const homeName = "Inicio";
const chatName = "Chat";
const configName = "Configuración";

const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let color = '#1AB28E';

          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Avisos') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Mapa') {
            iconName = focused ? 'location' : 'location-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Configuración') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={'20px'} color={color} />;
        },
        activeTintColor: '#1AB28E',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 15 },
        style: { padding: 10, height: 70, }
      })}
    >
      <Tab.Screen name={avisosName} component={AvisosScreen} />
      <Tab.Screen name={mapName} component={MapScreen} />
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={chatName} component={ChatScreen} /> 
      <Tab.Screen name={configName} component={ConfigScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <TabNav/>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}


