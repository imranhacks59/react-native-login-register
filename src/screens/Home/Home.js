import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TopNavigation } from '@ui-kitten/components'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/userAction'

const Home = () => {
  const dispatch=useDispatch();
  const logoutHandler=()=>{
    dispatch(logout())
  }
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#fff' }}
    >
      <View style={styles.container}>
       <View>
        <Text>Hello Chahal Academy.</Text>
       </View>
       <View>
       <Button onPress={logoutHandler}>Logout</Button>
       </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})