import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Background from '../../components/Background'
import BackButton from '../../components/BackButton'
import TextInput from '../../components/TextInput'
import { Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { theme } from '../../core/Theme'
import { useDispatch } from 'react-redux'
import { userRegister } from '../../redux/actions/userAction'

const Signup = ({navigation}) => {
  const [name, setName] = useState({ value: ''})
  const [email, setEmail] = useState({ value: ''})
  const [password, setPassword] = useState({ value: ''})

  const dispatch=useDispatch()
  const registerSubmit=()=>{
    dispatch(userRegister())
  }
  return (
    <Background>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text })}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text})}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text})}  
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={registerSubmit}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

export default Signup

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})