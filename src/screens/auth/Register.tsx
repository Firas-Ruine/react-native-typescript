import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Register = () => {
  return (
    <View>
          <Text>Register</Text>
          <Link href={'/login'}>Login</Link>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})