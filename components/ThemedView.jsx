import { SafeAreaView, StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, safe = false, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    if (!safe) return (
        <SafeAreaView style={[{ backgroundColor: theme.background }, style]}
            {...props}
        />
    )

    const insets = useSafeAreaInsets();

    return (
        <View style={[{
            backgroundColor: theme.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
        },
            style
        ]}
            {...props}
        />
    )
}

export default ThemedView;

const styles = StyleSheet.create({})