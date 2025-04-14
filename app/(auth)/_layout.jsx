import { StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
    return (
        <>
            <StatusBar style="auto" />
            <Stack
                screenOptions={{ headerShown: false, animation: "none" }}
            />
        </>
    )
}

export default AuthLayout

const styles = StyleSheet.create({})