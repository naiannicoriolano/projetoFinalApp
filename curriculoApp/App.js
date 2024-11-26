import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import CriarCurriculo from './src/screens/CriarCurriculo';
import VisualizarCurriculo from './src/screens/VisualizarCurriculo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CurriculosCriados">
        <Stack.Screen name="CurriculosCriados" component={Home} options={{ title: "Home" }} />
        <Stack.Screen name="CriarCurriculo" component={CriarCurriculo} options={{ title: "Criar Currículo" }} />
        <Stack.Screen name="VisualizarCurriculo" component={VisualizarCurriculo} options={{ title: "Visualizar Currículo" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}