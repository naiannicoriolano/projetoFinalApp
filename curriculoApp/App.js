import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import CriarCurriculo from './src/screens/CriarCurriculo';
import VisualizarCurriculo from './src/screens/VisualizarCurriculo';
import SplashScreenView from './SplashScreenView';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isShowingSplash, setIsShowingSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowingSplash(false);
    }, 3000); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    isShowingSplash ? (
      <SplashScreenView />
    ) : (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CurriculosCriados">
          <Stack.Screen
            name="CurriculosCriados"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CriarCurriculo"
            component={CriarCurriculo}
            options={{ title: '', 
            headerBackTitle: 'Voltar', 
          }}
            
          />
          <Stack.Screen
            name="VisualizarCurriculo"
            component={VisualizarCurriculo}
            options={{ title: '' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}
