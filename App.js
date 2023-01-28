import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Image, Text, View, TouchableHighlight, Switch, ScrollView, Alert } from 'react-native';

export default function App() {
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  onLogin = () =>
    Alert.alert(
      "Alert",
      "Bienvenido, gracias por crear la cuenta "
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.tittle}>Bienvenido a Práctica2 React Native</Text>

      <Image
        style={styles.img}
        source={require('@expo/snack-static/react-native-logo.png')}
      />

      <View style={styles.row}>
        <Text style={styles.textInput}>Email</Text>
        <TextInput
          label={'Email'}
          style={styles.input}
          placeholder='email'
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.textInput}>Password</Text>
        <TextInput
          label={'Password'}
          secureTextEntry={true}
          style={styles.input}
          placeholder='password'
          value={pwd}
          onChangeText={setPwd}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.termServ}>Terminos del servicios</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        
        <View style={styles.row}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text>He leído y estoy de acuerdo</Text>
        </View>
      </ScrollView>
      <TouchableHighlight
        style={
          !isEnabled
            ? styles.buttonDisabled
            : styles.button
        }
        disabled={!isEnabled}
        onPress={() => {
          this.onLogin();
        }}>
        <Text style={
          !isEnabled
            ? styles.textButtonDis
            : styles.textButton
        }>CREAR CUENTA</Text>
      </TouchableHighlight>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    margin: 5,
    flexDirection: 'row',
  },
  tittle: {
    paddingTop: 40,
    paddingBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    marginBottom: 20,
    width: 140,
    height: 140,
  },
  termServ: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  scrollView: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1f8fff',
    padding: 15,
    borderRadius: 3,
    marginBottom: 25,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 3,
    marginBottom: 25,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  textButtonDis: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#606060',
  },
  input: {
    height: 40,
    width: 150,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 3,
    paddingLeft: 5,
  },
});