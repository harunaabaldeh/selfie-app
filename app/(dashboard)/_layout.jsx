import { Tabs } from 'expo-router'
import { StyleSheet, useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors';

const DashboarLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <Tabs
            screenOptions={{
                headerShown: false, tabBarStyle: {
                    backgroundColor: theme.navBackground,
                    padding: 10,
                    height: 90,
                },
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor,
            }}
        >
            <Tabs.Screen
                name="profile"
                options={{ title: "Profile" }}
            />
            <Tabs.Screen
                name="books"
                options={{ title: "Books" }}
            />
            <Tabs.Screen
                name="create"
                options={{ title: "Create" }}
            />

        </Tabs>
    )
}

export default DashboarLayout;

const styles = StyleSheet.create({})