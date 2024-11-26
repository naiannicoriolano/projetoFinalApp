import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation(); 
  const [curriculos, setCurriculos] = useState([]);

  const handleAddCurriculo = (curriculo) => {
    setCurriculos((prevCurriculos) => [...prevCurriculos, curriculo]);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Criar Currículo"
        onPress={() => navigation.navigate('CriarCurriculo', { onSave: handleAddCurriculo })}
      />
      <FlatList
        data={curriculos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('VisualizarCurriculo', { curriculo: item })}>
            <Text style={styles.curriculoItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  curriculoItem: { fontSize: 18, marginVertical: 10 },
});
