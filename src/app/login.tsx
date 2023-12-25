import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from '../helpers/DimensionHelper'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const login = () => {
    return (
        <View>
            <StatusBar style="auto" />
            <Link href={'/'} >Back</Link>
            <Text style={styles.header}>Login Page</Text>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    header: {
        fontSize: responsiveFontSize(30),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: responsiveHeight(10)
    }
})