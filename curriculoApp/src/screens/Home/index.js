import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function CurriculosCriados() {
  const [curriculos, setCurriculos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    loadCurriculos();
  }, []);

  const saveCurriculos = async (data) => {
    try {
      await AsyncStorage.setItem('@curriculos', JSON.stringify(data));
    } catch (error) {
      console.error('Erro ao salvar currículos:', error);
    }
  };

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

  const addCurriculo = (data) => {
    const updatedCurriculos = [...curriculos, { ...data, id: Date.now().toString() }];
    setCurriculos(updatedCurriculos);
    saveCurriculos(updatedCurriculos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá!</Text>
        <Text style={styles.welcome}>Bem vindo(a) ao</Text>
        <Text style={styles.appName}>CV Builder+</Text>
      </View>

      <Image
        source={{ uri: 'https://i.imgur.com/8JcoGA3.png' }}
        style={styles.image}
      />

      <FlatList
        data={curriculos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('VisualizarCurriculo', { curriculo: item })}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Nenhum currículo criado ainda.</Text>
        )}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('CriarCurriculo', { onSave: addCurriculo })}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#14614E', 
    paddingVertical: 100,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 40,
    alignItems: 'flex-start',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', 
    marginBottom: 30,
    marginTop: -20,

  },
  welcome: {
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#C47026',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: -50, 
  },
  image: {
    width: 600, 
    height: 350,
    resizeMode: 'contain', 
    marginTop: -250, 
  },
  emptyText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#C47026', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '60%',
    alignItems: 'center',
    marginLeft: 75,
  },
  itemText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#C47026',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  floatingButtonText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
