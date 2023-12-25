import { StyleSheet} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router/tabs'
import { AntDesign } from '@expo/vector-icons'

const AppLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name={'index'} options={
                {
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={size} color={color} />
                    ),
                    headerShown: false
                }
            } />
            <Tabs.Screen name={'login'} options={
                {
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="login" size={size} color={color} />
                    ),
                    headerShown: false
                }
            } />
        </Tabs>
    )
}

export default AppLayout

const styles = StyleSheet.create({})