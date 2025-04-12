const { View, useColorScheme, StyleSheet } = require("react-native")
import { Colors } from "../constants/Colors"

const ThemedCard = ({ style, ...props }) => {
    const colorShcheme = useColorScheme();
    const theme = Colors[colorShcheme] ?? Colors.light;

    return (
        <View
            style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
            {...props}
        />
    )
}

export default ThemedCard;


const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20,
    }
})