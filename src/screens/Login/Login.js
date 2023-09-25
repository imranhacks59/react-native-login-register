import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Background from '../../components/Background'
import TextInput from '../../components/TextInput'
import { theme } from '../../core/Theme'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../redux/actions/userAction'
import { emailValidator } from '../../utils/EmailValidator'
import { passwordValidator } from '../../utils/PasswordValidator'

const Login = ({navigation}) => {
  const [email, setEmail] = useState({ value: '',error: ''});
  const [password, setPassword] = useState({ value: '',error: '' });
  
  const dispatch=useDispatch()
  const loginSubmit=()=>{
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
   
     dispatch(userLogin())
  };
  return (
    <Background>

      <TextInput
      label="Email"
      returnKeyType="next"
      value={email.value}
      onChangeText={(text) => setEmail({ value: text,error: ''})}
      error={!!email.error}
        errorText={email.error}
      autoCapitalize="none"
      autoCompleteType="email"
      textContentType="emailAddress"
      keyboardType="email-address"
    />
    <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text,error:''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={loginSubmit}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Signup')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

export default Login

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})