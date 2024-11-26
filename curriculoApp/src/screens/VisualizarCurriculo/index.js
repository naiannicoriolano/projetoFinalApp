import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CriarCurriculo() {
  const navigation = useNavigation(); 
  const route = useRoute(); 
  const { control, handleSubmit, reset } = useForm();

  const onSave = route?.params?.onSave || (() => {});

  const onSubmit = (data) => {
    onSave(data);
    reset();
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <Controller
        control={control}
        name="name"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} />
        )}
      />
      <Text style={styles.label}>Objetivo Profissional:</Text>
      <Controller
        control={control}
        name="objective"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} />
        )}
      />
      <Button title="Salvar" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginVertical: 10, fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 15 },
});
