import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  const handleLogin = () => {
    // Ajoutez ici le traitement de la validation du formulaire
  };

  return (
    <View style={styles.container}>
      <Text>Entrez votre email :</Text>
      <TextInput style={styles.input} />

      <Text>Entrez votre mot de passe :</Text>
      <TextInput style={styles.input} secureTextEntry={true} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Login;
