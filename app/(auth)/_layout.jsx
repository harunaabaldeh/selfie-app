import { StatusBar, StyleSheet } from 'react-native'
import React, { use } from 'react'
import { Stack } from 'expo-router'
import { useUser } from '../../hooks/useUser';
import GuestOnly from '../../components/auth/GuestOnly';

const AuthLayout = () => {
    const { user } = useUser();

    return (
        <GuestOnly>
            <StatusBar style="auto" />
            <Stack
                screenOptions={{ headerShown: false, animation: "none" }}
            />
        </GuestOnly>
    )
}

export default AuthLayout

const styles = StyleSheet.create({})