import { StyleSheet, Text, useColorScheme } from "react-native"
import { Colors } from "../constants/Colors";

const ThemedText = ({ style, title = false, ...props }) => {
    const colorShcheme = useColorScheme();
    const theme = Colors[colorShcheme] ?? Colors.light;

    const textColor = title ? theme.title : theme.text;

    return (
        <Text
            style={[{ color: textColor }, style]}
            {...props}
        />
    )
}

export default ThemedText;


const styles = StyleSheet.create({})