import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function VisualizarCurriculo() {
  const route = useRoute();
  const { curriculo } = route.params; // Recebe os dados do currículo pela navegação

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Currículo</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{curriculo.name}</Text>

      <Text style={styles.label}>Endereço:</Text>
      <Text style={styles.value}>{curriculo.address}</Text>

      <Text style={styles.label}>Telefone:</Text>
      <Text style={styles.value}>{curriculo.phone}</Text>

      <Text style={styles.label}>E-mail:</Text>
      <Text style={styles.value}>{curriculo.email}</Text>

      <Text style={styles.label}>Experiência Profissional:</Text>
      <Text style={styles.value}>{curriculo.experience}</Text>

      <Text style={styles.label}>Educação:</Text>
      <Text style={styles.value}>{curriculo.education}</Text>

      <Text style={styles.label}>Habilidades:</Text>
      <Text style={styles.value}>{curriculo.skills}</Text>

      <Text style={styles.label}>Objetivo Profissional:</Text>
      <Text style={styles.value}>{curriculo.objective}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 15,
  },
  value: {
    marginBottom: 10,
    fontSize: 16,
  },
});
