import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {AuthContext} from '../navigation/AuthProvider';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const LoginScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>Welcome to Chat app</Title>
      <FormInput
        labelName="Email"
        value={email}
        autoCapitalize="none"
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <FormInput
        labelName="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <FormButton
        title="Login"
        modeValue="contained"
        labelStyle={styles.loginButtonLabel}
        onPress={() => login(email, password)}
      />
      <FormButton
        title="New user? Join here"
        modeValue="text"
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={() => navigation.push('Signup')}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16,
  },
});
