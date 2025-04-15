import { StatusBar, StyleSheet } from 'react-native'
import React, { use } from 'react'
import { Stack } from 'expo-router'
import { useUser } from '../../hooks/useUser';

const AuthLayout = () => {
    const { user } = useUser();
    console.log(user);

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