import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function CurriculosCriados() {
  const [curriculos, setCurriculos] = useState([]);
  const navigation = useNavigation();

  // Carregar dados persistidos ao montar o componente
  useEffect(() => {
    loadCurriculos();
  }, []);

  // Salvar currículos no AsyncStorage
  const saveCurriculos = async (data) => {
    try {
      await AsyncStorage.setItem('@curriculos', JSON.stringify(data));
    } catch (error) {
      console.error('Erro ao salvar currículos:', error);
    }
  };

  // Carregar currículos do AsyncStorage
  const loadCurriculos = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@curriculos');
      if (storedData) {
        setCurriculos(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Erro ao carregar currículos:', error);
    }
  };

  // Adicionar novo currículo
  const addCurriculo = (data) => {
    const updatedCurriculos = [...curriculos, { ...data, id: Date.now().toString() }];
    setCurriculos(updatedCurriculos);
    saveCurriculos(updatedCurriculos); // Atualizar AsyncStorage
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={curriculos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('VisualizarCurriculo', { curriculo: item })}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Criar Novo Currículo"
        onPress={() => navigation.navigate('CriarCurriculo', { onSave: addCurriculo })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
