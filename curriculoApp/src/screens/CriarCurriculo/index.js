import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CriarCurriculo() {
  const { control, handleSubmit, reset } = useForm();
  const navigation = useNavigation();
  const route = useRoute();
  const onSave = route?.params?.onSave || (() => {});

  const onSubmit = (data) => {
    onSave(data);
    reset();
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Nome:</Text>
        <Controller
          control={control}
          name="name"
          defaultValue=""
          rules={{ required: 'Nome é obrigatório' }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
              />
              {error && <Text style={styles.error}>{error.message}</Text>}
            </>
          )}
        />

        <Text style={styles.label}>Endereço:</Text>
        <Controller
          control={control}
          name="address"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput style={styles.input} onChangeText={onChange} value={value} />
          )}
        />

        <Text style={styles.label}>Telefone:</Text>
        <Controller
          control={control}
          name="phone"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              keyboardType="phone-pad"
            />
          )}
        />

        <Text style={styles.label}>E-mail:</Text>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
          )}
        />

        <Text style={styles.label}>Experiência Profissional:</Text>
        <Controller
          control={control}
          name="experience"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, styles.textarea]}
              onChangeText={onChange}
              value={value}
              multiline
            />
          )}
        />

        <Text style={styles.label}>Educação:</Text>
        <Controller
          control={control}
          name="education"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, styles.textarea]}
              onChangeText={onChange}
              value={value}
              multiline
            />
          )}
        />

        <Text style={styles.label}>Habilidades:</Text>
        <Controller
          control={control}
          name="skills"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, styles.textarea]}
              onChangeText={onChange}
              value={value}
              multiline
            />
          )}
        />

        <Text style={styles.label}>Objetivo Profissional:</Text>
        <Controller
          control={control}
          name="objective"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, styles.textarea]}
              onChangeText={onChange}
              value={value}
              multiline
            />
          )}
        />

        <Button title="Salvar Currículo" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textarea: {
    height: 80,
    textAlignVertical: 'top',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
