import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function VisualizarCurriculo() {
  const route = useRoute();
  const { curriculo } = route.params; 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Currículo</Text>

      <View style={styles.row}>
        <Icon name="person" size={20} color="#14614E" style={styles.icon} />
        <Text style={styles.label}>Nome:</Text>
      </View>
      <Text style={styles.value}>{curriculo.name}</Text>

      <View style={styles.row}>
        <Icon name="location-on" size={20} color="#14614E" style={styles.icon} />
        <Text style={styles.label}>Endereço:</Text>
      </View>
      <Text style={styles.value}>{curriculo.address}</Text>

      <View style={styles.row}>
        <Icon name="phone" size={20} color="#14614E" style={styles.icon} />
        <Text style={styles.label}>Telefone:</Text>
      </View>
      <Text style={styles.value}>{curriculo.phone}</Text>

      <View style={styles.row}>
        <Icon name="email" size={20} color="#14614E" style={styles.icon} />
        <Text style={styles.label}>E-mail:</Text>
      </View>
      <Text style={styles.value}>{curriculo.email}</Text>

      <View style={styles.row}>
        <Icon name="work" size={20} color="#14614E" style={styles.icon} />
        <Text style={styles.label}>Experiência Profissional:</Text>
      </View>
      <Text style={styles.value}>{curriculo.experience}</Text>

      <View style={styles.row}>
        <Icon name="school" size={20} color="#14614E" style={styles.icon} />
        <Text style={styles.label}>Educação:</Text>
      </View>
      <Text style={styles.value}>{curriculo.education}</Text>

      <View style={styles.row}>
        <Icon name="star" size={20} color="#14614E" style={styles.icon} />
        <Text style={styles.label}>Habilidades:</Text>
      </View>
      <Text style={styles.value}>{curriculo.skills}</Text>

      <View style={styles.row}>
        <Icon name="flag" size={20} color="#14614E" style={styles.icon} />
        <Text style={styles.label}>Objetivo Profissional:</Text>
      </View>
      <Text style={styles.value}>{curriculo.objective}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#14614E',
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    marginRight: 10, 
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
